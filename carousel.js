// Hamburger naviagation //

const hamburger = document.querySelector(".hamburger"); //Made a mistake here. Missed '.' and spent hours trying to fix it
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// END OF NAV//

//Begin Carousel 
 const carouselSlide = document.querySelector(".carousel-slide");
 const carouselImages = document.querySelectorAll(".carousel-slide img");

 //Buttons

 const prevButton = document.querySelector("#prevbutton");
 const nextButton = document.querySelector("#nextbutton");

 let counter = 1;
 const size = carouselImages[0].clientWidth;

 carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";


nextButton.addEventListener("click", () => {
    if (counter >= carouselImages.lenth -1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;   
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

});

prevButton.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;   
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

});
const lastClone = document.getElementById("lastClone");
const firstClone =document.getElementById("firstClone");

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter] === lastClone){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

    }
    if (carouselImages[counter] === firstClone) {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});

//everything leaves the page if you click too fast...so please click slowly for optimal scrolling experience
//Increased transition to 1s, bit glitchy but you can't leave the page now
// 1s was too slow for width of image