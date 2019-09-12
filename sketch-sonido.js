
var mic, a;
function setup(){
  mic = new p5.AudioIn()
  mic.start();
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  colorMode(HSB, 360, 100, 100)
  noStroke();
}
function draw(){
  background(235,100,20);
  micLevel = mic.getLevel();
  
a = constrain(height-micLevel*height*5, 0, height);
  ellipse(width/2, a, 50, 50);

  ellipse(width/2, height-a, 50, 50);

  colorMode(HSB, 360, 100, 100);
   fill(300, 100, 100);

}
