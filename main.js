var titulo = document.querySelector(".contenedor-principal__titulo"); //llamo identificador por su selector del H1
var palabra = "La banda del discord";
var texto = "";
var contadorLetras = 0;
var estaBorrando = false;
// Funcion que se encarga de deletrear el texto del titulo
function escribirTitulo() {
    if (!estaBorrando && contadorLetras < palabra.length)
        texto += palabra[contadorLetras++]; // SI NO ESTA BORRANDO Y SI CONTADOR LETRAS ES MENOR A LONGITUD DE PALABRA
    else if (estaBorrando && contadorLetras > 0)
        texto = texto.slice(0, contadorLetras--); // SI ESTA BORRANDO Y SI CONTADOR LETRAS ES MAYOR A CERO
    // SINO ACTUAR EN CONSECUENCIA
    else {
        estaBorrando = !estaBorrando; //GUARDA LO CONTRARIO A LO QUE VENGA EN BOOLEANO
        //CONTADOR LETRAS GUARDARA EL VALOR NUMERICO SEGUN LA CONDICION TERNARIA SI ESTA BORRANDO O NO.
        contadorLetras = estaBorrando ? contadorLetras : contadorLetras + 1;
    }
    // PONEMOS EL TEXTO EN EL CONTENIDO DEL ELEMENTO HTML H1
    titulo.textContent = texto;
}
// funcion de intervalo de tiempo para mostrar en 200 milisegundo cada caracter del texto.
setInterval(escribirTitulo, 200);
