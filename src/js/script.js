const btnMyCountElement = document.querySelector(".connection__a");
const btnCountElement = document.querySelector(".connection__b");

const sectionElementCount = document.querySelector(".section__count");
const sectionElementCreatcount = document.querySelector(".section__creatcount");


function btnCount() {
    btnMyCountElement.addEventListener("click", function () {
        sectionElementCount.style.display = "block";
        btnCountElement.style.display = "none";
    });
    btnCountElement.addEventListener("click", function () {
        sectionElementCreatcount.style.display = "block";
        btnMyCountElement.style.display = "none";
    });
}
btnCount();



function showdropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

document.getElementById("dropdown").addEventListener("change", function () {
    window.location.href = this.value;
});

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');
const stopButton = carousel.querySelector('.stop-button');
const slideWidth = carousel.querySelector('.slide').clientWidth;
let currentIndex = 0;
let intervalId;

function goToSlide(index) {
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

function goToNextSlide() {
    if (currentIndex === slides.children.length - 1) {
        goToSlide(0);
    } else {
        goToSlide(currentIndex + 1);
    }
}

function goToPrevSlide() {
    if (currentIndex === 0) {
        goToSlide(slides.children.length - 1);
    } else {
        goToSlide(currentIndex - 1);
    }
}

function stopCarousel() {
    clearInterval(intervalId);
}

function startCarousel() {
    intervalId = setInterval(goToNextSlide, 3000);
}

startCarousel();

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);
stopButton.addEventListener('click', stopCarousel);