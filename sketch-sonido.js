
var mic;
function setup(){
  mic = new p5.AudioIn()
  mic.start();
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  noStroke();
}
function draw(){
  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 50, 50);
  colorMode(HSB, 360, 100, 100);
  for (var x = 0; x < 100; x++) {
    var a = mic.getLevel(0, 360);
    fill(300, 100, 100);
    pelota(a);
  }
}

function pelota(diametro) {
  ellipse(mic.getLevel(0, width), mic.getLevel(0, height), diametro, diametro);
}
