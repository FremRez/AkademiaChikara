const menuButton = document.querySelector("#menu-icon");
const responsiveMenu = document.querySelector("#responsive-menu");
const closeMenuButton = document.querySelector("#close-menu-icon");
const showMenuTrainingListButton = document.querySelector(".show-trainin-list");
const menuTrainingList = document.querySelector(".res-menu-training-list");

menuButton.addEventListener("click", () => {
  responsiveMenu.style.setProperty("display", "flex");
});

closeMenuButton.addEventListener("click", () => {
  responsiveMenu.style.setProperty("display", "none");
});

showMenuTrainingListButton.addEventListener("click", () => {
  menuTrainingList.classList.toggle("hidden");
});
