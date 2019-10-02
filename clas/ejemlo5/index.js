let listaPersonas = [];
window.addEventListener('load', function(){

/// var form = document.getElementById ('frmPersona')
///var form = document.getElementsByTagName ('form') [0];
var frm = document.forms [0];

frm.addEventListener ('submit', manejarSubmit);
});

function manejarSubmit (e)
{
e.preventDefault ();

alert ("Capture el evento submit")

////crear una persona ver como  hacerlo con el this.nombre , etc es una function
}

///<label for="txtNombre">Nombre:</label> si paretas nombre te dirige al campo a comletar
     ///   <input type="text" id="txtNombre" name="nombre" placeholder="Ingrese su nombre">

     ///tr son filas td columnas

     /// los tres var son lo mismo 