'use strict';

var EventEmitter = require('events');
//creamos una clase 
module.exports = class Saludador extends EventEmitter{
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
}