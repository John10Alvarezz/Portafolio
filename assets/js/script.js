// Función para navegación suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// función para formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    this.reset();
});

initTypewriterEffect();

// Efecto de escritura para el texto de perfil
function initTypewriterEffect() {
    const profileText = document.querySelector('.profile');
    const text = profileText.textContent;
    profileText.textContent = '';

    let i = 0;
    const typeSpeed = 100; // milisegundos por caracter

    function typeWriter() {
        if (i < text.length) {
            profileText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }

    // Pequeño retraso antes de iniciar la animación
    setTimeout(typeWriter, 1000);
}