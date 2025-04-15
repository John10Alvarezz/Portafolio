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

// función para formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    // Evita que el formulario se envíe de forma tradicional (con recarga de página)
    e.preventDefault();
    // Muestra un mensaje emergente de agradecimiento al usuario
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    // Limpia todos los campos del formulario
    this.reset();
});

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