var a_correcto = "2015"; //año correcto
var a = 1; //intentos

//empieza funcion para mostrar numeros
function mostrar_resultado() { 
    event.preventDefault(); //no recargar
    let elemento = document.getElementById("num_usuario").value; //obtener valor input (nro usuario)
 
    	var b = a; // para poder usar var a
    	var c = b; //para poder hacer d
   		var d = 4-c; // cantidad de intentos restantes

        var descuentos = ['20','15','10','5']; //array de descuentos
        //variables pistas
        var pista1 = 'pista1';
        var pista2 = 'pista2';
        var pista3 = 'pista3';
        
        var pista = [pista1,pista2,pista3,''] //array pistas

if(d > -1){ //si cantidad de intentos restantes es mayor a -1


if (elemento == a_correcto && c<5) { //si el valor del usuario es igual a 2015 y los intentos son menor que 5
	alert('¡Acertaste en el intento numero '+c+' ganaste un '+descuentos[c-1]+'% de descuento!')

}else{ //si el valor del usuario es incorrecto, le quedan d intentos y le da una pista en la posicion del array que es el intento

	alert('es incorrecto te quedan '+d+' intentos \n'+pista[c-1])
   ++a //le suma un intento
}

}else{
	alert('superaste el numero maximos de intentos') 
}

}
