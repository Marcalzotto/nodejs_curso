//creamos un objeto vacio para ver que se puede acceder a sus propuedades 
//usando corchetes

var objeto = {
    prop : 'algo'
    
}

var nombre_prop = 'prop';
//exploramos la propiedad
console.log(objeto.prop);
//o de esta otra forma
console.log(objeto['prop']);
//puedo poner entre los corchetes una variable y acceder al contenido de esta como propiedad
console.log(objeto[nombre_prop]);


//creamos un array

vector = [];
//vamos introduciendo items dentro del array
vector.push(function(){console.log('funcion 1')});
vector.push(function(){console.log('funcion 2')});
vector.push(function(){console.log('funcion 3')});

vector.forEach(function(element){
    element();
});
