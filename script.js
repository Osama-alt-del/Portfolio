
function openProjects(projectCard) {
  if (projectCard.offsetHeight == 165) {
    projectCard.style.animation = "openProjects 1.5s forwards";
  }
  else if (projectCard.offsetHeight == 500) {
    projectCard.style.animation = "closeProjects 1.5s forwards";
  }
}

function getSmaller(projectCard){
  // I want to check if there is more than 1 image, if there is, then I want to change them all
  // change to select all images, and then make it so that
  const childImgs = projectCard.querySelectorAll('img');
  const childh1 = projectCard.querySelector('h1');
  if (childImgs.length > 1) {
    childImgs.forEach(img => {
    if (img.offsetHeight== 100) {
      img.style.animation = "getSmaller 1.5s forwards";
      childh1.style.animation = "getSmallerTitle 1.5s forwards";
    }
    else if (img.offsetHeight == 50) {
      img.style.animation = "getLarger 1.5s forwards";
      childh1.style.animation = "getLargerTitle 1.5s forwards";
    }
    });
  }
  else {
  childImg = childImgs[0];
  if (childImg.offsetHeight == 100) {
    childImg.style.animation = "getSmaller 1.5s forwards";
    childh1.style.animation = "getSmallerTitle 1.5s forwards";
  }
  else if (childImg.offsetHeight == 50) {
    childImg.style.animation = "getLarger 1.5s forwards";
    childh1.style.animation = "getLargerTitle 1.5s forwards";
  }

  }
}
