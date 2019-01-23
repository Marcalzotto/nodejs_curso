//en este patron lo que hago es devolver el constructor

function call(){
    this.sound = "ggrrrr";
    this.make_sound = function(){
        console.log(this.sound);
    }
}

module.exports = call;