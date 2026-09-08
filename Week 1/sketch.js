function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  strokeWeight(5);
  stroke(0);
  textSize(16);

  //text
  fill(0);
  strokeWeight(0);
  textFont('Courier New');
  textStyle(BOLD);
  text('1. Liora Nijhof', 70, 30);
  text('2. Vlag', 70, 300);
  text('3. Schaakbord', 70, 450);
  text('4. Transparant huis', 270, 300);
  text('5. Stoplicht', 270, 30);
  text('6. Dobbelsteen', 270, 520);
  text('7. Mario', 470, 30);

 
  //poppetje
  fill(255);
  strokeWeight(5);
  rect(125, 120, 50, 100);
  circle(150, 100, 100, 100);
  line(125, 220, 110, 250);
  line(175, 220, 190, 250);
  line(175, 160, 200, 135);
  line(125, 160, 100, 185);

  fill(0);
  ellipse(120, 100, 35, 60);
  ellipse(180, 100, 35, 60);


  //stoplicht
  fill(167);
  rect(325, 170, 30, 80);
  rect(300, 50, 80, 160);
  
  fill(255, 0, 0);
  circle(340, 80, 40);

  fill(255, 120, 0);
  circle(340, 130, 40);

  fill(0, 255, 0);
  circle(340, 180, 40);


  //vlag
  strokeWeight(0);
  fill(255, 0, 0);
  rect(70, 320, 160, 30);

  fill(255);
  rect(70, 350, 160, 30);

  fill(0, 0, 255);
  rect(70, 380, 160, 30);

  strokeWeight(5);
  line(70, 320, 70, 410);
  line(70, 320, 230, 320);
  line(230, 320, 230, 410);
  line(70, 410, 230, 410);


  //schaakbord
  fill(55, 36, 20);
  square(70, 470, 160);

  strokeWeight(0);
  fill(183, 160, 135);
  square(90, 490, 20);
  square(90, 530, 20);
  square(90, 570, 20);
  square(130, 490, 20);
  square(170, 490, 20);
  square(130, 530, 20);
  square(170, 530, 20);
  square(130, 570, 20);
  square(170, 570, 20);
  
  square(110, 510, 20);
  square(110, 550, 20);
  square(110, 590, 20);
  square(150, 510, 20);
  square(190, 510, 20);
  square(150, 550, 20);
  square(190, 550, 20);
  square(150, 590, 20);
  square(190, 590, 20);

  stroke(183, 160, 135);
  strokeWeight(3);
  line(90, 490, 90, 610);
  line(210, 490, 210, 610);
  line(90, 490, 210, 490);
  line(90, 610, 210, 610);

  stroke(103, 72, 49);
  strokeWeight(4);
  line(80, 480, 80, 620);
  line(220, 480, 220, 620);
  line(80, 480, 220, 480);
  line(80, 620, 220, 620);


  //Transparant huis
  stroke(0);
  noFill();
  triangle(280, 390, 355, 320, 430, 390);
  square(305, 390, 100)
  rect(320, 430, 30, 60);
  circle(330, 460, 4);

  strokeWeight(0);
  fill(255);
  square(375, 400, 10);
  square(355, 400, 10);
  square(385, 400, 10);
  square(385, 410, 10);

  
  //Dobbelsteen (ik weet hoe het moet met een nummer na een triangle of square die curve maar wil nu niet met bezier dingen bezig zijn)
  fill(255);
  strokeWeight(3);
  quad(300, 580, 330, 550, 380, 550, 350, 580);
  quad(300, 580, 350, 580, 370, 634, 317, 630);
  quad(380, 550, 400, 600, 370, 634, 350, 580);

  fill(0);
  ellipse(340, 565, 10, 7);
  ellipse(320, 598, 9, 7);
  ellipse(345, 615, 9, 7);
  ellipse(375, 610, 7, 9);
  ellipse(376, 590, 7, 9);
  ellipse(378, 570, 7, 9);


  //mario

  strokeWeight(0);

  //hier heb ik alle kleuren blokjes een nummer gegeven voor t variable ding
  let rijen = [
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 2, 3, 3, 2, 1, 1, 0, 0, 0],
    [0, 1, 4, 1, 4, 1, 2, 2, 4, 4, 4, 2, 2, 1, 0, 0],
    [0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0],
    [1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 4, 1, 4, 4, 1, 4, 4, 5, 5, 4, 4, 1, 1, 1, 0],
    [1, 1, 1, 1, 4, 1, 4, 1, 6, 6, 1, 4, 6, 5, 1, 5],
    [1, 4, 4, 4, 4, 1, 4, 1, 6, 6, 1, 4, 6, 6, 1, 5],
    [0, 1, 1, 1, 1, 6, 5, 6, 6, 6, 6, 5, 6, 1, 1, 5],
    [0, 1, 2, 2, 1, 1, 1, 5, 5, 5, 5, 1, 1, 6, 1, 5],
    [0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 0],
    [0, 1, 2, 2, 1, 6, 1, 1, 1, 1, 1, 1, 6, 1, 0, 0],
    [0, 1, 2, 2, 2, 1, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0],
    [0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 7, 7, 2, 2, 7, 7, 2, 1, 0, 0],
    [0, 0, 1, 1, 2, 2, 7, 7, 2, 2, 7, 7, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 4, 4, 1],
    [0, 0, 0, 1, 7, 4, 4, 7, 7, 7, 7, 4, 4, 1, 4, 1],
    [0, 0, 0, 1, 7, 4, 4, 7, 7, 7, 7, 4, 4, 1, 4, 1],
    [0, 0, 0, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 0],
    [0, 0, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 0],
    [0, 0, 1, 7, 7, 7, 7, 1, 1, 1, 1, 7, 7, 7, 1, 0],
    [0, 0, 1, 7, 7, 7, 1, 0, 0, 0, 1, 7, 7, 7, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 8, 8, 8, 1, 0, 0, 0, 0, 1, 8, 8, 8, 1, 0],
    [1, 8, 8, 8, 8, 1, 0, 0, 0, 0, 1, 8, 8, 8, 8, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  ]

  //array met de kleuren 1 tot 8
  let colors = [[-1], [0], [255, 0, 0], [255, 255, 0], [255], [156, 119, 104], [240, 194, 175], [20, 46, 196], [64, 38, 20]]

  let x = 0;
  let y = 0;
  for (let rij of rijen) {
    for (let col of rij) {
      fill(colors[col]);
      if (col != 0) {     //<-- voor het ovrslaan nummer
       square(470 + x, 50 + y, 15);
      }
      x += 15;
    }
    x = 0;
    y += 15;
  }

}