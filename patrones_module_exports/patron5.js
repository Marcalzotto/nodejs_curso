/*patron 5, se llama patron de objeto revelador, de mi modulo solo expongo
las partes que yo quiero y no todo el modulo completo*/

var number = 5000;

function showNumber(){
    console.log(number);
}
//creo un objeto con la sintaxis literal y pongo mi funcion dentro de el,
//de esta forma nunca se podra acceder al numero
module.exports = {
    showNumber : showNumber
}