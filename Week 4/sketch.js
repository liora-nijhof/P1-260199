let ran = 0;
let isPaused = false

function setup() {
  createCanvas(1000, 600);
}


function draw() {
  background(0);

  let x = mouseX + 10;
  let y = mouseY - 80;
  meow = 0;
  color = 255;
  s = 900;
  fps = 30;
 

  strokeWeight(1);
  noFill();

  let start = (frameCount / fps) % 1

  for (let i = start; i < 40 + start; i++) {

    colors = [[color, 0, 0], [color, 0, color], [0, color, 0], [0, 0, color], [color, color, 0], [0, color, color]]

    let offset = 0.1 + (i * 0.1);
    let offX = 450 - (50 * i);
    let offY = 270 - (20 * i);
    let size = 900 * Math.pow(0.9, i);

    stroke(colors[ran]);
    circle(x * offset + offX, y * offset + offY, size);

    meow ++;
    color -= 10;


    if (ran >= 5) {
      ran = 0;
    }

    if (isPaused == true) {
      frameCount = 0;
      fps = 0;
    }
  }
}


function keyPressed() {
  if (key === 'q') {
    ran ++;
  }

  if (key === ' ') {
    isPaused = !isPaused;
  }
}  