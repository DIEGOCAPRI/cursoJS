/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{var sueldouno;
    var resultados;
    var aumento;
    sueldouno = parseInt (document.getElementById ("sueldo").value);
    aumento = sueldouno * 10 / 100;
    resultados = sueldouno + aumento
    document.getElementById ('resultado').value = resultados; 
}
