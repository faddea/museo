document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".carousel-dot");
    let currentIndex = 0;
    let interval;

    if (!carouselContainer || slides.length === 0) return;

    // Función principal para ir a un slide específico
    function goToSlide(index) {
        currentIndex = index;
        
        // **IMPORTANTE:** Usar el ancho de la ventana para el offset, 
        // ya que los slides tienen la clase 'w-screen'
        const offset = index * window.innerWidth;

        gsap.to(carouselContainer, {
            // Animación usando el offset calculado
            scrollTo: { x: offset }, 
            duration: 1,
            ease: "power2.inOut"
        });

        updateDots();
    }

    // Actualiza los puntitos
    function updateDots() {
        dots.forEach((dot, i) => {
             // Clases de Tailwind para activar el punto
             dot.classList.toggle("opacity-100", i === currentIndex);
             dot.classList.toggle("opacity-50", i !== currentIndex);
        });
    }

    // Siguiente slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    // Click en los puntitos
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            stopAutoScroll(); // Detener al hacer clic
            goToSlide(i);
            startAutoScroll(); // Reiniciar después de un breve retraso
        });
    });

    // Scroll automático
    function startAutoScroll() {
        if (!interval) { // Solo iniciar si no está ya activo
            // Intervalo cambiado a 3000ms (3 segundos)
            interval = setInterval(nextSlide, 3000); 
        }
    }

    function stopAutoScroll() {
        clearInterval(interval);
        interval = null;
    }

    // Detener/Reiniciar en hover/touch
    carouselContainer.addEventListener("mouseenter", stopAutoScroll);
    carouselContainer.addEventListener("mouseleave", startAutoScroll);
    // Para móviles (touch)
    carouselContainer.addEventListener("touchstart", stopAutoScroll);
    carouselContainer.addEventListener("touchend", startAutoScroll);

    // Iniciar carrusel
    goToSlide(0);
    updateDots(); // Asegura que el primer punto esté activo al inicio
    startAutoScroll();
    
    // Si la ventana cambia de tamaño (ej. rotación de móvil), recalcula la posición
    window.addEventListener('resize', () => {
        goToSlide(currentIndex);
    });
});