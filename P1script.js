window.onload = function () {
    const IMAGENES = [
        'Images/Carrucel/Apps.jpg',
        'Images/Carrucel/C2.png',
        'Images/Carrucel/C3.jpg',
        'Images/Carrucel/C4.jpg',
        'Images/Carrucel/C5.jpg',
        'Images/Carrucel/C6.jpg'
    ];

    const tiempoPasar = 4000;
    let posicionActual = 0;
    let $slides = document.querySelector('.carousel-slides');
    let $dotsContainer = document.querySelector('.carousel-dots');
    let intervalo;

    // Funciones
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    function renderizarImagen() {
        $slides.style.transform = `translateX(-${posicionActual * 100}%)`;
        actualizarPuntos();
    }

    function actualizarPuntos() {
        const $dots = document.querySelectorAll('.dot');
        $dots.forEach((dot, index) => {
            if (index === posicionActual) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function crearPuntos() {
        for (let i = 0; i < IMAGENES.length; i++) {
            let $dot = document.createElement('div');
            $dot.className = 'dot';
            $dot.addEventListener('click', function () {
                posicionActual = i;
                renderizarImagen();
            });
            $dotsContainer.appendChild($dot);
        }
    }

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, tiempoPasar);
    }

    // Iniciar
    crearPuntos();
    playIntervalo();
};