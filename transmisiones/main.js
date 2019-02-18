//las transmiciones, es la informacion se divide parte de un tamaño x
// y se envia de un punto a otro.
//la transimision hereda del emisor de eventos
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
//con el cual no se trabaja en forma directa pero si hereda de este.
//los clases existentes para los diferentes tipo de Streams son abstractas
//para trabajar con ellas se debe crear un Stream personalizado que herede de ellas
