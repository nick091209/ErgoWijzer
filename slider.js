let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".slider-button.prev");
const nextButton = document.querySelector(".slider-button.next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
}

prevButton.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

showSlide(currentSlide);
