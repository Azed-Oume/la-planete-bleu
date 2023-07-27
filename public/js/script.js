import Swiper from "swiper";


document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Swiper('.slides', {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    const stopButton = document.querySelector('.stop-button');
    stopButton.addEventListener('click', () => {
      carousel.autoplay.stop();
    });
  });


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



