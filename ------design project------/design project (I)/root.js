const animationButton = document.querySelector(".footer-partners p");
const animationCaption = document.querySelector(".footer-partners-caption");
const animationContainer = document.querySelector(".footer-partners-logos");
const lastPartner = document.getElementById("lastPartner");

animationButton.addEventListener("click", () => {
    animationContainer.classList.toggle("partners-animation");
    animationCaption.classList.toggle("caption-animation")
    
    if (animationContainer.classList.contains("partners-animation")) {
      setTimeout(() => {
        animationContainer.style.setProperty("height", "fit-content")
        lastPartner.scrollIntoView("behavior: 'smooth'");
    }, 300);
    }else{
      animationContainer.style.setProperty("height", "60px")
    }
});