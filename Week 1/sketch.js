function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  strokeWeight(5);
  textSize(16);

  fill(0);
  textFont('Courier New');
  textStyle(BOLD);
  text('Sir Mc Sirington', 80, 30);

  fill(255);
  rect(125, 120, 50, 100);
  circle(150, 100, 100, 100);
  line(125, 220, 110, 250);
  line(175, 220, 190, 250);
  line(175, 160, 200, 135);
  line(125, 160, 100, 185);

  fill(0);
  ellipse(120, 100, 35, 60);
  ellipse(180, 100, 35, 60);

  fill(167);
  rect(325, 170, 30, 80);
  rect(300, 50, 80, 160);
  
  fill(255, 0, 0);
  circle(340, 80, 40);

  fill(255, 120, 0);
  circle(340, 130, 40);

  fill(0, 255, 0);
  circle(340, 180, 40);
}
