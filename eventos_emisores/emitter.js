//creamos un constructor de una objeto que emite y capta eventos
var Emisor = function(){
    this.eventos = {}
}

Emisor.prototype.on = function(type, listener){
    this.eventos[type] = this.eventos[type] || [];
    this.eventos[type].push(listener);
}



Emisor.prototype.emitir = function(type){

        if(this.eventos[type]){
            this.eventos[type].forEach(function(listener){
                listener();
            });
        }
}

module.exports = Emisor;