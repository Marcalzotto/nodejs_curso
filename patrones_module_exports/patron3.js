/*el siguiente patron 3 se realiza utiliznado un constructor,
defino entonces mi objeto y luego genero una instancia*/

function numerito(){
    this.t1 = 1502,
    this.mostrar_numero = function(){
        console.log(this.t1);
    } 
}

module.exports = new numerito();