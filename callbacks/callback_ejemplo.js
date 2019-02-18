//un callback es una funcion que se pasa a otra funcion y que se sera invocada en algun momento
//'use strict';


function sumar(callback,t1,t2){
    
    var suma = {
        result:function(t1,t2){
            console.log("Los parametros que pasaste son : " + t1 + ", "+ t2);
        }
    }

    callback(suma);

}



sumar(function(suma){
    console.log("La suma que hiciste da 0 \n");
    console.log(suma.result(2,-2));
},2,-2);

sumar(function(suma){
    console.log("La suma que hiciste da mayor a 0");
    console.log(suma.result(2,2));
},2,2);