function consultar(){
var nombre = document.getElementById("nombre").value;
var edad = document.getElementById("edad").value;
var signo = document.getElementById("signo").value;
var tamaño;
 if (edad < 12 || edad > 60){
	 tamano = "xx-large";
 } else {
	 tamano = "large"
  }

document.getElementsByTagName("p")[0].innerText= nombre + " los astros han hablado, tu color es el del texto";
document.getElementById("frase").style.fontSize= tamaño;

var depende;
if (signo == "Capricornio"){
	depende = "black";
}if (signo == "Acuario"){
	depende = "blue";
}if (signo == "Piscis"){
	depende = "purple";
}if (signo == "Aries"){
	depende = "red";
}if (signo == "Tauro"){
	depende = "green";
}if (signo == "Geminis"){
	depende = "yellow";
}if (signo == "Cancer"){
	depende = "white";
}if (signo == "Leo"){
	depende = "orange";
}if (signo == "Virgo"){
	depende = "brown";
}if (signo == "Libra"){
	depende = "pink";
}if (signo == "Escorpio"){
	depende = "red";
}if (signo == "Sagitario"){
	depende = "magenta";
}
document.getElementsByTagName("p")[0].style.color = depende;
}
