function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(235, 100, 100);
  frameRate(8);
  noStroke();
}

function draw() {
  for (var x = 0; x < 100; x++) {
    var a = random(0, 100);
    fill(300, 100, a);
    pelota(a);
  }
}

function pelota(diametro) {
  ellipse(random(0, width), random(0, height), diametro, diametro);
}
