//pasaje por valor 
var a = 2;

function alter(x){
    x = 6;
}
//el pasaje por valor trabaja con el contenido y no con direcciones de memoria
alter(a);
//al llamar a la funcion alter, esta recibe un valor a y sobreescribe este valor
//pero al pasar a la funcion no se altera el valor del a original sino que 
//se crea una copia de este y se le asigna el valor 6, este otro a apunta 
//a una direccion de memoria diferente al a original
console.log(a);

//probamos con objetos
//creo un objeto vacio y le asigno una propiedad llamada one.
var c = {};
c.one = 1;
//copio un objeto en otro
copy = c;

console.log(c);
console.log(copy);

function alterObj(obj){
    obj.one = function(){console.log("changed")}
    obj.two = {}
}

alterObj(c);
//luego de ejecutar la funcion la impresion por pantalla devuelve que tanto c
//como copy tienen las mismas propiedades ya que los 2 usan la misma referencia de 
//memoria por lo tanto significa que estos 2 objetos se encuentran vinculados
//a la misma direccion de memoria, si bien copy es una copia de c, al usar 
//la misma direccion de memoria los cambios en c, se reflejaran en copy
console.log(c);
console.log(copy);







