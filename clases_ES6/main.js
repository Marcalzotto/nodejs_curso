'use strict';
//se activa el modo javascript estricto

//por ejemplo escribir una variable sin declararla da error
//a = 5;


class any {
    //funciona igual que una funcion constructora de objetos
    constructor(param_a,param_b){
        this.param_a = param_a;
        this.param_b = param_b;    
    }
    //los metodos que yo cree dentro de la clase 
    //se van a agregar al prototipo
    sum(){
        console.log(this.param_a + this.param_b);
    }
}


var Suma = new any(2,2);

var concat = new any('Que',' miras?');

Suma.sum();

concat.sum();