/*require trata de invocar lo que se guardo en module.exports ya que 
exports y module.exports apuntan a direcciones de memoria diferentes*/
var echo = require("./ejemplo");

echo.echo();