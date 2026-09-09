let ax, ay;
let bx, by;
let cx, cy;
let x, y;
let amount;
let width, height;

function setup() {
  width = 900;
  height = 800;
  createCanvas(width,height);
  ax = width/2 + 200;
  ay = height/4;

  bx = width/2 - 200 + 200;
  by = height/1.5;

  cx = width/2 + 200 + 200;
  cy = height/1.5;

  x = random(width);
  y = random(height);
  background(255);

  stroke(255);
  strokeWeight(8);
  //de drie set punten
  point(ax,ay);
  point(bx,by);
  point(cx,cy);
}

function draw() {
  //als je t amount groter
  amount = 60;
  for(let i = 0; i < amount; i++){
    strokeWeight(2);
    stroke(252, 68, 167);
    point(x,y);
    //selecteerd punten tussen die punten
    let r = floor(random(3));
    if(r == 0){
      x = lerp(x,ax,0.5);
      y = lerp(y,ay,0.5);
    }
    else if(r == 1){
      x = lerp(x,bx,0.5);
      y = lerp(y,by,0.5);
    }
    else{
      x = lerp(x,cx,0.5);
      y = lerp(y,cy,0.5);
    }
  }
}