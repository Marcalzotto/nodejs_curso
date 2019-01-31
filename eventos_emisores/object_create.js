var animal = {
    nombre : '',
    especie: '',
    sonido: function(){
        console.log('emite sonido de: ' + especie);
    }
}

var gato = Object.create(animal);

gato.nombre = 'michon';
gato.especie = 'gato';
gato.sonido();

var perro = new animal();

perro.nombre = 'firu';
perro.especie = 'can';
perro.sonido();