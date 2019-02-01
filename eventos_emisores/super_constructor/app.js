var EventEmitter = require('events');
var util = require('util');

function Saludar(){
    this.saludo = 'Hola a todos';
}

util.inherits(Saludar, EventEmitter);

Saludar.prototype.saluda = function(){
    console.log(this.saludo);
    this.emit('saluda');
}

var saludar1 = new Saludar();

saludar1.on('saluda',function(){
    console.log('alguien nos saluda');
});

saludar1.saluda();