/* ------------------------------------------------------------------------
   Work experience "level select" map (pages/experience.html)

   The page works in English and Japanese. Open it with ?lang=ja for
   Japanese. Any element with data-en / data-ja (or data-en-href /
   data-ja-href) gets the matching text or link.

   To add a company: add an entry to STAGES. x and y are where the stage
   sits on the map (0–1 across and down); the islands are drawn in the
   <svg class="map_art"> in experience.html, so move or add one there too.
   ------------------------------------------------------------------------ */

const PAGE_LANG = new URLSearchParams(location.search).get("lang") === "ja" ? "ja" : "en";

const STAGES = [
  {
    status: "cleared",
    x: 0.22,
    y: 0.58,
    logo: "../images/RobinsonAerospace.jpg",
    name: "Robinson Aerospace Systems",
    stage: { en: "Stage 1", ja: "ステージ 1" },
    role: { en: "Part-Time Software Developer", ja: "パートタイム ソフトウェア開発者" },
    dates: { en: "Nov 2024 – Sep 2025", ja: "2024年11月 – 2025年9月" },
    points: {
      en: [
        "Significantly contributed to the development of RASCube's satellite UI using Dart and Flutter.",
        "Implemented real-time satellite tracking map functionality and dynamic, openable, and reorderable data windows.",
        "Played a key role in building a global satellite map system, visualising status with time-based markers and clusters.",
      ],
      ja: [
        "Dart と Flutter を用いた RASCube の衛星 UI の開発に大きく貢献",
        "リアルタイム衛星追跡マップ機能と、開閉・並べ替えが可能な動的データウィンドウを実装",
        "時間ベースのマーカーとクラスターで衛星の状態を可視化するグローバル衛星マップシステムの構築において中心的な役割を担当",
      ],
    },
  },
  {
    status: "current",
    x: 0.58,
    y: 0.46,
    badge: "REDARC",
    name: "REDARC Electronics",
    stage: { en: "Stage 2", ja: "ステージ 2" },
    role: null,
    dates: { en: "23 Nov 2026 – Present", ja: "2026年11月23日 – 現在" },
    points: {
      en: ["A brand-new stage, starting 23 November 2026!"],
      ja: ["2026年11月23日スタートの新しいステージ！"],
    },
  },
  {
    status: "locked",
    x: 0.86,
    y: 0.32,
    name: "???",
    stage: { en: "Stage 3", ja: "ステージ 3" },
    role: null,
    dates: { en: "Coming soon", ja: "近日公開" },
    points: {
      en: ["This stage hasn't been unlocked yet."],
      ja: ["このステージはまだ解放されていません。"],
    },
  },
];

const FLAGS = {
  cleared: { en: "CLEAR!", ja: "クリア！" },
  current: { en: "NOW", ja: "いま" },
};

const LOCKED_MESSAGE = { en: "Locked!", ja: "ロック中！" };

/* ---------------------------------------------------------------- language */

function applyPageLanguage() {
  document.documentElement.lang = PAGE_LANG;
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.dataset[PAGE_LANG];
  });
  document.querySelectorAll("[data-en-href]").forEach((el) => {
    el.href = PAGE_LANG === "ja" ? el.dataset.jaHref : el.dataset.enHref;
  });
  document.title = PAGE_LANG === "ja" ? "職歴 · Osama" : "Experience · Osama";
}

/* ---------------------------------------------------------------- map */

function buildStage(stage, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `level is-${stage.status}`;
  button.dataset.index = index;
  button.style.setProperty("--x", stage.x * 100 + "%");
  button.style.setProperty("--y", stage.y * 100 + "%");

  let door;
  if (stage.logo) {
    door = `<img src="${stage.logo}" alt="">`;
  } else if (stage.badge) {
    door = `<span class = "level_badge">${stage.badge}</span>`;
  } else {
    door = `<span class = "level_mystery">?</span><i class = "fa fa-lock level_lock"></i>`;
  }

  const flag = FLAGS[stage.status]
    ? `<span class = "level_flag level_flag_${stage.status}">${FLAGS[stage.status][PAGE_LANG]}</span>`
    : "";

  button.innerHTML = `
    <span class = "level_door_wrap">
      <span class = "level_ring" aria-hidden = "true"></span>
      <span class = "level_door">${door}</span>
      ${flag}
    </span>
    <span class = "level_label">
      <span class = "level_stage">${stage.stage[PAGE_LANG]}</span>
      <span class = "level_name">${stage.name}</span>
      <span class = "level_dates">${stage.dates[PAGE_LANG]}</span>
    </span>`;
  button.setAttribute("aria-label", `${stage.stage[PAGE_LANG]}: ${stage.name}, ${stage.dates[PAGE_LANG]}`);
  return button;
}

const levelMap = {
  frame: null,
  world: null,
  kirby: null,
  selected: 1,
};

function frameSize() {
  return { w: levelMap.frame.clientWidth, h: levelMap.frame.clientHeight };
}

// The world is twice as wide as it is tall. Scale it up and slide it so the
// chosen point sits in the middle, without showing past the map edges.
function placeCamera(x, y, scale) {
  const { w, h } = frameSize();
  const s = Math.max(scale, (2 * h) / w);
  const worldW = w * s;
  const worldH = (w / 2) * s;
  const tx = Math.min(0, Math.max(w - worldW, w / 2 - x * worldW));
  const ty = Math.min(0, Math.max(h - worldH, h / 2 - y * worldH));
  levelMap.world.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
}

function zoomLevel() {
  return levelMap.frame.clientWidth < 700 ? 3.2 : 1.8;
}

function cameraToStage(index) {
  const stage = STAGES[index];
  placeCamera(stage.x, stage.y, zoomLevel());
}

function moveKirby(index, animate) {
  const stage = STAGES[index];
  const kirby = levelMap.kirby;
  kirby.style.setProperty("--kx", stage.x * 100 + "%");
  kirby.style.setProperty("--ky", stage.y * 100 + "%");
  if (animate) {
    kirby.classList.remove("is-walking");
    void kirby.offsetWidth;
    kirby.classList.add("is-walking");
  }
}

function renderPanel(index) {
  const stage = STAGES[index];
  const panel = document.querySelector(".stage_panel");
  const badge = panel.querySelector(".stage_panel_badge");

  if (stage.logo) {
    badge.innerHTML = `<img src="${stage.logo}" alt="${stage.name}">`;
  } else if (stage.badge) {
    badge.innerHTML = `<span class = "level_badge">${stage.badge}</span>`;
  } else {
    badge.innerHTML = `<span class = "level_mystery">?</span>`;
  }
  badge.className = `stage_panel_badge is-${stage.status}`;

  panel.querySelector(".stage_panel_stage").textContent = stage.stage[PAGE_LANG];
  panel.querySelector(".stage_panel_name").textContent = stage.name;
  const role = panel.querySelector(".stage_panel_role");
  role.textContent = stage.role ? stage.role[PAGE_LANG] : "";
  role.hidden = !stage.role;
  panel.querySelector(".stage_panel_dates").textContent = stage.dates[PAGE_LANG];
  panel.querySelector(".stage_panel_points").innerHTML = stage.points[PAGE_LANG]
    .map((point) => `<li>${point}</li>`)
    .join("");

  panel.classList.remove("is-changing");
  void panel.offsetWidth;
  panel.classList.add("is-changing");
}

function shakeLocked(button) {
  button.classList.remove("is-shaking");
  void button.offsetWidth;
  button.classList.add("is-shaking");
  const label = button.querySelector(".level_dates");
  const original = STAGES[button.dataset.index].dates[PAGE_LANG];
  label.textContent = LOCKED_MESSAGE[PAGE_LANG];
  setTimeout(() => (label.textContent = original), 1200);
}

function selectStage(index, animate = true) {
  const stage = STAGES[index];
  if (!stage) return;
  if (stage.status === "locked") {
    shakeLocked(levelMap.world.querySelectorAll(".level")[index]);
    return;
  }
  levelMap.selected = index;
  levelMap.world.querySelectorAll(".level").forEach((el, i) => {
    el.classList.toggle("is-selected", i === index);
    el.setAttribute("aria-pressed", i === index);
  });
  moveKirby(index, animate);
  cameraToStage(index);
  renderPanel(index);
}

function stepStage(direction) {
  const next = levelMap.selected + direction;
  if (next < 0 || next >= STAGES.length) return;
  selectStage(next);
}

/* ---------------------------------------------------------------- full map */

function openFullMap() {
  const dialog = document.querySelector(".map_modal");
  const holder = dialog.querySelector(".map_full_frame");
  holder.innerHTML = "";
  const copy = levelMap.world.cloneNode(true);
  copy.style.transform = "none";
  holder.appendChild(copy);
  copy.querySelectorAll(".level").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      if (STAGES[index].status === "locked") {
        shakeLocked(button);
        return;
      }
      dialog.close();
      selectStage(index);
    });
  });
  dialog.showModal();
}

function setUpFullMap() {
  const dialog = document.querySelector(".map_modal");
  document.querySelector(".map_expand").addEventListener("click", openFullMap);
  dialog.querySelector(".map_modal_close").addEventListener("click", () => dialog.close());
  // Clicking the dimmed backdrop closes the dialog too
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

/* ---------------------------------------------------------------- start */

function setUpLevelMap() {
  levelMap.frame = document.querySelector(".map_frame");
  levelMap.world = levelMap.frame.querySelector(".map_world");
  levelMap.kirby = levelMap.world.querySelector(".map_kirby");

  STAGES.forEach((stage, index) => {
    const button = buildStage(stage, index);
    button.addEventListener("click", () => selectStage(index));
    levelMap.world.appendChild(button);
  });

  levelMap.frame.querySelector(".map_prev").addEventListener("click", () => stepStage(-1));
  levelMap.frame.querySelector(".map_next").addEventListener("click", () => stepStage(1));

  window.addEventListener("keydown", (event) => {
    if (document.querySelector(".map_modal").open) return;
    if (event.key === "ArrowLeft") stepStage(-1);
    if (event.key === "ArrowRight") stepStage(1);
  });

  // Start on the whole map, then fly the camera in to the current job
  levelMap.world.classList.add("no-transition");
  placeCamera(0.5, 0.5, 1);
  selectStage(levelMap.selected, false);
  placeCamera(0.5, 0.5, 1);
  void levelMap.world.offsetWidth;
  levelMap.world.classList.remove("no-transition");
  setTimeout(() => cameraToStage(levelMap.selected), 700);

  window.addEventListener("resize", () => {
    levelMap.world.classList.add("no-transition");
    cameraToStage(levelMap.selected);
    void levelMap.world.offsetWidth;
    levelMap.world.classList.remove("no-transition");
  });

  setUpFullMap();
}

applyPageLanguage();
setUpLevelMap();
