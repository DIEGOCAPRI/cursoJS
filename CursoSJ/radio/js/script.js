//alert ("fuera de la funcion saludar")

//function saludar () {          
  //  alert ("dentro de la funcion saludar");
//}

//function saludar (mensaje) {          
  //  alert (mensaje);
//}

//saludar ("Hola a todos");


//nombre de la funcion entre parentesis ejecuta la funcion. Lo que está en el scope global se ejecrtua , 
//puse la funcion `por fuera


//hola a todos, mensaje es el parametro de la funcion. Entonces ejecuta la funcion saluadr con
//el mensaje del parámetro, puedo poner llamar más de una función entonces ejecuta dos veces


//(function saludar (mensaje) {          
  //  alert (mensaje);
//)}(34) auto invoca la función


//'Escritorio'.

//let x = "Escritorio";
//let cadena = "Ferrocarril;"
//console.log(x.length);
//console.log('    algo    ');
//console.log('ALGO'.toLowerCase);//pasa a minúsculas y upper a mayúsculas
//console.log('algo'.toUpperCase);//pasa a minúsculas y upper a mayúsculas
//console.log(cadena.indexOf('e')); ///nhos indica en que lugar está la letra e en ferrocarril
//console.log(cadena.indexOf('e', 4)); ///nhos indica en que lugar está la letra e en ferrocarril
//console.log(cadena.includes('e')); //me dewvuelve si existe true o false
//console.log(cadena.startsWith('e')); //si empieza con true o false
//a partir del 4to registro
//nombre entre comillas más . trae funciones . También puedo hacer let x = "Escritorio" y
/// despues x. para las funciones. length de un string es el largo que tiene un string/cadena
//console.log ('Escritorio'.length)

///


//let x = [12,5,6,8];

//let y = x;

//y.push(300);
//console.log(x);


//puedo tener dos variables con el mismo nombre pero una dentro de la función y otra en el
//scope general

//lo que estoy pasando es la ubicación de la memoria y no grabar en la memoria, x del scope global
//

//let perro = {
  //  nombre : "Bobby",
    //edad:3,
    //patas: 4,
    //raza: "Caniche",
    //ladrar: ()=> {console.log("guau guau")}
//};
//console.log(perro.patas)
//console.log(perro.ladrar)

///tengo las características del perro y dependiendo lo que seleccione devuelve la característica

window.addEventListener ('load',inicializarManejadores);

    function inicializarManejadores(){
        const boton = document.getElementById('btnCalcular');
        boton.addEventListener('click', calcularSuperficie);


    }
    function calcularSuperficie(){

        let radio = document.getElementById('txtRadio').value;
        let superficie = Math.PI * Math.pow(radio,2);
        document.getElementById('txtSuperficie').value = superficie
    }

//{let unaFuncion = ()=>{
  //  alert ("Hola");
//} }

  //   unaFuncion ();
    //let x = inicializarManejadores;
    //x();

    //addeventlisttener llama a la funcion inicializar manejadores cuando se cargó la página