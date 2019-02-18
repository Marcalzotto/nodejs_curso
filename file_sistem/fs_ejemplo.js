//importamos el modulo file sistem
var fs = require('fs');

var file_path = __dirname + '/file.txt';

var textFile = fs.readFileSync(file_path,'utf8'); //metodo sincronico
//internamente se invoca al metodo readSync, se carga el contenido del archivo
//en un buffer, luego se utiliza la condificacion para poder recuperar el 
//contenido del archivo.

console.log(textFile);
//devoluciones de llamada de primer error, un funcion 
//que recibe un objeto de error como primer parametro, si no hay error
//este sera nulo sino encuentra una definicion de error
//la funcion readFile procesara un archivo de manera asicrona
var textFile2 = fs.readFile(file_path,'utf8',function(err,data){
    console.log(data);
});

console.log("fin del programa!");