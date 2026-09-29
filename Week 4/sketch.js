
let maxSlice = 100;

function setup() {
  createCanvas(1000, 600);
}


function draw() {
  background(0);
  x = mouseX + 10;
  y = mouseY - 80;
  s = 900;
  offset = 0.1;
  offX = 450;
  offY = 270;
  meow = 0;
  color = 255;
  shape = [square, circle]
  r = 0;

  noFill();
  for (let i = 0; i < 40; i++ && offset < 1) {
    stroke(color, 0, color);
    if (meow <= 10) {
      circle(x * offset + offX, y * offset + offY, s);
      offset += 0.1;
      offX -= 50;
      offY -= 20;
      s = s * -0.8;
    } else if (meow <=10 && r == 0) {
      square(x * offset + offX, y * offset + offY, s);
      offset += 0.1;
      offX -= 50 - (s / 2);
      offY -= 20 - (s / 2);
      s = s * -0.8;
    }

    if (meow >= 10) {
      circle(x * offset + offX, y * offset + offY, s);
      offset += 0.1;
      offX -= 50;
      offY -= 20;
      s = s * -0.9;
    } else if (meow <=10 && r == 0) {
      square(x * offset + offX, y * offset + offY, s);
      offset += 0.1;
      offX -= 50 - (s / 2);
      offY -= 20 - (s / 2);
      s = s * -0.9;
    }


    meow ++;
    color -= 10;
    r ++;
  }

  if (r > 1) {
    r = 0;
  }

  
}
