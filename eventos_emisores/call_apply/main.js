var obj = {
    nombre: 'Marcos',
    apellido: 'Mongo',
    show: function(){
        console.log('Hello ' + this.nombre +','+ this.apellido)

    }
}
//call y apply son metodos que pueden llamarso sobre las 
//funciones dentro de un objeto, ya que estas son de primera clase, es decir
//las funciones en si mismas son objetos, estos 2 metodos pueden recibir
//como parametros objetos literales con propiedades que serviran
//para sobre escribir a las propiedades dentro del objeto principal que se invoca
//sin tener que llamar al mismo y sobre escribir la propiedad
obj.show();
obj.show.call({nombre: 'Gaston',apellido: 'Ricoten'});
obj.show.apply({nombre: 'Pablo'});

