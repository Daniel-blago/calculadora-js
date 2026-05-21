function agregarValor(valor) {
    let operadores = ["+", "-", "*", "/", "%"];
    let ultimoCaracter = pantalla.value.slice(-1);

if (operadores.includes(valor) && operadores.includes(ultimoCaracter)) {
    return;
}
    pantalla.value += valor;
}

function limpiarPantalla(valor) {
    pantalla.value = "";
}

function borrarUltimo(valor) {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcularResultado() {
    let ultimoCaracter = pantalla.value.slice(-1);
    if(
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/" ||
        ultimoCaracter === "%"   

    ){
        pantalla.value = "ERROR";
        return;
    }
     pantalla.value = eval(pantalla.value);
}
