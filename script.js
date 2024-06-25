function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".experience-card");

function moveCarousel(step) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// Initialize the carousel by showing the first slide and hiding others
function initCarousel() {
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });
}

window.onload = initCarousel;
