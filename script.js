
function openProjects(projectCard) {
  if (projectCard.offsetHeight == 165) {
    projectCard.style.animation = "openProjects 1.5s forwards";
  }
  else if (projectCard.offsetHeight == 500) {
    projectCard.style.animation = "closeProjects 1.5s forwards";
  }
}

function getSmaller(projectCard){
  const childImg = projectCard.querySelector('img');
  const childh1 = projectCard.querySelector('h1');
  if (childImg.offsetHeight == 100) {
    childImg.style.animation = "getSmaller 1.5s forwards";
  }
}
