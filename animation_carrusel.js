// Obtener elementos del carrusel
const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

// Variables de control
let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth;

// Función para mover el carrusel a la siguiente posición
function moveToNext() {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
    carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
}

// Función para mover el carrusel a la posición anterior
function moveToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
}

// Agregar eventos de clic a los botones de navegación
document.querySelector('#nextBtn').addEventListener('click', moveToNext);
document.querySelector('#prevBtn').addEventListener('click', moveToPrev);