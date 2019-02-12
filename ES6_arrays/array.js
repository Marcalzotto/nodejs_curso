var myBuffer = new ArrayBuffer(8); //recibe una longitud en bytes

var view = new Int32Array(myBuffer);// este array solo permite almacenar
//2 numeros, es decir 4 bytes maximo

view[0] = 64;
view[1] = 64;
console.log(view);