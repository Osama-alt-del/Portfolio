function openProjects(i) {
  const projectCard = i.closest(".project_card");
  projectCard.classList.toggle("open");

  // Show the first project straight away instead of an empty panel
  const overview = projectCard.querySelector(".projectOverview");
  const firstItem = projectCard.querySelector(".projectItem");
  if (projectCard.classList.contains("open") && firstItem &&
      overview.querySelector(".overview_placeholder")) {
    firstItem.click();
  }
}

function displayContentPython(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  items = projectView.parentElement.querySelectorAll(".projectItem");

  if (items[0].classList.contains("active")) {
    projectView.innerHTML = `
              <div class = "title_github">
                <h1>Gas Simulation </h1>
                <p>
                  <a target = "_blank" class = "Link"href="https://github.com/Osama-alt-del/Pygame-Gas-Simulation">Github</a>
                </p>
              </div>
              <div class = "Content">
                <div class = "Description">
                  <p style = "margin-top : 0px;">
                    This is a very simple gas particle simulation made with pygame <br><br>
                    The size of the border can be changed using the up and down arrow keys, thus increasing/decreasing the collision rate of the particles<br><br>
                    The project can be run on linux devices by using the run.sh shell file in the code
                  </p>
                </div>
                <div class = "imageDiv">
                  <img src="../images/Gas_Simulation.gif" alt="Gas Simulation Gif">
                </div>
              </div> `;
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `
              <div class = "title_github">
                <h1>Fibonnaci Visual</h1>
                <p>
                  <a target = "_blank" class = "Link"href="https://github.com/Osama-alt-del/Fibonacci-Graphic-Turtle">Github</a>
                </p>
              </div>
              <div class = "Content">
                <div class = "Description">
                  <p style = "margin-top : 0px;">
                    This is a visual of the fibonnacci series created using turtle. <br> <br>
                    You can choose how many squares you want to be drawn <br><br>
                    There is a shell file to run the file conveniently on unix devices
                  </p>
                </div>
                <div class = "imageDiv">
                  <img src= "../images/Fibonacci.gif" alt="Fibonacci-Graphic-Turtle gif">
                </div>
              </div>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

function displayContentCpp(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  console.log(projectView);
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  // I need to make sure that this is relevant to only the current div
  items = projectView.parentElement.querySelectorAll(".projectItem");
  console.log(items);
  if (items[0].classList.contains("active")) {
    projectView.innerHTML = "<p>item 1</p>";
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `<p>item 2</p>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

function displayContentFlutter(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  console.log(projectView);
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  // I need to make sure that this is relevant to only the current div
  items = projectView.parentElement.querySelectorAll(".projectItem");
  console.log(items);
  if (items[0].classList.contains("active")) {
    projectView.innerHTML = "<p>HEy1</p>";
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `<p>item 2</p>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

function displayContentWeb(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  console.log(projectView);
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  // I need to make sure that this is relevant to only the current div
  items = projectView.parentElement.querySelectorAll(".projectItem");
  console.log(items);
  if (items[0].classList.contains("active")) {
    projectView.innerHTML = `
              <div class = "title_github">
                <h1>Portfolio</h1>
                <p>
                  <a target = "_blank" class = "Link"href="https://github.com/Osama-alt-del/Portfolio">Github</a>
                </p>
              </div>
              <div class = "Content">
                <div class = "Description">
                  <p style = "margin-top : 0px;">
                    This is the website that you see now! <br><br>
                    This is my first ever non Flutter web project!
                  </p>

                  <div class = "imageDiv">
                    <img class = "portfolio_image" src="../images/Portfolio.gif" alt="Portfolio Gif">
                  </div>
                </div>
              </div>`;
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `<p>item 2</p>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

function displayContentPythonj(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  items = projectView.parentElement.querySelectorAll(".projectItem");

  if (items[0].classList.contains("active")) {
    projectView.innerHTML = `
              <div class = "title_github">
                <h1>ガスシミュレーション</h1>
                <p>
                  <a target = "_blank" class = "Link"href="https://github.com/Osama-alt-del/Pygame-Gas-Simulation">Github</a>
                </p>
              </div>
              <div class = "Content">
                <div class = "Description">
                  <p style = "margin-top : 0px;">
                    これはパイソンで作られたシンプルなガスシミュレーション。<br><br>
                    上と下キーでボーダーのサイズを変えて、衝突率を上げる、または下げる事ができます。<br><br>
                    UNIXデバイスでも簡単に実行できるよう、run.shというファイルも含められています。
                  </p>
                </div>
                <div class = "imageDiv">
                  <img src="../images/Gas_Simulation.gif" alt="Gas Simulation Gif">
                </div>
              </div> `;
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `
              <div class = "title_github">
                <h1>フィボナッチビジュアル</h1>
                <p>
                  <a target = "_blank" class = "Link"href="https://github.com/Osama-alt-del/Fibonacci-Graphic-Turtle">Github</a>
                </p>
              </div>
              <div class = "Content">
                <div class = "Description">
                  <p style = "margin-top : 0px;">
                    これはフィボナッチシリーズをビジュアル化したプロジェクトです。<br><br>
                    正方形の数を入力出来ます。<br><br>
                    UNIXデバイスのためにrun.shが含まれています。<br><br>
                  </p>
                </div>
                <div class = "imageDiv">
                  <img src= "../images/Fibonacci.gif" alt="Fibonacci-Graphic-Turtle gif">
                </div>
              </div>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

function displayContentCppj(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  console.log(projectView);
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  // I need to make sure that this is relevant to only the current div
  items = projectView.parentElement.querySelectorAll(".projectItem");
  console.log(items);
  if (items[0].classList.contains("active")) {
    projectView.innerHTML = "<p>item 1</p>";
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `<p>item 2</p>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

function displayContentFlutterj(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  console.log(projectView);
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  // I need to make sure that this is relevant to only the current div
  items = projectView.parentElement.querySelectorAll(".projectItem");
  console.log(items);
  if (items[0].classList.contains("active")) {
    projectView.innerHTML = "<p>HEy1</p>";
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `<p>item 2</p>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

function displayContentWebj(item) {
  items = item.closest(".projectList").querySelectorAll(".projectItem");
  projectView = item.parentElement.parentElement.parentElement.querySelector(
    ".projectOverview",
  );
  console.log(projectView);
  items.forEach((item) => {
    //Firstly make sure that none of them are active
    item.classList.remove("active");
  });

  // The item that was actually pressed is given the active class
  item.classList.add("active");

  // I need to make sure that this is relevant to only the current div
  items = projectView.parentElement.querySelectorAll(".projectItem");
  console.log(items);
  if (items[0].classList.contains("active")) {
    projectView.innerHTML = "<p>Web project 1</p>";
  } else if (items[1].classList.contains("active")) {
    projectView.innerHTML = `<p>item 2</p>`;
  }

  projectView.style.animation = "none";
  projectView.offsetHeight;
  projectView.style.opacity = "0";
  projectView.style.animation = "fadeIn 0.5s forwards";
}

/* ------------------------------------------------------------------------
   Dream Land effects
   ------------------------------------------------------------------------ */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Wrap every character of .bouncy headings in a span so they can hop
function splitLetters(element) {
  let index = 0;
  function walk(node) {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const fragment = document.createDocumentFragment();
        [...child.textContent].forEach((char) => {
          if (char.trim() === "") {
            fragment.appendChild(document.createTextNode(char));
            return;
          }
          const span = document.createElement("span");
          span.className = "letter";
          span.style.setProperty("--i", index++);
          span.textContent = char;
          fragment.appendChild(span);
        });
        child.replaceWith(fragment);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  }
  element.setAttribute("aria-label", element.textContent.trim());
  walk(element);
}

document.querySelectorAll(".bouncy").forEach(splitLetters);

// Reveal sections as they scroll into view
document.querySelectorAll(".stagger").forEach((group) => {
  [...group.children].forEach((child, i) => {
    child.style.setProperty("--d", i * 80 + "ms");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      target.classList.add("is-visible");
      revealObserver.unobserve(target);
      if (target.classList.contains("stagger")) {
        // After the entrance finishes, let hover effects react instantly
        const settleTime = target.children.length * 80 + 1600;
        setTimeout(() => target.classList.add("settled"), settleTime);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".reveal, .stagger").forEach((el) => revealObserver.observe(el));

// Clicking the puffball makes it jump, spin and shower stars
function burstStars(container) {
  for (let i = 0; i < 10; i++) {
    const star = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
    const distance = 110 + Math.random() * 70;
    star.className = "burst_star";
    star.style.setProperty("--dx", Math.cos(angle) * distance + "px");
    star.style.setProperty("--dy", Math.sin(angle) * distance + "px");
    star.style.setProperty("--r", Math.random() * 540 - 270 + "deg");
    star.style.setProperty("--s", 16 + Math.random() * 16 + "px");
    container.appendChild(star);
    star.addEventListener("animationend", () => star.remove());
  }
}

document.querySelectorAll(".hero_kirby").forEach((kirby) => {
  kirby.querySelector(".kirby_btn").addEventListener("click", () => {
    kirby.classList.remove("poyo");
    void kirby.offsetWidth; // restart the animation
    kirby.classList.add("poyo");
    if (!reduceMotion) burstStars(kirby);
  });
});

// Little star trail that follows the mouse
if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  const hues = [0, 0, 150, 290];
  let lastSparkle = 0;
  window.addEventListener(
    "pointermove",
    (event) => {
      const now = performance.now();
      if (now - lastSparkle < 50) return;
      lastSparkle = now;
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.style.left = event.clientX + "px";
      sparkle.style.top = event.clientY + "px";
      sparkle.style.setProperty("--size", 8 + Math.random() * 10 + "px");
      sparkle.style.setProperty("--hue", hues[Math.floor(Math.random() * hues.length)] + "deg");
      document.body.appendChild(sparkle);
      sparkle.addEventListener("animationend", () => sparkle.remove());
    },
    { passive: true },
  );
}

/* ------------------------------------------------------------------------
   Background music: an original 8-bit loop played with the Web Audio API.
   To use your own track instead, set MUSIC_FILE to its path,
   e.g. "../audio/theme.mp3" (relative to the pages folders).
   ------------------------------------------------------------------------ */

const MUSIC_FILE = null;
const MUSIC_KEY = "dreamland-music";

const TEMPO = 150; // beats per minute
const EIGHTH = 60 / TEMPO / 2;

// One token per eighth note: a note name, "." to hold the previous note, "-" for a rest
const MELODY = [
  "E5 . G5 A5 G5 . E5 .",
  "C5 . E5 . A5 . G5 .",
  "F5 . A5 . C6 . A5 G5",
  "B4 . D5 . G5 . - .",
  "E5 G5 C6 . B5 . G5 .",
  "A5 . C6 . E6 . D6 C6",
  "A5 . F5 . D5 . B4 .",
  "C5 . G4 . C5 . - .",
].join(" ").split(" ");

// Quarter-note bass line, two eighths per token
const BASS = [
  "C3 G3 C3 G3", "A2 E3 A2 E3", "F2 C3 F2 C3", "G2 D3 G2 D3",
  "C3 G3 C3 G3", "A2 E3 A2 E3", "F2 C3 G2 D3", "C3 G2 C3 -",
].join(" ").split(" ");

const NOTE_INDEX = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

function noteToFrequency(note) {
  const midi = NOTE_INDEX[note[0]] + (Number(note.slice(1)) + 1) * 12;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

const music = {
  ctx: null,
  master: null,
  noise: null,
  timer: null,
  step: 0,
  nextTime: 0,
  audio: null,
  playing: false,
};

function playTone(type, frequency, start, length, volume) {
  const osc = music.ctx.createOscillator();
  const gain = music.ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(volume * 0.6, start + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
  osc.connect(gain).connect(music.master);
  osc.start(start);
  osc.stop(start + length + 0.02);
}

function playHat(start) {
  const source = music.ctx.createBufferSource();
  const filter = music.ctx.createBiquadFilter();
  const gain = music.ctx.createGain();
  source.buffer = music.noise;
  filter.type = "highpass";
  filter.frequency.value = 7000;
  gain.gain.setValueAtTime(0.05, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.05);
  source.connect(filter).connect(gain).connect(music.master);
  source.start(start);
  source.stop(start + 0.06);
}

function scheduleStep(step, time) {
  const note = MELODY[step];
  if (note !== "." && note !== "-") {
    let holds = 1;
    while (MELODY[(step + holds) % MELODY.length] === ".") holds++;
    playTone("square", noteToFrequency(note), time, holds * EIGHTH * 0.95, 0.07);
  }
  if (step % 2 === 0) {
    const bass = BASS[step / 2];
    if (bass !== "-") playTone("triangle", noteToFrequency(bass), time, EIGHTH * 1.8, 0.22);
  } else {
    playHat(time);
  }
}

// Look-ahead scheduler keeps the timing tight even if the page is busy
function scheduler() {
  while (music.nextTime < music.ctx.currentTime + 0.12) {
    scheduleStep(music.step, music.nextTime);
    music.nextTime += EIGHTH;
    music.step = (music.step + 1) % MELODY.length;
  }
}

function startMusic() {
  if (music.playing) return;
  music.playing = true;

  if (MUSIC_FILE) {
    music.audio = music.audio || Object.assign(new Audio(MUSIC_FILE), { loop: true, volume: 0.4 });
    music.audio.play().catch(() => {});
    return;
  }

  if (!music.ctx) {
    music.ctx = new (window.AudioContext || window.webkitAudioContext)();
    music.master = music.ctx.createGain();
    music.master.gain.value = 0.5;
    music.master.connect(music.ctx.destination);
    music.noise = music.ctx.createBuffer(1, music.ctx.sampleRate * 0.1, music.ctx.sampleRate);
    const data = music.noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  }
  music.ctx.resume();
  music.step = 0;
  music.nextTime = music.ctx.currentTime + 0.1;
  music.timer = setInterval(scheduler, 25);
}

function stopMusic() {
  music.playing = false;
  if (music.audio) music.audio.pause();
  if (music.timer) clearInterval(music.timer);
  music.timer = null;
  if (music.ctx) music.ctx.suspend();
}

function saveMusicSetting(value) {
  try {
    localStorage.setItem(MUSIC_KEY, value);
  } catch (e) {
    // Storage can be blocked (private mode); the toggle still works for this page
  }
}

function loadMusicSetting() {
  try {
    return localStorage.getItem(MUSIC_KEY);
  } catch (e) {
    return null;
  }
}

(function createMusicButton() {
  const japanese = document.documentElement.lang === "ja";
  const labels = japanese ? { on: "音楽を止める", off: "音楽を流す" } : { on: "Pause music", off: "Play music" };

  const button = document.createElement("button");
  button.type = "button";
  button.className = "music_toggle";
  button.innerHTML = '<i class = "fa fa-music"></i><span class = "music_notes" aria-hidden = "true"><span>♪</span><span>♫</span></span>';
  document.body.appendChild(button);

  function render(on) {
    button.classList.toggle("is-playing", on);
    button.setAttribute("aria-pressed", on);
    button.setAttribute("aria-label", on ? labels.on : labels.off);
    button.title = on ? labels.on : labels.off;
  }

  button.addEventListener("click", () => {
    if (music.playing) {
      stopMusic();
      saveMusicSetting("off");
      render(false);
    } else {
      startMusic();
      saveMusicSetting("on");
      render(true);
    }
  });

  // Browsers only allow sound after the visitor interacts with the page,
  // so if music was on, it resumes on the first click or key press.
  if (loadMusicSetting() === "on") {
    render(true);
    const resume = (event) => {
      if (event.target.closest && event.target.closest(".music_toggle")) return;
      if (!music.playing && loadMusicSetting() === "on") startMusic();
    };
    window.addEventListener("pointerdown", resume, { once: true });
    window.addEventListener("keydown", resume, { once: true });
  } else {
    render(false);
  }
})();
