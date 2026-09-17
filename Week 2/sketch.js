let zonX = 0;

let zonY = 0;


let maanX= -1300;

let maanY= 0;


let x1 = 0;

let y1 = 0;

let x2 = 0;

let y2 = 0;

let x3 = 0;

let y3 = 0;

let start3 = false;


let cloudX = 0;

let cloudX1 = 0;

let cloudX2 = 0;


let rover2StartTime = 0;

let verkeerslicht = 0;



function setup() {

  createCanvas(1260, 640);

  rover2StartTime = millis();

}


function draw() {

  background(191, 136, 71);

  if (zonX > 1285 && zonX < 1290) {

    background(117, 83, 45);

  }

  if (zonX > 1290 && zonX < 1295) {

    background(92, 65, 34);

  }

  if (zonX > 1295 && zonX < 1300) {

    background(46, 32, 17);

  }

  if (zonX >= 1300) {

    background(0);

  }


  if (maanX > 1285 && maanX < 1290) {

    background(46, 32, 17);

  }

  if (maanX > 1290 && maanX < 1295) {

    background(92, 65, 34);

  }

  if (maanX > 1295 && maanX < 1300) {

    background(117, 83, 45);

  }

  if (maanX >= 1300) {

    background(191, 136, 71);

  }

  drawingContext.shadowBlur = 0;

  //maan

  fill(255);

  drawingContext.shadowBlur = 30;

  drawingContext.shadowColor = "rgb(255)";

  circle(maanX, 350 + maanY, 20);

  maanX = maanX + 1.3;

  if (maanX < 650) {

    maanY = maanY - 0.2;

  } else {

    maanY = maanY + 0.2;

  }

  if (maanX > 2600) { 

    maanX = 0;

    maanY = -50;

  }

  //sun

  fill(252, 197, 103);

  drawingContext.shadowColor = "rgb(252, 210, 138)";

  circle(zonX, 150 + zonY, 20);

  zonX = zonX + 1.3;

  if (zonX < 650) {

    zonY = zonY - 0.2;

  } else {

    zonY = zonY + 0.2;

  }

  if (zonX > 2600) { 

    zonX = -20;

    zonY = 0;

  }

  drawingContext.shadowBlur = 0;

  //mouintaonts

  smooth();

  strokeWeight(2);

  stroke(120, 77, 38);

  fill(120, 77, 38);

  beginShape();

  vertex(0, 165);

  vertex(60, 155);

  vertex(150, 200);

  vertex(300, 400);

  vertex(0, 400);

  endShape(CLOSE);

  beginShape();

  vertex(700, 400);

  vertex(850, 200);

  vertex(930, 190);

  vertex(1030, 50);

  vertex(1100, 30);

  vertex(windowWidth, 10);

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

  endShape(CLOSE);

  beginShape();

  vertex(600, 400);

  vertex(700, 340);

  vertex(890, 300);

  vertex(1000, 180);

  vertex(1100, 200);

  vertex(1230, 130);

  vertex(windowWidth, 120);

  vertex(windowWidth, 400);

  endShape(CLOSE);


  //road

  strokeWeight(0);

  fill(138, 89, 45);

  rect(0, windowHeight - 300, windowWidth, 300);

  fill(110, 69, 32);

  beginShape();

  vertex(0, 430);

  vertex(100, 440);

  vertex(200, 435);

  vertex(300, 440);

  vertex(400, 430);

  vertex(500, 440);

  vertex(600, 435);

  vertex(700, 440);

  vertex(800, 430);

  vertex(900, 440);

  vertex(1000, 435);

  vertex(1100, 440);

  vertex(1200, 430);

  vertex(1300, 440);

  vertex(1300, 580);

  vertex(1200, 590);

  vertex(1100, 585);

  vertex(1000, 590);

  vertex(900, 580);

  vertex(800, 590);

  vertex(700, 585);

  vertex(600, 590);

  vertex(500, 580);

  vertex(400, 590);

  vertex(3000, 585);

  vertex(200, 590);

  vertex(100, 580);

  vertex(0, 590);

  endShape(CLOSE);

  fill(92, 56, 24);

  rect(10, 500, 50, 10);

  rect(120, 500, 50, 10);

  rect(230, 500, 50, 10);

  rect(340, 500, 50, 10);

  rect(450, 500, 50, 10);

  rect(560, 500, 50, 10);

  rect(670, 500, 50, 10);

  rect(780, 500, 50, 10);

  rect(890, 500, 50, 10);

  rect(1000, 500, 50, 10);

  rect(1110, 500, 50, 10);

  rect(1220, 500, 50, 10);


  

  //stoplicht

  drawingContext.shadowBlur = 30;

  fill(252, 197, 103);

  beginShape();

  vertex(1102, 360);

  vertex(1098, 365);

  vertex(1102, 370);

  vertex(1110, 375);

  vertex(1118, 370);

  vertex(1122, 365);

  vertex(1118, 360);

  endShape(CLOSE);


  beginShape();

  vertex(1132, 360);

  vertex(1128, 365);

  vertex(1132, 370);

  vertex(1140, 375);

  vertex(1148, 370);

  vertex(1152, 365);

  vertex(1148, 360);

  endShape();


  drawingContext.shadowBlur = 0;

  fill(99, 77, 60);

  rect(1100, 250, 50, 100);


  fill(64, 49, 38);

  rect(1095, 250, 60, 5);

  rect(1095, 350, 60, 5);

  rect(1100, 355, 20, 5);

  rect(1130, 355, 20, 5);


  // Rood
  if (verkeerslicht == 2) {

    fill(158, 28, 19);

    x1 = x1 - 2;

    x2 = x2 - 3;

    start3 = true;

  } else {

    fill(38, 31, 25);

  }
  circle(1125, 270, 25);

  // oranje
  if (verkeerslicht == 1) {

    fill(181, 90, 25);

    x1 = x1 - 1;

    x2 = x2 - 2;

  } else {

    fill(38, 31, 25);

  }
  circle(1125, 300, 25);


  // Groen
  if (verkeerslicht == 0) {

    fill(35, 135, 43);

  } else {

    fill(38, 31, 25);

  }
  circle(1125, 330, 25);



  //rovertjes

  Rover1(x1 + 95, y1 + 400);

  x1 = x1 + 2;

  if (x1 > width + 180) {

    x1 = -160

  }

  Rover2(x2 - 95, y2 + 400);

  if (millis() - rover2StartTime >= 3000) {

    x2 = x2 + 3;

    if (x2 > x1 - 20) {

      x2 = x2 - 1;

    }

  }

  if (x2 > width + 240) {

    x2 = -80;

    rover2StartTime = millis();

  }

  Rover3(x3 + 1400, y3 + 490);

  if (start3 == true) {
    x3 = x3 - 2.5;
  }

  if (x3 <= -1700) {
    x3 = 0
    start3 = false;
  }


  //clouds

  fill(207, 145, 89, 100);

  ellipse(cloudX1 + 900, 100, 250, 100);

  ellipse(cloudX1 + 1000, 70, 250, 100);

  cloudX2 = cloudX2 - 0.5;

  if (cloudX2 <= -width - 500) {

    cloudX2 = 600;

  }


  ellipse(cloudX + 1500, 100, 250, 100);

  ellipse(cloudX + 1400, 150, 250, 100);

  ellipse(cloudX + 1570, 140, 250, 100);

  cloudX = cloudX - 0.4;

  if (cloudX <= -width - 400) {

    cloudX = 0;

  }

  ellipse(cloudX1 + 2000, 100, 250, 100);

  ellipse(cloudX1 + 1900, 70, 250, 100);

  cloudX1 = cloudX1 - 0.8;

  if (cloudX1 <= -width - 500) {

    cloudX1 = 0;

  }

  //extra mountain ding
  
  fill(153, 101, 54);
  beginShape();

  vertex(230, 640);

  vertex(290, 590);

  vertex(340, 570);

  vertex(400, 560);

  vertex(500, 500);

  vertex(550, 490);

  vertex(600, 520);

  vertex(650, 640);

  endShape(CLOSE);
  

  fill(120, 77, 38);
  beginShape();

  vertex(320, 640);
  
  vertex(460, 600);

  vertex(490, 590);

  vertex(520, 570);

  vertex(560, 560);

  vertex(625, 600);

  vertex(645, 640)

  endShape(CLOSE);

}

function Rover1 (x, y) {

  strokeWeight(4);

  stroke(21, 17, 15);

  line(x - 60, y + 50, x - 80, y + 70);

  line(x - 20, y + 50, x - 30, y + 70);

  line(x + 20, y + 50, x + 30, y + 70);

  line(x + 60, y + 50, x + 80, y + 70);

  strokeWeight(0);

  fill(26, 21, 19);

  circle(x - 80, y + 70, 30);

  circle(x - 30, y + 70, 30);

  circle(x + 30, y + 70, 30);

  circle(x + 80, y + 70, 30);

  fill(64, 57, 52);

  circle(x - 80, y + 70, 15);

  circle(x - 30, y + 70, 15);

  circle(x + 30, y + 70, 15);

  circle(x + 80, y + 70, 15);

  fill(41, 37, 35);

  beginShape();

  vertex(x - 80, y);

  vertex(x + 80, y);

  vertex(x + 60, y + 50);

  vertex(x - 60, y + 50);

  endShape(CLOSE);

  fill(64, 57, 52);

  rect(x + 47.5, y - 60, 15, 50);

  fill(26, 21, 19);

  rect(x + 40, y - 10, 30, 10);

  rect(x + 45, y - 65, 20, 5);

  rect(x - 82, y - 5, 164, 10);

  rect(x + 30, y - 90, 50, 5);

  fill(41, 37, 35);

  rect(x + 35, y - 85, 40, 20);

}

function Rover2 (x, y) {

  strokeWeight(4);

  stroke(74, 60, 53);

  line(x - 60, y + 50, x - 80, y + 70);

  line(x - 20, y + 50, x - 30, y + 70);

  line(x + 20, y + 50, x + 30, y + 70);

  line(x + 60, y + 50, x + 80, y + 70);

  strokeWeight(0);

  fill(84, 70, 63);

  circle(x - 80, y + 70, 30);

  circle(x - 30, y + 70, 30);

  circle(x + 30, y + 70, 30);

  circle(x + 80, y + 70, 30);

  fill(112, 95, 86);

  circle(x - 80, y + 70, 15);

  circle(x - 30, y + 70, 15);

  circle(x + 30, y + 70, 15);

  circle(x + 80, y + 70, 15);

  fill(99, 84, 77);

  beginShape();

  vertex(x - 80, y);

  vertex(x + 80, y);

  vertex(x + 60, y + 50);

  vertex(x - 60, y + 50);

  endShape(CLOSE);

  fill(112, 95, 86);

  rect(x + 47.5, y - 60, 15, 50);

  fill(84, 70, 63);

  rect(x + 40, y - 10, 30, 10);

  rect(x + 45, y - 65, 20, 5);

  rect(x - 82, y - 5, 164, 10);

  rect(x + 30, y - 90, 50, 5);

  fill(99, 84, 77);

  rect(x + 35, y - 85, 40, 20);

}

function Rover3 (x, y) {

  strokeWeight(4);

  stroke(74, 60, 53);

  line(x - 60, y + 50, x - 80, y + 70);

  line(x - 20, y + 50, x - 30, y + 70);

  line(x + 20, y + 50, x + 30, y + 70);

  line(x + 60, y + 50, x + 80, y + 70);

  strokeWeight(0);

  fill(84, 70, 63);

  circle(x - 80, y + 70, 30);

  circle(x - 30, y + 70, 30);

  circle(x + 30, y + 70, 30);

  circle(x + 80, y + 70, 30);

  fill(112, 95, 86);

  circle(x - 80, y + 70, 15);

  circle(x - 30, y + 70, 15);

  circle(x + 30, y + 70, 15);

  circle(x + 80, y + 70, 15);

  fill(99, 84, 77);

  beginShape();

  vertex(x - 80, y);

  vertex(x + 80, y);

  vertex(x + 60, y + 50);

  vertex(x - 60, y + 50);

  endShape(CLOSE);

  fill(112, 95, 86);

  rect(x - 47.5, y - 60, 15, 50);

  fill(84, 70, 63);

  rect(x - 55, y - 10, 30, 10);

  rect(x - 50, y - 65, 20, 5);

  rect(x - 82, y - 5, 164, 10);

  rect(x - 65, y - 90, 50, 5);

  fill(99, 84, 77);

  rect(x - 60, y - 85, 40, 20);

}


function keyPressed() {

  // Enter = verkeerslicht veranderen

  if (keyCode === ENTER) {

    verkeerslicht++;

    if (verkeerslicht > 2) {

      verkeerslicht = 0;

    }
  }
}