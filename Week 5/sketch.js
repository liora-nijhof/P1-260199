let buttonMenu;

let vraag1;
let vraag2;
let vraag3;
let vraag4;
let vraag5;
let vraag6;
let vraag7;
let vraag8;
let vraag9;
let vraag10;

let pressed = 0;

function menu() {
  strokeWeight(1);
  stroke(138, 110, 90);
  fill('rgba(245, 223, 182, 0.27)');

  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgb(179, 151, 130)';

  rect(200, 130, 610, 200, 10);

  stroke(0);
  fill('rgba(85, 74, 56, 0.51)');
  textSize(60);
  textFont('Times New Roman');

  text("Quiz enzo", 380, 240);

  buttonMenu = createButton('Start');
  buttonMenu.position(420, 460);
  buttonMenu.size(200, 60);
  buttonMenu.style('font-size', '60');
  buttonMenu.style('background-color', 'rgba(236, 216, 180, 0.52)');
  
  buttonMenu.mousePressed(press);

  if (pressed >= 1) {
    buttonMenu.hide();
  }
}

class Vraag {
  constructor(text, x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.text = text;
  }

  show() {
    textFont('Times New Roman');
    textSize(this.size);
    fill(this.color);

    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'rgb(138, 110, 90)';

    text(this.text, this.x, this.y);
  }
}

function press() {
  pressed += 1;
}


function preload() {
  img1 = loadImage("https://cdn.corenexis.com/f/BPOwfydmyGU.png");
} 


function setup() {
  createCanvas(1000, 650);

  vraag1 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag2 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag3 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag4 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag5 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag6 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag7 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag8 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag9 = new Vraag("yo", 200, 180, 50, 'brown');
  vraag10 = new Vraag("yo", 200, 180, 50, 'brown');
}


function draw() {
  background(220);
  image(img1, 0, 0, 1000, 650);

  console.log(pressed);

  if (pressed == 0) {
    menu();
  }
}