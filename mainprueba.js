document.addEventListener('DOMContentLoaded', () => {
    // Código del carrusel
    const carouselContainer = document.getElementById('carousel-container');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = dots.length;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    let interval;


     // Móvil: Menú toggle
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');
    const body = document.body; // Referencia al body del documento

    // Función para abrir el menú
    const openMobileMenu = () => {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
        body.classList.add('overflow-hidden'); // Añade la clase para evitar el scroll
    };

    // Función para cerrar el menú
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        body.classList.remove('overflow-hidden'); // Quita la clase para habilitar el scroll
    };

    // Abrir menú con el botón
    menuButton.addEventListener('click', openMobileMenu);

    // Cerrar con el botón
    closeMenu.addEventListener('click', closeMobileMenu);

    // Cerrar con el overlay
    overlay.addEventListener('click', closeMobileMenu);
    
    // Cerrar el menú si se hace clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

});


    // Funciones del carrusel
    function scrollToIndex(index) {
        carouselContainer.scrollTo({
            left: carouselContainer.offsetWidth * index,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('opacity-100', index === currentIndex);
            dot.classList.toggle('opacity-50', index !== currentIndex);
        });
    }

    // Flechas
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        scrollToIndex(currentIndex);
        resetAutoScroll();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        scrollToIndex(currentIndex);
        resetAutoScroll();
    });

    // Dots manual
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            scrollToIndex(index);
            resetAutoScroll();
        });
    });

    // Scroll detecta slide visible
    carouselContainer.addEventListener('scroll', () => {
        const newIndex = Math.round(carouselContainer.scrollLeft / carouselContainer.offsetWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots();
        }
    });

    // Auto scroll
    function startAutoScroll() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            scrollToIndex(currentIndex);
        }, 3000);
    }

    function resetAutoScroll() {
        clearInterval(interval);
        startAutoScroll();
    }

    // Iniciar
    updateDots();
    startAutoScroll();