var Emisor = require("./emitter");

var Emisor1 = new Emisor();


Emisor1.on('habla',function(){
    console.log('escucha una voz');
});

Emisor1.on('llamada', function(){
    console.log('respondemos la llamada');
});

console.log('Hola, Hola');
Emisor1.emitir('habla');

console.log('llamada entrante');
Emisor1.emitir('llamada');

