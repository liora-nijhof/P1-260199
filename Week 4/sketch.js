
let maxSlice = 100;

function setup() {
  createCanvas(1000, 600);
}


function draw() {
  background(220);
  x = mouseX;
  y = mouseY;
  s = 700;
  offset = 0.1;
  offX = 450;
  offY = 270;
  meow = 0;


  noFill();
  for (let i = 0; i < 40; i++ && offset < 1) {
    if (meow <= 10) {
      circle(x * offset + offX, y * offset + offY, s);
      offset += 0.1;
      offX -= 50;
      offY -= 20;
      s = s * -0.8;
    }

    if (meow >= 10) {
      circle(x * offset + offX, y * offset + offY, s);
      offset += 0.1;
      offX -= 50;
      offY -= 20;
      s = s * -0.8; 
    }

    meow ++;
  }

}
