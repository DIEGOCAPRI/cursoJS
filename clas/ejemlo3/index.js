
function Persona (nombre, apellido, edad)

{this.nombre = nombre;
    this.apellido = apellido
    this.edad = edad;
this.saludar = function ()
{console.log ("Hola, Soy " + this.nombre + " " + this.apellido);}



}

var x = new Persona ("Juan", "Perez", "22");
var y = new Persona ("Diego", "Capri", "34");

console.log(x);
console.log(y);

///x.genero = "masculino";
Persona.prototype.genero = 20;
console.log (x);
console.log (y);
x.saludar();
y.saludar();


///new genera un nuevo bloque donde puedo declarar variables. El log devuelve el lugar de memoria donde se 
/// va a guardar . var x = new Persona ();
/// Prototype lo que tienen todos los objetos