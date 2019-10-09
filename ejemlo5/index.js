let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais) {
this.nombre = nombre;
     this.edad = edad;
     this.apellido = apellido;
     this.genero = genero;
     this.maneja = maneja;
     this.nada = nada;
     this.bicicleta = bicicleta;
     this.pais = pais;

     Persona.prototype.Saludar = function () {
          console.log
          ("Hola, Soy " + this.apellido + " " + this.nombre + "y tengo " + this.edad);
     }


}


window.addEventListener("load", function () {

     /// var form = document.getElementById ('frmPersona')
     ///var form = document.getElementsByTagName ('form') [0];
     var frm = document.forms[0];

     frm.addEventListener('submit', manejarSubmit);
});

function manejarSubmit(e) {
     e.preventDefault();

     let nuevaPersona = traerPersona();

     listaPersonas.push(nuevaPersona);
     cargarFormulario(nuevaPersona);
     limpiarFormulario();



     ////crear una persona ver como  hacerlo con el this.nombre , etc es una function


function cargarFormulario(persona) {
     document.getElementById("txtNombre2").value = persona.nombre;
     document.getElementById("txtApellido2").value = persona.apellido;
     document.getElementById("txtEdad2").value = persona.edad;
     if (nuevaPersona.genero == "masculino") {

          document.getElementById("rdoMasculino2").checked = true;
     }
     else {

          document.getElementById("rdoFemenino2").checked = true;

     }

     document.getElementById("chNada2").checked = persona.nada;
     document.getElementById("chManeja2").checked = persona.maneja;
     document.getElementById("chBicicleta2").checked = persona.bicicleta;
     document.getElementById("selPais2").value = persona.pais;


}

function traerPersona() {
     

     let nombre = document.getElementById('txtNombre').value;
     let apellido = document.getElementById('txtApellido').value;
     let edad = document.getElementById('txtEdad').value;
     let genero;
     if (document.getElementById('rdoMasculino').checked == true) { genero = "masculino"; }
     else {
          genero = "femenino"

     }
     let nada = document.getElementById('chManeja').checked;
     let maneja = document.getElementById('chNada').checked;
     let bicicleta = document.getElementById('chBicicleta').checked;
     let pais = document.getElementById('selPais').value;
     let nuevaPersona = new Persona (nombre, apellido, edad, genero, maneja, nada, bicicleta, pais);
return nuevaPersona;


}
function limpiarFormulario() {
     document.getElementById('txtNombre').value = "";
     document.getElementById('txtApellido').value = "";
     document.getElementById('txtEdad').value = "";
     document.getElementById('rdoMasculino').checked = false;


     document.getElementById('chNada').checked = false;
     document.getElementById('chManeja').checked = false;
     document.getElementById('chBicicleta').checked = false;
     document.getElementById('selPais').value = "";



}
}

//// con el push nueva persona estoy incorporando al final a la persoan nueva que se  est´´a creando
///<label for="txtNombre">Nombre:</label> si paretas nombre te dirige al campo a comletar
     ///   <input type="text" id="txtNombre" name="nombre" placeholder="Ingrese su nombre">

     ///tr son filas td columnas

     /// los tres var son lo mismo 