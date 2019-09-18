function mostrar()
{
	
var numero;
	var contador=0;
	var acumulador=0;
var promedio;
	for (var i=0; i < 5; i++)
{
numero = parseInt (prompt ("Ingrese un numero: "));

acumulador = acumulador + numero;
/// es loi mismo que acumulador += numero;


}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
//for (var i=0; i < 5; i++)
// For primero valor inicial, después evalúa la condición y si es true ejecuta y agarra el incremento. 
//hasta que rompe la condición

//do while se ejecuta al menos una vez

//
//while (contador < 5)
//{numero = parseInt (prompt ("Ingrese un numero"));
//acumulador =acumulador + numero; (acumulador acumula en variables)
//contador = contador + 1; acumula en constantes


//}
//document.getElementById('suma').value=acumulador;
//document.getElementById('promedio').value=acumulador/5;

