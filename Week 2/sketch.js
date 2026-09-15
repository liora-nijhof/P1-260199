let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
}


function draw() {
  background(191, 136, 71);
  drawingContext.shadowBlur = 0;

  //sun
  fill(252, 197, 103);
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = "rgb(252, 210, 138)";

  circle(x, 150 + y, 20);
  
  x = x + 1.5;

  if (x < width / 2) {
    y = y - 0.2;
  } else {
    y = y + 0.2;
  }

  if (x > width + 20) { 
    x = -20;
    y = 0;
  }

  drawingContext.shadowBlur = 0;

  //mouintaonts
  smooth();
  strokeWeight(2);
  stroke(120, 77, 38);
  fill(120, 77, 38);
  
  beginShape();

  vertex(0, 215);
  vertex(60, 205);
  vertex(150, 250);
  vertex(300, 400);
  vertex(0, 400);

  endShape(CLOSE);

  beginShape();

  vertex(700, 400);
  vertex(850, 200);
  vertex(930, 190);
  vertex(1030, 50);
  vertex(1100, 30);
  vertex(windowWidth, 0);
  vertex(windowWidth, 400);

  endShape(CLOSE);

  stroke(153, 101, 54);
  fill(153, 101, 54);

  beginShape();

  vertex(0, 320);
  vertex(110, 300);
  vertex(260, 220);
  vertex(350, 240);
  vertex(410, 300);
  vertex(550, 400);
  vertex(0, 400);

  endShape();

  //road
  strokeWeight(0);
  fill(138, 89, 45);
  rect(0, windowHeight - 300, windowWidth, 300);

}