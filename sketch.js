var hr;
var mn;
var sc;

var hrAngle;
var mnAngle;
var scAngle;

function setup() {
  createCanvas(800,700);

  angleMode(DEGREES);
}

function draw() {
  background("Black");  

  translate(400,400);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12,0,24,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  noFill();
  strokeWeight(7);
  stroke("red");
  arc(0,0,430,430,-90,scAngle);
  stroke("#05FA08");
  arc(0,0,400,400,-90,mnAngle);
  stroke("blue");
  arc(0,0,370,370,-90,hrAngle);


  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("#05FA08");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  drawSprites();
}