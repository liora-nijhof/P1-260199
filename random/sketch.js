let y = -80;
let y2 = -160;
let y3 = -140;

let score = 0;

function preload() {
  bg = loadImage("https://cdn.corenexis.com/f/NtK9Oe8T3y0.png");
  basket = loadImage("https://cdn.corenexis.com/f/xgJsVWMr7Kr.png");
  apple = loadImage("https://cdn.corenexis.com/f/2Upymvsk8PD.png");

  lose = loadSound("https://videotourl.com/audio/1791376004526-2bb59267-2b7d-467e-bcec-cdd953b735d8.mp3");
}

function level1() {
  //basket
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'rgb(232, 170, 100)';
  image(basket, mouseX - 65, mouseY - 10, 200, 200);


  //apple
  drawingContext.shadowBlur = 5
  y = y + 2.5;
  image(apple, ranX, y, size, size);
  
  y2 = y2 + 3;
  image(apple, ranX2, y2, size2, size2);

  y3 = y3 + 4;
  image(apple, ranX3, y3, size3, size3);

  
  drawingContext.shadowBlur = 0;
  if (y >= 600 + size || y2 >= 600 + size2 || y3 >= 600 + size3) {
    fill(255);
    rect(0, 0, 800, 600);
    lose.play();
  }


  //distance
  let d = dist(mouseX - 10, mouseY + 80, ranX, y);
  let d2 = dist(mouseX - 10, mouseY + 80, ranX2, y2);
  let d3 = dist(mouseX - 10, mouseY + 80, ranX3, y3);

  if (d < 45) {
    y = -80;
    ranX = random(50, 750);
    size = random(60, 70);
    score ++;
  } else if (d2 < 45) {
    y2 = -160
    ranX2 = random(50, 750);
    size2 = random(60, 70);
    score ++;
  } else if (d3 < 45) {
    y3 = -140
    ranX3 = random(50, 750);
    size3 = random(60, 70);
    score++;
  }
}

function setup() {
  createCanvas(800, 600);

  ranX = random(50, 750);
  ranX2 = random(50, 750);
  ranX3 = random(50, 750);
  size = random(60, 70);
  size2 = random(60, 70);
  size3 = random(60, 70);
}

function draw() {
  background(255);
  image(bg, 0, 0, 800, 600);

  level1();

  //score
  drawingContext.shadowBlur = 0;
  textSize(30);
  text(score + "/50", 20, 40);
}
