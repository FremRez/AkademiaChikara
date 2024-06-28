const copyIcons = document.querySelectorAll(".copy-icon");
const textToCopy = document.querySelectorAll(".bank-account-number p");

copyIcons.forEach((icon, i) => {
  icon.addEventListener("mouseover", () => {
    icon.name = "copy";
    icon.nextElementSibling.classList.remove("hidden");
  });

  icon.addEventListener("mouseout", () => {
    icon.name = "copy-outline";
    icon.nextElementSibling.classList.add("hidden");
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
        icon.nextElementSibling.style.setProperty("right", "0");
      })
      .then(() => {
        setTimeout(() => {
          icon.nextElementSibling.classList.add("hidden");
          icon.nextElementSibling.style.setProperty(
            "background-color",
            "rgba(0, 0, 0, 0.479)"
          );
          icon.nextElementSibling.textContent = "Skopiuj";
          icon.nextElementSibling.style.setProperty("right", "20px");

          icon.name = "copy-outline";
        }, 500);
      })
      .catch((error) => {
        console.log("Błąd: " + error);
      });
  });
});
