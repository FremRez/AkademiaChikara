import renderRoot from "../root.js";
const buttonsArr = document.querySelectorAll(".training-place-buttons button");
const scheduleArr = document.querySelectorAll(".schedule");
const headerArr = document.querySelectorAll(".schedule-title");

buttonsArr.forEach((button) => {
  button.addEventListener("click", () => {
    scheduleArr.forEach((schedule, index) => {
      schedule.classList.add("hidden");
      headerArr.forEach((h, i) => {
        if (index == i) {
          if (h.textContent.trim() !== button.textContent.trim()) return;
          schedule.classList.remove("hidden");
          schedule.classList.add("showAnimation");

          if ((window.innerWidth < 1200) & (window.innerWidth > 550)) {
            window.scrollTo({
              top: 750,
              behaviour: "smooth",
            });
          } else {
            window.scrollTo({
              top: 550,
              behaviour: "smooth",
            });
          }
        }
      });
    });
  });
});

const karateSchedule = document.querySelector(".schedule-content");
const disabledSchedule = document.querySelector(".disabled-people-schedule");
const chosenSchedule = window.localStorage.getItem("chosenSchedule");
if (chosenSchedule == "Karate") {
  karateSchedule.classList.remove("hidden");
  disabledSchedule.classList.add("hidden");
  localStorage.clear();
} else {
  karateSchedule.classList.add("hidden");
  disabledSchedule.classList.remove("hidden");
  localStorage.clear();
}

renderRoot("schedulePageLinks");
