//ejemplo de funciones invocadas en forma inmediata

//es un codigo que esta limitado a su ambito, lo que este dentro de este
//no afectara lo que este fuera y vicecersa, funciona de la misma forma que los 
//modulos
//la unica forma de afectar al codigo mas interno es pasando parametros
//del codigo que se encuentre por fuera.
var nombre_ext = "marcos";
console.log(nombre_ext);
(function(nombre2){
    var nombre = "german";
    console.log(nombre);
    nombre = nombre2;
    console.log(nombre2);
}('manu'));



