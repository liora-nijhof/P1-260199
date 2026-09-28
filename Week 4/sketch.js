
let maxSlice = 100;

function setup() {
  createCanvas(1000, 600);
}


function draw() {
  background(220);
  x = mouseX;
  y = mouseY;
  s = 650;
  offset = 0.1;
  offX = 450;
  offY = 270;


  noFill();
  for (let i = 0; i < 20; i++ && offset < 1) {
    circle(x * offset + offX, y * offset + offY, s);
    offset += 0.1;
    offX -= 50;
    offY -= 20;
    s -= 25;
  }

}
