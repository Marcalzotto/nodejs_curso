/*diferencias entre module.exports y exports
ambos apuntan al mismo objeto vacio en memoria, pero si yo quiero
asingar algo a alguno de los 2 la referencia de memoria de uno y otro se 
rompera, de todas formas require siempre devuelve lo que contiene 
module.exports, para manter la referencia entre los 2, deberia hacerlo 
de la siguiente forma*/

exports.echo = function(){
    console.log("echo php");
}


//module.exports = echo;
console.log(module.exports);
console.log(exports);