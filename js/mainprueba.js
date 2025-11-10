document.addEventListener('DOMContentLoaded', () => {

     // Móvil: Menú toggle
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');
    const body = documenta.body; // Referencia al body del documento

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



    // Animationes
    
    

   