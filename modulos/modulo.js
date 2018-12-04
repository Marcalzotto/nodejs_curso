
//d = 8; las variables globales pueden usarse en cualquier archivo
//mas alla de las restricciones de encapsulacion de los modulos
var d = 8;
var sumar = function(){
    var a = 1;
    var b = 5;
    var c = a + b; 
    console.log("La suma da: " + c);
};


/*module.exports me permite exportar partes de mi codigo
para ser ejecutado en otros scrips, aca estoy exportando
la funcion sumar*/
//module.exports = sumar;
module.exports = d;
