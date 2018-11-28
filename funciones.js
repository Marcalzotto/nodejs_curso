//declaracion de una funcion
function saludar(){
    console.log('Hola Marcos');
}
//invocacion
saludar();

//creo una funcion que recibe una funcion por parametro y la invoca
function recibirFuncion(fn){
    fn();
}

recibirFuncion(saludar);
console.log('\n'); //generamos un salto de linea

//hacemos una expresion de funcion
var saludaEnglish = function(){
                    console.log("Hello Mark");
                 } + console.log(", i don`t believe it");
/*puedo tomar una variable y asignarle una funcion anonima
y luego invocarla como una funcion mas.*/                 
saludaEnglish();

/*puedo pasar mi funcion anonima a mi funcion recibirFuncion
para que la reciba como parametro y la invoque.*/

recibirFuncion(saludaEnglish);
console.log('\n'); //generamos un salto de linea

/*a mi funcion recibirFuncion le puedo pasar una
/expresion de funcion como parametro*/

recibirFuncion(function(){
    var a = 2 + 2;
    console.log("Hola marcos cuanto es 2 + 2? " + a);
});

