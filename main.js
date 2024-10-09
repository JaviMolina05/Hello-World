import './style.css'


// Selecciona los elementos del DOM
const account = document.getElementById('account');
const buttons = document.querySelectorAll('.btn');

// Inicializa el contador
let count = 0;

// Función para actualizar el valor mostrado del contador
function updateCounter() {
  account.textContent = count;
}

// Añadir eventos a cada botón
buttons.forEach(button => {
  button.addEventListener('click', function () {
    // Comprueba el texto del botón que ha sido clicado
    if (this.textContent === 'Increase') {
      count++;
    } else if (this.textContent === 'Decrease') {
      count--;
    } else if (this.textContent === 'Reset') {
      count = 0;
    }
    // Actualiza la pantalla con el nuevo valor
    updateCounter();
  });
});
