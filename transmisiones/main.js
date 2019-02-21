//las transmiciones, es la informacion que se divide parte de un tamaño x
// y se envia de un punto a otro.
//la transimision(Class Stream) hereda del emisor de eventos(class EventEmitter)
//existen 5 tipos de transmisiones:
//Legible(Readable) solo puede leer los datos que estan llegando, no puede
//enviar datos de regreso
//Writable: puede enviar datos a la transmision pero no puede leerlos.
//Duplex: permite leer y escribir en la transmision
//Transform: permite cambiar los datos a medida que se mueven a traves
//de la secuencia
//PassThrough: 
//Los tipos de transmisiones heredan de Stream, que a su vez hereda de EventEmitter
//Clase abstracta: una clase que se usa como base, un tipo de constructor
//con el cual no se trabaja en forma directa pero si se hereda de este.
//los clases existentes para los diferentes tipos de Streams son abstractas
//para trabajar con ellas se debe crear un Stream personalizado que herede de ellas
//el metodo createReadStream es un metodo del modulo fileSistem que devuelve una
//clase ReadStream es tipo especial de transmision Legible(Readable)

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/lorem.txt',{encoding : 'utf8',
highWaterMark: 2 * 1024});
//luego puedo captar parte de la transmision de datos leidos desde el archvo
//en partes y pasarlos por parametro a un listener
//highWaterMark me sirve para limitar el tamaño de los fragmentos transmitidos
//el valor que toma la propiedad es en bytes

var writable = fs.createWriteStream(__dirname + '/lorem_empty.txt');

readable.on('data',function(file_part){
    console.log(file_part);
    console.log("Esto son: " + file_part.length + "bytes");
    writable.write(file_part);
});