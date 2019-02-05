'use strict';
//comentamos esto para traer Saludador como un modulo
/*var EventEmitter = require('events');
//creamos una clase 
class Saludador extends EventEmitter{
    //creamos el constructor
    constructor(saludo){
        super();//el constructor va tomar la clase de donde hereda
        this.saludo = saludo;
    }
    //los metodos dentro de la clase se agregan al prototipo
    saludar(){
        console.log(this.saludo);
        this.emit('saludar');
    }
}*/
var Saludador = require('./event_emmiter_module');

var Saludador1 = new Saludador('Hola como va?');

Saludador1.on('saludar',function(){
    console.log('Todo bien y vos?');
});


Saludador1.saludar();