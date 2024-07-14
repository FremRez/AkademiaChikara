import renderRoot from "../root.js";

const formInputs = document.querySelectorAll(".input-box input");
const labels = document.querySelectorAll(".input-box label");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    labels.forEach((label) => {
      if (label.nextElementSibling !== input) return;

      label.style.setProperty("top", "-5px");
      label.style.setProperty("color", "red");
    });
  });

  input.addEventListener("blur", () => {
    labels.forEach((label) => {
      if (label.nextElementSibling !== input) return;

      if (input.value.length == 0) {
        label.style.setProperty("top", "50%");
        label.style.setProperty("color", "black");
      }
    });
  });
});

const messageArea = document.querySelector("textarea");
messageArea.addEventListener("input", (e) => {
  messageArea.style.setProperty("height", "auto");
  let scrollHeight = e.target.scrollHeight;
  messageArea.style.setProperty("height", `${scrollHeight}px`);
});

const subButton = document.querySelector(".submit-form-button");
const inputsToClear = document.querySelectorAll(".clear-input");

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = true;
  inputsToClear.forEach((input) => {
    if (input.value.length == 0) inputValue = false;
  });

  if (inputValue) {
    document.querySelector("form").submit();
    setTimeout(() => {
      inputsToClear.forEach((input) => {
        input.value = "";
      });
    }, 200);
  }
});

renderRoot("contactPageLink");
