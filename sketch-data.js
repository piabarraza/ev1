var temblores;

function preload() {
	temblores = loadJSON()
}

function setup() {
	console.log(temblores);
	createCanvas(windiwWidth, windowHeight);
}

function draw(){
	colorMode(HSB, 360,100,100);
	for (var x = 0; x < 100; x++){
		var a = random(0, 360);
		fill(a, 100, 100);
		if (temblores.features.leght > 70) {

			pelota(a);
		} else {

			cuadrado (a);
		}

	}
	
}