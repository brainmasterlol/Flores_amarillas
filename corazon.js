// Función para generar flores amarillas aleatoriamente en la página
function createHeart() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    document.body.appendChild(corazon);

    const size = Math.random() * 20 + 10;
    corazon.style.width = `${size}px`;
    corazon.style.height = `${size}px`;

    const left = Math.random() * (window.innerWidth - size);
    corazon.style.left = `${left}px`;

    let top = -size; // Comienza desde arriba de la ventana
    corazon.style.top = `${top}px`;

    // Función para mover la flor hacia abajo
    function moveHeart() {
        top += 2; // Puedes ajustar la velocidad cambiando este valor
        corazon.style.top = `${top}px`;

        if (top > window.innerHeight) {
            // Elimina la flor cuando sale de la ventana
            document.body.removeChild(corazon);
            clearInterval(interval);
        }
    }

    // Establece un intervalo para mover la flor hacia abajo
    const interval = setInterval(moveHeart, 20);

    corazon.addEventListener('animationend', () => {
        document.body.removeChild(corazon);
    });
}

setInterval(createHeart, 1000);
