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