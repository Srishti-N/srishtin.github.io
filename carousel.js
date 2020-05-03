// Hamburger naviagation //


const hamburger = document.querySelector(".hamburger"); 
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

//Made a mistake here. Missed ""."hamburger and spent hours trying to fix it //
// I made a mistake initally when I started to build the hamburger navigation,
// but I thought it looked quite cool//
//So decided to make it a part of my the design and into a landing page//



// END OF NAV//

//Begin Carousel //



const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");


//Buttons //

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

var playing = true;
var pauseButton = document.getElementById("play-pause");
var myIndex = 0;
var slideInterval = setInterval(nextSlide,2000);

function carousel () {
    var i;
    var x = document.getElementsByClassName(".carousel-slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.lenth) {
        myIndex = 1
    }
x[myIndex - 1].style.display = "block";
}

function playSlideshow(){
    pauseButton.innerHTML = "Play";
    playing = false;
    clearInterval(slideInterval);
}

function pauseSlideshow () {
    pauseButton.innerHTML = "Pause";
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function () {
    if(playing) {
        pauseSlideshow();
    }
    else {
        playSlideshow();
    }
};

carousel();
playSlideshow();



