//importo el modulo util
var util = require('util');

function can(){
    this.oreja = 2;
    this.pata = 4;
    this.ladra = function(){
        console.log("wow");
    }
}

function husky(){
    can.call(this);//si yo imprimo por pantalla sin esta linea
    //voy a obtener las propiedades de can, pero no los valores asignados al constructor
    this.pelaje = "arctico";
}

util.inherits(husky,can);

huskyFido = new husky();

console.log('Carateristicas del Fido: ' + '\n' + 'Orejas: '+ huskyFido.oreja+','+'\n'+'Cantidad Patas: '+huskyFido.pata + '\n' + 'Pelaje: '+ huskyFido.pelaje);
console.log('Fido ladra: ') + huskyFido.ladra();