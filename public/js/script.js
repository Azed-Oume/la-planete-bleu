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

