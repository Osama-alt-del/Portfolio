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

  items = document.querySelectorAll(".projectItem");

  if (items[0].classList.contains("active")) {
    projectView.innerHTML = "<p>Item 1</p>";
  } else if (items[1].classList.contains("active")) {
    console.log("item 2");
  }
}
