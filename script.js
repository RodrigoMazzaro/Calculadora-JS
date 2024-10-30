//Esta función agrega a la pantalla el valor del numero que se selecciona

function agregarALaPantalla(value){
    document.getElementById('pantalla').value += value;
}

//Esta función vacia la pantalla reiniciando el calculo
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;

}

//Esta función realiza el calculo
function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

