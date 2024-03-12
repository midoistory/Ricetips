let currentIndex = 0;

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function nextSlide() {
  const totalItems = document.querySelectorAll(".carousel-inner .card").length;
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function updateCarousel() {
  const carousel = document.getElementById("recipeCarousel");
  carousel.querySelector(".carousel-inner").style.transform = `translateX(${
    -currentIndex * 100
  }%)`;
}
