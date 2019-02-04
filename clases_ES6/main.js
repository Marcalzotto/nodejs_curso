'use strict';
//se activa el modo javascript estricto

//por ejemplo escribir una variable sin declararla da error
//a = 5;


class any {
    constructor(param_a,param_b){
        this.param_a = param_a;
        this.param_b = param_b;    
    }

    sum(){
        console.log(this.param_a + this.param_b);
    }
}


var Suma = new any(2,2);

var concat = new any('Que',' miras?');

console.log(Suma.sum());

console.log(concat.sum());