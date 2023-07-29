const carroussel = document.querySelector('.carroussel__img');
const carrousselImg = document.querySelectorAll('.carroussel__img__slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const stopBtn = document.querySelector('.stop');
let currentPosition = 0;

function setImgWidth() {
  carrousselImg.forEach(img => {
    img.style.width = `${carroussel.clientWidth}px`;
  });
}

function getTotalWidth() {
  let totalWidth = 0;
  carrousselImg.forEach(img => {
    totalWidth += img.clientWidth;
  });
  return totalWidth;
}

function slideNext() {
    currentPosition += carroussel.clientWidth; // Utilise la largeur du carrousel
    if (currentPosition >= getTotalWidth()) {
        currentPosition = 0;
    }
    carroussel.style.transform = `translateX(-${currentPosition}px)`;
}

function slidePrev() {
    currentPosition -= carroussel.clientWidth; // Utilise la largeur du carrousel
    if (currentPosition < 0) {
        currentPosition = getTotalWidth() - carroussel.clientWidth;
    }
    carroussel.style.transform = `translateX(-${currentPosition}px)`;
}

let intervalId;

function playImg() {
    intervalId = setInterval(slideNext, 2000); // Modifier la durée du défilement ici (en millisecondes)
}

function stopImg() {
    clearInterval(intervalId);
}

prevBtn.addEventListener('click', () => {
    slidePrev();
    stopImg();
});

nextBtn.addEventListener('click', () => {
    slideNext();
    stopImg();
});

carroussel.addEventListener('mouseenter', stopImg);
carroussel.addEventListener('mouseleave', playImg);

setImgWidth(); // Adapter la taille des images au chargement de la page
playImg(); // Démarrer le défilement automatique au chargement de la page