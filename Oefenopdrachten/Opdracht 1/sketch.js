function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  //dit zijn de rode rechthoeken
  strokeWeight(0);
  fill(255, 0, 0);
  rect(50, 40, 90, 100);
  rect(1, 360, 140, 200);
  rect(550, 140, 50, 140);
  rect(440, 40, 60, 100);
  rect(260, 225, 80, 135);

  //dit zijn de zwarte rechthoeken
  fill(0);
  rect(260, 40, 80, 100);
  rect(550, 1, 600, 40);
  rect(340, 360, 160, 200);

  //dit zijn de blauwe rechthoeken
  fill(0, 0, 255);
  rect(1, 1, 140, 40);
  rect(1, 280, 140, 80);
  rect(140, 140, 120, 85);
  rect(340, 225, 100, 55);
  rect(500, 140, 50, 85);
  rect(550, 360, 600, 40);

  //dit zijn de gele rechthoeken
  fill(255, 255, 0);
  rect(260, 140, 80, 85);
  rect(500, 1, 50, 140);
  rect(140, 280, 120, 80);
  rect(1, 140, 50, 140);
  rect(440, 225, 60, 55);

  // dit zijn de lijnen en de lijst er om heen
  strokeWeight(4);
  fill(0);
  line(1, 1, 1, 400);
  line(1, 1, 600, 1);
  line(598, 1, 598, 400);
  line(1, 398, 598, 398);
  line(340, 1, 340, 400);
  line(260, 1, 260, 400);
  line(1, 140, 600, 140);
  line(500, 1, 500, 400);
  line(550, 1, 550, 400);
  line(140, 1, 140, 400);
  line(1, 360, 500, 360);
  line(550, 360, 600, 360);
  line(1, 280, 260, 280);
  line(340, 280, 600, 280);
  line(1, 40, 500, 40);
  line(550, 40, 600, 40);
  line(50, 225, 550, 225);
  line(50, 40, 50, 280);
  line(440, 40, 440, 280);
}
