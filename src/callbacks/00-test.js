function saludar(nombre)  {
    alert (`Hola ${nombre}` );
}

function procesarEntradaUser(callback){
    let nombre = prompt('Ingresed su nombre');

    callback(nombre);

}

procesarEntradaUser(saludar);