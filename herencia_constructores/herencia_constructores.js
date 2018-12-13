//creamos un constructor Persona
function Persona(nombre,apellido,edad){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}

//herencia prototipica, cadena de objetos conectados entre si, 
//que heredan propiedades y metodos entre si y se puede acceder a ellos
//sin tener que especificar cual es.

//instancio un nuevo objeto persona en base al constructor
var marcos = new Persona("Marcos","Scalzotto",28);

console.log(marcos.edad);

//adjuntamos un nuevo metodo al constructor persona
//el metodo suma a la edad de la persona
Persona.prototype.crecer = function(){
    this.edad = this.edad + 1;
}

marcos.crecer();

console.log(marcos.edad);

//adjuntamos una nueva propiedad y metodo
Persona.prototype.dni;
//esta propiedad genera un dni de 1 a 8 digitos en forma aleatoria hasta 49999999
Persona.prototype.identificar = function(){
   this.dni = Math.floor(Math.random(0,1) * 100000000);
}

var Pablo = new Persona("Pablo","Morso",33);
Pablo.identificar();

console.log(Pablo.nombre + "es de edad de: "+ Pablo.edad + ", su dni es: " + Pablo.dni);



















