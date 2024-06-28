import renderRoot from "../root.js";
const copyIcons = document.querySelectorAll(".copy-icon");
const textToCopy = document.querySelectorAll(".bank-account-number p");

copyIcons.forEach((icon, i) => {
  icon.addEventListener("mouseover", () => {
    icon.name = "copy";
    icon.nextElementSibling.classList.add("animation");
    icon.nextElementSibling.style.setProperty("opacity", "1");
  });

  icon.addEventListener("mouseout", () => {
    icon.name = "copy-outline";
    icon.nextElementSibling.classList.remove("animation");
    icon.nextElementSibling.style.setProperty("opacity", "0");
  });

  icon.addEventListener("click", () => {
    navigator.clipboard
      .writeText(textToCopy[i].textContent)
      .then(() => {
        icon.nextElementSibling.style.setProperty(
          "background-color",
          "yellowgreen"
        );
        icon.nextElementSibling.textContent = "Skopiowano!";
      })
      .then(() => {
        setTimeout(() => {
          icon.nextElementSibling.style.setProperty("opacity", "0");
          icon.nextElementSibling.style.setProperty(
            "background-color",
            "rgba(0, 0, 0, 0.479)"
          );
          icon.nextElementSibling.textContent = "Skopiuj";
          icon.name = "copy-outline";
        }, 500);
      })
      .catch((error) => {
        console.log("Błąd: " + error);
      });
  });
});

renderRoot("pricingPageLink");
