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
