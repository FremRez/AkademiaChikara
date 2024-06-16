const buttonsArr = document.querySelectorAll(".training-place-buttons button");
const scheduleArr = document.querySelectorAll(".schedule");
const headerArr = document.querySelectorAll(".schedule-title");

buttonsArr.forEach((button) => {
  button.addEventListener("click", () => {
    scheduleArr.forEach((schedule, index) => {
      schedule.classList.add("hidden");
      headerArr.forEach((h, i) => {
        if (index == i) {
          if (
            h.textContent.replace(/\s+/g, "") ==
            button.textContent.replace(/\s+/g, "")
          ) {
            schedule.classList.remove("hidden");
            schedule.classList.add("showAnimation");
            window.scrollTo({
              top: 500,
              behaviour: "smooth",
            });
          }
        }
      });
    });
  });
});
