function openProjects(i) {
  const projectCard = i.parentElement.parentElement;
  if (projectCard.offsetHeight == 165) {
    projectCard.style.animation = "openProjects 1.5s forwards";
    getSmaller(projectCard);
  } else if (projectCard.offsetHeight == 500) {
    projectCard.style.animation = "closeProjects 1.5s forwards";
    getSmaller(projectCard);
  }
}

function getSmaller(projectCard) {
  // I'm trying to make the content appear as a block using animations?
  const childImgs = projectCard.querySelectorAll("img");
  const childh1 = projectCard.querySelector("h1");
  const childi = projectCard.querySelector("i");

  // This doesn't work, the animation doesn't actually make it fade in
  const content = projectCard.querySelector("div.projectContent");
  if (childImgs.length > 1) {
    childImgs.forEach((img) => {
      if (img.offsetHeight == 100) {
        img.style.animation = "getSmaller 1.5s forwards";
        childh1.style.animation = "getSmallerTitle 1.5s forwards";
        childi.style.animation = "getSmallerArrow 1.5s forwards";
        content.style.animation = "showContent 1.5s forwards";
      } else if (img.offsetHeight == 50) {
        img.style.animation = "getLarger 1.5s forwards";
        childh1.style.animation = "getLargerTitle 1.5s forwards";
        childi.style.animation = "getLargerArrow 1.5s forwards";
        content.style.animation = "hideContent 1.5s forwards";
      }
    });
  } else {
    childImg = childImgs[0];
    if (childImg.offsetHeight == 100) {
      childImg.style.animation = "getSmaller 1.5s forwards";
      childh1.style.animation = "getSmallerTitle 1.5s forwards";
      childi.style.animation = "getSmallerArrow 1.5s forwards";
      content.style.animation = "showContent 1.5s forwards";
    } else if (childImg.offsetHeight == 50) {
      childImg.style.animation = "getLarger 1.5s forwards";
      childh1.style.animation = "getLargerTitle 1.5s forwards";
      childi.style.animation = "getLargerArrow 1.5s forwards";
      content.style.animation = "hideContent 1.5s forwards";
    }
  }
}

function displayContentPython(item) {
  items = document.querySelectorAll(".projectItem");
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
  projectView.style.animation = "fadeIn 1.5s forwards";
}

function displayContentCpp(item) {
  items = document.querySelectorAll(".projectItem");
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
  projectView.style.animation = "fadeIn 1.5s forwards";
}

function displayContentFlutter(item) {
  items = document.querySelectorAll(".projectItem");
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
  projectView.style.animation = "fadeIn 1.5s forwards";
}

function displayContentWeb(item) {
  items = document.querySelectorAll(".projectItem");
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
  projectView.style.animation = "fadeIn 1.5s forwards";
}
