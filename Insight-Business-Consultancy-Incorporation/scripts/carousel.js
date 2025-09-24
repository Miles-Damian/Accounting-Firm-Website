    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel img");
    const total = slides.length;

    function updateSlides() {
      slides.forEach(slide => slide.className = "");
      let leftIndex = (currentIndex - 1 + total) % total;
      let rightIndex = (currentIndex + 1) % total;

      slides[currentIndex].className = "active";
      slides[leftIndex].className = "left";
      slides[rightIndex].className = "right";
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