function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function mouseDragged() {
  line(mouseX, mouseY, pmouseX, pmouseY)
}

function keyPressed() {
  if (key === 'q') {
    background(255);
  }
}
