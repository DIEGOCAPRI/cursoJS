window.addEventListener ('load', ( ) =>
{

let selPaises = document.getElementById ('selPaises');
let selCiudades = document.getElementById ('selCiudades');
cargarSelect (selPaises, array)
}
);

function cargarSelect (select, arr){
let opcion;

arr.array.forEach(element => {

    opcion = document.createElement ('option');
    let texto = document.createTextNode (element);
opcion.appendChild (texto);
opcion.setAttribute ('value', element);
});



}
let obtenerPaises =arr =>
{
return arr.map (elemento=>elemento.pais)
.unique()
.sort ();
}

);
return pais;


};


function obtenerCiudades (arr, pais)
{
let ciudades = arr.filter (function (elemento){
return elemento.pais === pais

})
.map (function (elemento)
{ return elemento.ciudad;})
.unique(
)
.sort()
return ciudades;
}

Array.prototype.unique = function () {


}