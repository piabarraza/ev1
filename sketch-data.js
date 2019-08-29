var temblores;

function preload(){
	temblores = loadJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson');
}


function draw(){
	colorMode(HSB, 360,100,100);
	for (var t = 0; t < 100; t++){
		var a = random(0, 360);
		fill(a, 100, 100);
		if (temblores.features.leght > 70) {

			pelota(a);
		} else {

			cuadrado (a);
		}

	}

}