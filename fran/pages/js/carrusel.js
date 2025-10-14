document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".carousel-dot");
  let currentIndex = 0;
  let interval;

  // Función para ir a un slide específico
  function goToSlide(index) {
  currentIndex = index;
  const offset = index * carouselContainer.offsetWidth;

  gsap.to(carouselContainer, {
    scrollTo: { x: offset },  // animación hacia el slide
    duration: 1,
    ease: "power2.inOut"
  });

  updateDots();
}

  // Actualiza los puntitos
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  // Siguiente slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }

  // Anterior slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  }

  // Click en los puntitos
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  });

  // Scroll automático
  function startAutoScroll() {
    interval = setInterval(nextSlide, 4000);
  }

  function stopAutoScroll() {
    clearInterval(interval);
  }

  carouselContainer.addEventListener("mouseenter", stopAutoScroll);
  carouselContainer.addEventListener("mouseleave", startAutoScroll);

  // Iniciar carrusel
  goToSlide(0);
  startAutoScroll();
});