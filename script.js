var botonIniciar = document.getElementById('iniciarContador');
var campoNumeroMaximo = document.getElementById('numeroMaximo');
var contenedorResultado = document.getElementById('resultado');

botonIniciar.addEventListener('click', function() {
    var numeroMaximo = parseInt(campoNumeroMaximo.value);
    var resultado = '';

    for (var i = 1; i <= numeroMaximo; i++) {
        resultado += i + ' ';
    }

    contenedorResultado.textContent = resultado;
});
