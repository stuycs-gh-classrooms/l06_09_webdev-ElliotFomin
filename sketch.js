var x;
var y;
var xVel;
var yVel;
var w;
var h;
var r;
var g;
var b;
function setup(){
  createCanvas(1000,800);
  background(255);
  w=int(random(50,150));
  h=int(random(50,150));
  x = int(random(width - w));
  y= int(random(height - h));
  xVel = int(random(-10,10));
  yVel = int(random(-10,10));
  r=0;
  g=0;
  b=0;
  while (xVel == 0){
    xVel = int(random(-10,10));
  }
  while (yVel == 0){
    yVel = int(random(-10,10));
  }
}

function draw(){
  background(255);
  fill(r,g,b);
  rect(x,y,w,h);
  x+= xVel;
  y+= yVel;
  if (x <= 0 || x >= width - w){
    xVel *= -1;
    r = int(random(255));
    g = int(random(255));
    b = int(random(255));
  }
  if (y <= 0 || y >= height - h){
    yVel *= -1;
    r = int(random(255));
    g = int(random(255));
    b = int(random(255));
  }
}
