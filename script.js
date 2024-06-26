function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".experience-card");
const slider = document.getElementById("slider-control");  // Slider control for navigation

function moveCarousel(targetIndex) {
  slides[currentSlide].style.display = 'none';
  currentSlide = targetIndex;
  slides[currentSlide].style.display = 'block';
  slider.value = targetIndex; // Synchronize slider with the current slide
}

function initCarousel() {
  slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'block' : 'none';
  });
  slider.setAttribute("max", slides.length - 1); // Set the maximum value of the slider based on the number of slides
  slider.value = 0; // Initialize slider position at the first slide
  slider.addEventListener('input', () => moveCarousel(parseInt(slider.value, 10))); // Add event listener for slider input changes
}

window.onload = initCarousel; // Initialize carousel on window load