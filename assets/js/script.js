// Función para navegación suave al hacer clic en enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    // Se agrega un evento a cada enlace del menú
    anchor.addEventListener('click', function (e) {
        // Se evita el comportamiento por defecto del enlace (navegar bruscamente)
        e.preventDefault();
        // Se obtiene el ID del destino desde el atributo href
        const targetId = this.getAttribute('href');
        // Se selecciona el elemento de destino usando ese ID
        const targetElement = document.querySelector(targetId);
        // Se realiza el desplazamiento suave hacia el elemento de destino
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para no tapar con el menú fijo
            behavior: 'smooth' // Efecto suave
        });
    });
});

// función para formulario de contacto con validación
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validación de campos
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Validar nombre (al menos 2 caracteres)
    if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    // Validar email con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Por favor ingresa un email válido');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Validar mensaje (al menos 10 caracteres)
    if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    } else {
        clearError(messageInput);
    }

    // Si todo es válido, mostrar confirmación y resetear
    if (isValid) {
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        this.reset();
    }
});

// Funciones auxiliares para mostrar/ocultar errores
function showError(input, message) {
    // Elimina mensaje de error previo si existe
    clearError(input);

    // Crea elemento para mensaje de error
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '0.8rem';
    errorMessage.style.marginTop = '5px';

    // Inserta el mensaje después del input
    input.parentNode.appendChild(errorMessage);

    // Añade clase de error al input
    input.classList.add('input-error');
    input.style.borderColor = 'red';
}

function clearError(input) {
    // Elimina el mensaje de error si existe
    const parent = input.parentNode;
    const errorMessage = parent.querySelector('.error-message');
    if (errorMessage) {
        parent.removeChild(errorMessage);
    }

    // Elimina clase de error
    input.classList.remove('input-error');
    input.style.borderColor = '';
}
// Llama a la función para iniciar el efecto de escritura
initTypewriterEffect();

// Función que aplica el efecto de escritura al texto con clase "profile"
function initTypewriterEffect() {
    // Selecciona el elemento que contiene el texto (por ejemplo: <p class="profile">Hola, soy Ana</p>)
    const profileText = document.querySelector('.profile');
    // Guarda el texto original del elemento
    const text = profileText.textContent;
    // Borra el contenido del elemento para que comience vacío
    profileText.textContent = '';
    // Variable para controlar el índice de las letras que se van a mostrar
    let i = 0;
    // Define la velocidad del efecto (65 milisegundos por letra)
    const typeSpeed = 65;
    // Función que escribe el texto letra por letra
    function typeWriter() {
        // Si aún hay letras por mostrar...
        if (i < text.length) {
            // Agrega una letra al contenido del elemento
            profileText.textContent += text.charAt(i);
            // Aumenta el índice para mostrar la siguiente letra en el próximo ciclo
            i++;
            // Espera unos milisegundos antes de volver a ejecutar la función
            setTimeout(typeWriter, typeSpeed);
        }
    }
    // Espera 1 segundo antes de comenzar a escribir el texto
    setTimeout(typeWriter, 1000);
}

// Observador de Intersección para animaciones al scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Solo anima una vez
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
});


// Función para resaltar la sección activa en la navegación
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Inicializar la función
highlightNavOnScroll();


// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuButton) {
        menuButton.addEventListener('click', function () {
            // Alternar clases para mostrar/ocultar el menú
            menuButton.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en un enlace
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function () {
                menuButton.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Cerrar el menú al hacer clic en la overlay
        menuOverlay.addEventListener('click', function () {
            menuButton.classList.remove('active');
            navMenu.classList.remove('active');
        });
    }
});