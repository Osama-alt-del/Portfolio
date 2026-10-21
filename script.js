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
