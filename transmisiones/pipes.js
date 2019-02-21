//Las pipes o tuberias en sirven para conectar flujos de datos(Streams), 
//por ejemplo los legibles con los grabables y a su vez a otros flujos 
//grabables
//la clase Readable tiene un metodo pipe, este recibe como destino una 
//transmision grabable donde escribira los datos

var fs = require('fs');
var gzip = require('zlib');

var path = __dirname + '/lorem.txt';
var path2 = __dirname + '/lorem_empty.txt';
var path3 = __dirname + '/comprim.txt.gz';

var readable = fs.createReadStream(path);
//creamos un flujo de lectura
var writable = fs.createWriteStream(path2);
//creamos un flujo de escritura

var compWritable = fs.createWriteStream(path3);
//crea un flujo de escritura para el archivo .gz

readable.pipe(writable);
//el metodo pipe esta implmentado para las transmisiones de tipo legible
//este recibe un destino como parametro, el destino sera una transmision
//de tipo grabable, luego internamente se leeran los datos de la transmision
//legible y al detectar este evento habra un listener que comenzara a escribir
//en el destino, este metodo devuelve el destino pasado por parametro(para el caso
//una transmision de tipo legible)


var compStream = gzip.createGzip();
//creamos un flujo de tranformacion, en este flujo los datos se comprimiran
readable.pipe(compStream).pipe(compWritable);
 
