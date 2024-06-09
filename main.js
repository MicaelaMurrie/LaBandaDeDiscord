var titulo = document.querySelector(".contenedor-principal__titulo");
var palabra = "La banda del discord";
var texto = "";
var contadorLetras = 0;
var estaBorrando = false;
// Funcion que se encarga de deletrear el texto del titulo
function escribirTitulo() {
    if (!estaBorrando) {
        texto += palabra[contadorLetras];
        titulo.textContent = texto;
        contadorLetras++;
        if (contadorLetras === palabra.length) {
            estaBorrando = true;
            contadorLetras--;
        }
    }
    else {
        texto = texto.substring(0, contadorLetras);
        titulo.textContent = texto;
        contadorLetras--;
        if (contadorLetras === 0) {
            estaBorrando = false;
            contadorLetras = 1;
        }
    }
}
// funcion de intervalo de tiempo
setInterval(escribirTitulo, 200);
