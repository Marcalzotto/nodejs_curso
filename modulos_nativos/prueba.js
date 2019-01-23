/*los modulos nativos son aquellos que viene incorporados con node.js
la funcion require evalua si el modulo que yo estoy requirendo es nativo o no*/
//modulos globales, puedo usarlos sin requerirlos ej: console
//los modulos nativos se invocan solamente escribiendo su nombre sin . o /

var a = 1;
var b = 1;
var res = 0;
var util = require('util');
var nombre = "Marcos";
var formateado;
formateado = util.format("Hola, %s",nombre);
util.log(formateado);

try {
    
    if(b == 0){
        
        throw new Error("Division by Zero");
        
    }else{
        res = a / b;
        console.log("El resultado de la division da: "+res);
    }    
}catch(err){
    console.log(err.message); 
}