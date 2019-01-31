//en vez de utilizar este emisor de eventos creado por mi
//utilizare el modulo de eventos que nos proporciona node js
//adicionalmente usamos ES6 e importamos el modulo de configuracion
//para evitar escribir string para nuestros eventos.

//import Emitter from 'events';
var Emitter = require('events');

var EventConfig = require('./config');

var Emisor = new Emitter();


Emisor.on(EventConfig.HABLA,function(){
    console.log('escucha una voz');
});

Emisor.on(EventConfig.HABLA,function(){
    console.log("quien sera?");
});

Emisor.on(EventConfig.LLAMDA, function(){
    console.log('respondemos la llamada');
});

console.log('Hola, Hola');
Emisor.emit(EventConfig.HABLA);

console.log('llamada entrante');
Emisor.emit(EventConfig.LLAMDA);

