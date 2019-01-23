/*el parton 1 se llama patron de anulacion de module.exports
module exports contiene un objeto vacio, yo puedo anular ese objeto
simplemente con guardar una variable o funcion dentro de el*/


function generar_numero(){
    console.log(1500);
}

module.exports = generar_numero;