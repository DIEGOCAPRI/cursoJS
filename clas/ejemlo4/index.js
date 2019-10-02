
function Avenger (nombre, nombreReal, poder)

{this.nombre = nombre;
this.nombreReal = nombreReal;
this.salud = 10
this.poder= poder;
this.status = function (console.log (this.nombre + " Salud: " + this.salud + "Energia: " + this.poder))

}
this.curar = function(amigo) {

    if (this.poder > 40) {amigo.salud +=20;
    this.poder = 40 }



}



var Ironman = new Avenger ("Ironman", "Tony", 1000);
var Capitan = new Avenger("Capitan America", "capitan", 500);
var Thanos = new Avenger ("Thanos", "Thanos", 1500);


Ironman.status ();
Thanos.status ();