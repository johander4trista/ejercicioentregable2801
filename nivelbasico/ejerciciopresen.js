//switch 

var fecha = prompt(" Ingresa Fecha ");
var dia = prompt("Ingresa el dia ");
alert =("");

switch(dia){
	case 0:
		alert = "domingo";
		break;
	case 1:
		alert = "lunes";
		break;			
	case 2:
		alert = "martes";
		break;			
	case 3:
		alert = "miércoles";
		break;			
	case 4:
		alert = "jueves";
		break;			
	case 5:
		alert = "viernes";
		break;			
	case 6:	
        alert = "sábado";
		break;	
default:
		alert = "error";					
}
document.write("<p>hoy es " + alert +"</p>");