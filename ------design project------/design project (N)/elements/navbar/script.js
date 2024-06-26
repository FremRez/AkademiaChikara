//------------------------------res menu

const resMenuWrapper = document.createElement("div");
resMenuWrapper.id = "responsive-menu";

const resMenuList = document.createElement("div");
resMenuList.id = "responsive-menu-list";

const closeIcon = document.createElement("ion-icon");
closeIcon.name = "close-outline";
closeIcon.id = "close-menu-icon";
resMenuList.insertAdjacentElement("afterbegin", closeIcon);

const menuOptions = [
  "Strona główna",
  "Aktualności",
  "Obozy i półkolonie",
  "Cennik",
  "Kontakt",
];

menuOptions.forEach((option) => {
  const menuLink = document.createElement("a");
  menuLink.classList.add("res-menu-option");
  menuLink.textContent = option;

  resMenuList.insertAdjacentElement("beforeend", menuLink);
});

resMenuWrapper.insertAdjacentElement("afterbegin", resMenuList);
document.querySelector("nav").appendChild(resMenuWrapper);

const aktualnosci = document.querySelector("#responsive-menu a:nth-child(3)");

const showTrainingList = document.createElement("div");
showTrainingList.classList.add("res-menu-option", "show-training-list");

const resTrainingSchedule = document.createElement("div");
resTrainingSchedule.id = "res-menu-training-schedule";
const scheduleP = document.createElement("p");
scheduleP.textContent = "Harmonogram treningów";
resTrainingSchedule.insertAdjacentElement("afterbegin", scheduleP);
const scheduleIcon = document.createElement("ion-icon");
scheduleIcon.name = "chevron-down-outline";
resTrainingSchedule.insertAdjacentElement("beforeend", scheduleIcon);

showTrainingList.insertAdjacentElement("afterbegin", resTrainingSchedule);

const scheduleLinksDiv = document.createElement("div");
scheduleLinksDiv.classList.add("res-menu-training-list", "hidden");

const scheduleLinks = ["Karate", "Krav Maga", "Grupa niepełnosprawnych"];
scheduleLinks.forEach((link) => {
  const scheduleLink = document.createElement("a");
  scheduleLink.textContent = link;

  scheduleLinksDiv.insertAdjacentElement("beforeend", scheduleLink);
});

showTrainingList.insertAdjacentElement("beforeend", scheduleLinksDiv);

aktualnosci.insertAdjacentElement("afterend", showTrainingList);

//--------------------------------------------------------------------------
const menuButton = document.querySelector("#menu-icon");
const responsiveMenu = document.querySelector("#responsive-menu");
const closeMenuButton = document.querySelector("#close-menu-icon");
const showMenuTrainingListButton = document.querySelector(
  ".show-training-list"
);
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
