let y = -80;
let y2 = -160;
let y3 = -140;
let y4 = -120;

let score = 0;

let jeweetwel;

function preload() {
  menuBg = loadImage("https://cdn.corenexis.com/f/jatVFN7zKQL.png");
  bgMusic = loadSound("banjostuff.mp3")

  bg = loadImage("https://cdn.corenexis.com/f/NtK9Oe8T3y0.png");
  basket = loadImage("https://cdn.corenexis.com/f/xgJsVWMr7Kr.png");
  apple = loadImage("https://cdn.corenexis.com/f/2Upymvsk8PD.png");

  lose = loadSound("flashbang.mp3");
}

function textFadeInOut(t, start, duration, fadeDuration){
  return{
    text: t,
    start: start,
    duration: duration,
    fadeDuration: fadeDuration,
    end: start + duration + 2*fadeDuration,
    a: 0,
    display: function() {
      push()
        if(frameCount >= this.start && (frameCount - this.start) < this.fadeDuration){
          this.a = easeInOutSine((frameCount - this.start) / this.fadeDuration)
        } else if(frameCount > this.start + this.fadeDuration + this.duration){
          this.a = easeInOutSine((this.end - frameCount)/this.fadeDuration)
        }
        if(frameCount > this.end) this.a = 0;
        fill(0, this.a*255)
        text(this.text, 200, 200);
      pop()
    }
  }
}

async function setup() {
  createCanvas(800, 600);
  bgMusic.play();

  ranX = random(50, 750);
  ranX2 = random(50, 750);
  ranX3 = random(50, 750);
  x4 = random(50, 750);

  size = random(60, 70);
  size2 = random(60, 70);
  size3 = random(60, 70);
  size4 = random(60, 70);

  jeweetwel = textFadeInOut("yo ur ass dude", 0, 10, 60)
}

function draw() {
  background(255);

  menu();
}

function menu() {
  image(menuBg, -50, -50, 850, 650);

  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(80);
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgb(232, 170, 100)';
  text("A game or wtv", 50, 120);

  strokeWeight(3);
  textSize(50);
  text("start -->", 290, 320);
}


function level1() {
  strokeWeight(0);
  image(bg, 0, 0, 800, 600);

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


  //distance
  let d = dist(mouseX - 10, mouseY + 80, ranX, y);
  let d2 = dist(mouseX - 10, mouseY + 80, ranX2, y2);
  let d3 = dist(mouseX - 10, mouseY + 80, ranX3, y3);
  let d4 = dist(mouseX - 10, mouseY + 80, x4, y4);

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

  if (score >= 45) {
    y4 = y4 + 2.5;
    image(apple, x4, y4, size4, size4);
  }

  if (d4 < 45) {
    if (x4 > 400) {
      y4 -= 50;
      x4 -= 150;
    } else if (x4 < 400){
      y4 -= 50;
      x4 += 150;
    }
  }

    
  //score
  drawingContext.shadowBlur = 0;
  textSize(30);
  text(score + "/50", 20, 40);


  drawingContext.shadowBlur = 0;
  if (y >= 600 + size || y2 >= 600 + size2 || y3 >= 600 + size3 || y4 >= 600 + size4) {
    fill(255);
    rect(0, 0, 800, 600);
    lose.play();

    y = y + 0;
    y2 = y2 + 0;
    y3 = y3 + 0;
    y4 = y4 + 0;

    //hij showt de text nie
    jeweetwel.display();
  }
}


function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}