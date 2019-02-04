//importo los modulos necesarios para realizar mi algoritmo

var EventEmitter = require('events');
var util = require('util');

//creamos un constructor
function Saludador(){
    EventEmitter.call(this);
    this.saludo = "Hola como andas";
}

//hacemos que Saludador herede los metodos de Events emitter
util.inherits(Saludador, EventEmitter);

//hacemos un prototipo de Saludador 
Saludador.prototype.saludar = function(){
    console.log(this.saludo);
    this.emit('saludar');
}

Saludador1 = new Saludador();

Saludador1.on('saludar',function(){
    console.log('Todo bien y vos?');
});


Saludador1.saludar();