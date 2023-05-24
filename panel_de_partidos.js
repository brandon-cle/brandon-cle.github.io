const carousel = document.querySelector('.panel_de_partidos');
const carouselContainer = document.querySelector('.carrusel_de_partidos');
const carouselItems = document.querySelector('slide');

//Variables de control
let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth;

function moveToNext(){
    if(currentIndex < carouselItems.lenght - 1){
        currentIndex++;
        carouselContainer.style.transform = 'translateX(-${currentIndex * itemWidth}px)';

    }
}

function moveToPrev(){
    if(currentIndex > 0){
        currentIndex++;
        carouselContainer.style.transform = 'translateX(-${currentIndex * itemWidth}px)';
    }
}

document.querySelector('.LEFT_btn').addEventListener('click', moveToNext);
document.querySelector('.RIGHT_btn').addEventListener('click', moveToPrev);

