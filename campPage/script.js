import renderRoot from "../root.js";

const images = document.querySelectorAll(".scrolling-images img")

function hideImage() {
    images.forEach(image =>{
        if (image.className == "image3") {
            setTimeout(function() {
                image.style.setProperty("display", "none")
            }, 500); 
        }
        if (image.className == "image4") {
            setTimeout(function() {
                image.style.setProperty("display", "inline-block")
            }, 500); 
        }
    });
}

function imageSlide() {
    images.forEach(image => {
        let imageClass = image.className;
        let number = [...imageClass];
        let lastNumber = parseInt(number.pop());
    
        if (lastNumber == 5) {
            lastNumber = 0
        }

        lastNumber++
    
        image.className = ''
        image.classList.add("image" + lastNumber)
    });

    hideImage()
}

hideImage()

setInterval(imageSlide, 5000);

renderRoot("campPageLink");