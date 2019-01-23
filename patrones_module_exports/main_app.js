//utilizamos el primer patron
var numero_random = require("./patron1");

numero_random();

//utlilizamos el patron 2
//de esta forma puedo recuperar el objeto entero
//var numero_random = require("./patron2");

//numero_random.generar_numero();
//de esta otra forma puedo recuperar solo una propiedad o metodo de ese objeto

var numero_random = require("./patron2").generar_numero;

numero_random();

//utilizando el patron 3

var numerito = require("./patron3");
numerito.mostrar_numero();

//cambio el valor de la propiedad t1
numerito.t1 = 1504;
var numerito2 = require("./patron3");
/*require devolvera el numero 1504 y no con 1502 como se establece en el 
costructor ya que esta funcion guarda los resultados que devuelve 
module.exports para un archivo en particular, para el caso 
va devolver el ultimo objeto*/
numerito2.mostrar_numero();


//patron 4 module exports devuelve el constructor
var call = require("./patron4");

var lion = new call();

lion.make_sound();

//patron 5, patron de objeto revelador
var showNumber = require("./patron5").showNumber;
//showNumber.showNumber();
showNumber();






