const titulo = document.querySelector(".contenedor-principal__titulo") as HTMLElement;
let palabra: string = "La banda del discord";
let texto: string = "";
let contadorLetras: number = 0;
let estaBorrando: boolean = false;

// Funcion que se encarga de deletrear el texto del titulo
function escribirTitulo(){
    if (!estaBorrando) {
        texto += palabra[contadorLetras];
        titulo.textContent=texto;
        contadorLetras++;
        if (contadorLetras === palabra.length) {
            estaBorrando = true;
            contadorLetras--;
        }
    } else {
        texto = texto.substring(0, contadorLetras);
        titulo.textContent=texto;
        contadorLetras--;
        if (contadorLetras === 0) {
            estaBorrando = false;
            contadorLetras = 1;
        }
    }
}
// funcion de intervalo de tiempo
setInterval(escribirTitulo, 200);




