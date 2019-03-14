var http = require('http'); //importo el modulo http, sirve para crear servidores.

http.createServer(function(request, response){

    response.writeHead(200, {'Content-type':'text/plain'})
    response.end('Hello world\n'); //este metodo indica que no se enviara nada mas luego de esta linea.

}).listen(1337,'127.0.0.1') //metodo para crear un servidor, se le pasa un callback, que se invocara cuando el server emita
                    //algun evento, al callback se le pasan 2 parametros 1 que representa la peticion y otro que 
                    //representa la respuesta, se necesita escribir la respuesta del servidor.
                    //este va escuchar en el puerto 1337 y el navegador va realizar la peticion a localhost. 127.0.0.1:1337
                    //una vez que el servidor reciba esta solicitud enviara la respuesta que hemos escrito.
