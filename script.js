// Función para generar flores amarillas aleatoriamente en la página
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    document.body.appendChild(flower);

    const size = Math.random() * 100 + 100;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    const left = Math.random() * (window.innerWidth - size);
    flower.style.left = `${left}px`;

    let top = -size; // Comienza desde arriba de la ventana
    flower.style.top = `${top}px`;

    // Función para mover la flor hacia abajo
    function moveFlower() {
        top += 2; // Puedes ajustar la velocidad cambiando este valor
        flower.style.top = `${top}px`;

        if (top > window.innerHeight) {
            // Elimina la flor cuando sale de la ventana
            document.body.removeChild(flower);
            clearInterval(interval);
        }
    }

    // Establece un intervalo para mover la flor hacia abajo
    const interval = setInterval(moveFlower, 20);

    flower.addEventListener('animationend', () => {
        document.body.removeChild(flower);
    });
}

// Generar flores cada 2 segundos
setInterval(createFlower, 1000);
