/*un objeto literal es un conjunto pares clave_valor encerrados
entre llaves*/
var suma = {
    t1 : 5,
    t2 : 10,
    t3 : 0,
    sumarTerminos : function(){
        this.t3 = this.t1 + this.t2;
        console.log(this.t3);
    } 
};

console.log("invcamos el metodo sumarTerminos");
console.log('\n');
suma.sumarTerminos();

console.log('\n');

console.log('vemos el valor del termino t1');
console.log(suma['t1']);

console.log('\n');

console.log('vemos el valor del termino t2');
console.log(suma['t2']);

console.log('\n');

console.log('realizamos una operacion de resta con los terminos por separado');
console.log('\n');

console.log(suma['t2'] - suma['t1']);



