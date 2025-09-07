
function openProjects(projectCard) {
  console.log(projectCard.offsetHeight);
  if (projectCard.offsetHeight == 165) {
    projectCard.style.animation = "openProjects 1.5s forwards";
  }
  else if (projectCard.offsetHeight == 500) {
    console.log("running");
    projectCard.style.animation = "closeProjects 1.5s forwards";
  }
}
