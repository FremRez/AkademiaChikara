import renderRoot from "../root.js";

const formInputs = document.querySelectorAll(".input-box input");
const labels = document.querySelectorAll(".input-box label");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    labels.forEach((label) => {
      if (label.nextElementSibling !== input) return;

      label.style.setProperty("top", "-5px");
    });
  });

  input.addEventListener("blur", () => {
    labels.forEach((label) => {
      if (label.nextElementSibling !== input) return;

      if (input.value.length == 0) label.style.setProperty("top", "50%");
    });
  });
});

const messageArea = document.querySelector("textarea");
messageArea.addEventListener("input", (e) => {
  messageArea.style.setProperty("height", "auto");
  let scrollHeight = e.target.scrollHeight;
  messageArea.style.setProperty("height", `${scrollHeight}px`);
});

renderRoot("contactPageLink");
