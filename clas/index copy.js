var Persona = {
nombre : "Juan", 
apellido: "Perez",
edad: 1,
domicilio : {

    pais: "Argentina",
    localidad: "Capital Federal",
    direccion : {
        calle: "Mitre",
        numero: 750

    }
}


};

console.log ( Persona.nombre);

console.log (Persona.domicilio.pais);
console.log (Persona.domicilio.direccion.calle);

console.log (Persona['domicilio']['direccion']['calle']);

for ( prop in Persona )

{console.log(prop + ":" + Persona [prop]);}
///trae los datos en la consola de nombre, apellido, etc