//los eventos de sistema se manejan con una libreria de c++ llamada libuv
//v8 funciona de forma sincronica, ejecuta linea por linea.
//libuv gestiona las peticiones que se hacen al sistema operativo
//las peticiones pueden realizarse simultaneamente mientras V8 ejecuta linea por linea
//libuv contiene una cola de eventos que se van completando
//mediante el bucle de eventos libuv va checkeando la cola de eventos,
// verificando los que esten completos,los procesa y 
//ejecuta el callback(es un codigo de respuesta a una llamada), en forma sincronica
//si se esta ejecutando algo en ese momento, v8 espera para ejecutar el callback,
//cuando finalice el codigo que se este ejecutando en ese momento
//todo el proceso de gestion de los eventos de sistema es asincronico,
//porque se ejecuta simultaneamente con lo que este ejecutando v8
//la arquitectura controlada por eventos sin bloqueo ayuda a node a ser muy performante
//buffer:es un lugar en memoria donde se pueden almacenar datos en forma temporalç
//para pasarlos a otro lugar, el buffer esta limitado en tamaño.
//Stream o secuencia: Trozos de informacion que se convinan en uno solo
//El buffer almacena partes de los datos transmitidos que luego pasan al proceso o procesos 
//finales, luego almacena otra parte hasta que los procesos reciben el 100% de los datos enviados.
//la cpu procesa la informacion en numero binarios (0 y 1)
//un juego de caracteres permite representar caracteres como numeros, ASCII y unicode son juegos
// de caracteres
//Codificacion de caracteres: cuantos bits estamos usando para almacenar un numero en binario,
//de los asignados a un carcter por un determinado juego de cartacteres

var bufer = new Buffer('Almacenamos una frase en el buffer','utf8');

console.log(bufer); //se muestra lo almacenado en el buffer en exadecimal, internamente
//los datos se alamcenan en numero binario
console.log(bufer.toString());//muestra el contenido del buffer en formato de string
console.log(bufer.toJSON());// muestra el contenido del buffer en formato JSON
console.log('-------------\n');
console.log(bufer[2]);

bufer.write('Guardamoss');
console.log('---------------------\n');
console.log(bufer.toString());
