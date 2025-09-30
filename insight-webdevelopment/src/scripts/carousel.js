document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-img");
  const total = slides.length;

  function updateSlides() {
    slides.forEach(slide => slide.classList.remove("active", "left", "right"));

    let leftIndex = (currentIndex - 1 + total) % total;
    let rightIndex = (currentIndex + 1) % total;

    slides[currentIndex].classList.add("active");
    slides[leftIndex].classList.add("left");
    slides[rightIndex].classList.add("right");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    updateSlides();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlides();
  }
  updateSlides();

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});
