//el codigo dentro de cada modulo esta encapsulado y protegido
//para no afectar accidentalmente a otras partes del codigo en el cual
//estoy importando dicho modulo.
/*la funcion require devuelve lo que se asigne a module.exports*/

var d = require('./modulo');
console.log(d);
//sumar();