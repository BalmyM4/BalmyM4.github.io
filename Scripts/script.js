document.addEventListener('DOMContentLoaded', function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;      // Obtener la altura de la navbar
    var links = document.querySelectorAll('.navbar-center a');              // Obtener todos los enlaces de la navbar

    // Función para realizar el desplazamiento suave
    function scrollToSection(event) {
        event.preventDefault();                                         // Evitar el comportamiento predeterminado de los enlaces
        var targetId = this.getAttribute('href');                       // Obtener el ID del objetivo del enlace
        var targetElement = document.querySelector(targetId);           // Obtener el elemento objetivo

        if (targetElement) {
            var targetOffset = targetElement.offsetTop - navbarHeight;  // Calcular el desplazamiento objetivo
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'                                      // Desplazamiento suave
            });
        }
    }

    // Asignar el evento de click a cada enlace de la navbar
    links.forEach(function(link) {
        link.addEventListener('click', scrollToSection);
    });

    // Función para verificar si la sección de inicio está en vista
    function checkIfInicioInView() {
        var inicioSection = document.getElementById('inicio');
        var inicioSectionTop = inicioSection.getBoundingClientRect().top;
        var inicioSectionBottom = inicioSection.getBoundingClientRect().bottom;

        if (inicioSectionTop <= navbarHeight && inicioSectionBottom >= navbarHeight) {
            document.body.classList.add('inicio-background');
        } else {
            document.body.classList.remove('inicio-background');
        }
    }
    

    // Llamar a la función en el evento de desplazamiento
    window.addEventListener('scroll', checkIfInicioInView);

    // Llamar a la función al cargar la página para verificar si la sección de inicio está en vista
    checkIfInicioInView();

    var pdfUrl = "../pdf/CXF GYM.pdf"; // Ruta al archivo PDF

    // Evento click para cargar el PDF
    document.getElementById('load-pdf').addEventListener('click', function() {
        // Configura la ruta al archivo worker de PDF.js
        PDFJS.workerSrc = 'pdf.worker.mjs';

        PDFJS.getDocument(pdfUrl).then(function(pdf) {
            pdf.getPage(1).then(function(page) {
                var canvas = document.getElementById('pdf-render');
                var context = canvas.getContext('2d');
                
                var viewport = page.getViewport({ scale: 1.5 });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                page.render({ canvasContext: context, viewport: viewport });
            });
    });
});
});

function toggleMenu() {
    var menu = document.getElementById('navbar-center');
    menu.classList.toggle('show');
}