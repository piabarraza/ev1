function consultar(){
var nombre = document.getElementById("nombre").value;
var edad = document.getElementById("edad").value;
var signo = document.getElementById("signo").value;
document.getElementsByTagName("p")[0].innerText= nombre + " los astros han hablado";
var color;
if (signo = tauro){
	color = "green";
}
if (signo = sagitario){
	color = "yellow";
}

document.getElementsByTagName("p")[0].style.color = color;
}
