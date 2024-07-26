import renderRoot from "../root.js";

const scrollTarget = document.querySelector(".scroll-target")
const titleButton = document.querySelector(".title-button")

titleButton.addEventListener("click", ()=>{
  scrollTarget.scrollIntoView({
    behavior: "smooth"
  })
})

const images = document.querySelectorAll(".scrolling-images img");

function hideImage() {
  images.forEach((image) => {
    if (image.className == "image3") {
      setTimeout(function () {
        image.style.setProperty("display", "none");
      }, 500);
    }
    if (image.className == "image4") {
      setTimeout(function () {
        image.style.setProperty("display", "inline-block");
      }, 500);
    }
  });
}

function imageSlide() {
  images.forEach((image) => {
    let imageClass = image.className;
    let number = [...imageClass];
    let lastNumber = parseInt(number.pop());

    if (lastNumber == 5) {
      lastNumber = 0;
    }

    lastNumber++;

    image.className = "";
    image.classList.add("image" + lastNumber);
  });

  hideImage();
}

hideImage();

setInterval(imageSlide, 5000);

const closeDetailsButton = document.querySelectorAll(".close-details");
const blackBackgroung = document.querySelector(".black-bcg");
const campDetails = document.querySelectorAll(".event-details");
const currentEvents = document.querySelectorAll(".event-item");

const showEvents = (index) => {
  index++;
  campDetails.forEach((camp) => {
    if (!camp.classList.contains("camp" + index)) return;
    camp.classList.remove("hidden");
    blackBackgroung.classList.remove("hidden");
  });
};

closeDetailsButton.forEach((button) => {
  button.addEventListener("click", () => {
    campDetails.forEach((eventWindow) => {
      eventWindow.classList.add("hidden");
    });
    blackBackgroung.classList.add("hidden");
  });
});

currentEvents.forEach((eventDetails, i) => {
  console.log(i);
  eventDetails.addEventListener("click", () => {
    showEvents(i);
  });
});

renderRoot("campPageLink");
