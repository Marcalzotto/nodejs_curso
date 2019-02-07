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
//
