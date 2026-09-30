let img;

let button1v1;
let button2v1;
let button3v1;
let button4v1;

let button1v2;
let button2v2;
let button3v2;
let button4v2;

let button1v3;
let button2v3;
let button3v3;
let button4v3;

let button1v4;
let button2v4;
let button3v4;
let button4v4;

let button1v5;
let button2v5;
let button3v5;
let button4v5;

let button1v6;
let button2v6;
let button3v6;
let button4v6;

let button1v7;
let button2v7;
let button3v7;
let button4v7;

let button1v8;
let button2v8;
let button3v8;
let button4v8;

let button1v9;
let button2v9;
let button3v9;
let button4v9;

let button1v10;
let button2v10;
let button3v10;
let button4v10;

let score = 0;

let pressed = 0;

let vragen = [[vraag1], [vraag2], [vraag3], [vraag4], [vraag5], [vraag6], [vraag7], [vraag8], [vraag9], [vraag10]]

let buttons = [
  [button1v1, button2v1, button3v1, button4v1],
  [button1v2, button2v2, button3v2, button4v2],
  [button1v3, button2v3, button3v3, button4v3],
  [button1v4, button2v4, button3v4, button4v4],
  [button1v5, button2v5, button3v5, button4v5],
  [button1v6, button2v6, button3v6, button4v6],
  [button1v7, button2v7, button3v7, button4v7],
  [button1v8, button2v8, button3v8, button4v8],
  [button1v9, button2v9, button3v9, button4v9],
  [button1v10, button2v10, button3v10, button4v10],
]

function preload() {
  img = loadImage("https://cdn.corenexis.com/f/BPOwfydmyGU.png");
} 

function setup() {
  createCanvas(1000, 650);

  button1v1 = createButton('12')
  button1v1.position(190, 300);
  button1v1.size(300, 80);
  button1v1.style('font-size', '40px')
  button1v1.style('background-color', '#c8473e8f')

  button2v1 = createButton('8')
  button2v1.position(540, 300);
  button2v1.size(300, 80);
  button2v1.style('font-size', '40px')
  button2v1.style('background-color', '#c8473e8f')

  button3v1 = createButton('9')
  button3v1.position(190, 430);
  button3v1.size(300, 80);
  button3v1.style('font-size', '40px')
  button3v1.style('background-color', '#c8473e8f')

  button4v1 = createButton('10')
  button4v1.position(540, 430);
  button4v1.size(300, 80);
  button4v1.style('font-size', '40px')
  button4v1.style('background-color', '#c8473e8f')
}

function draw() {
  background(220);
  image(img, 0, 0, 1000, 650);

  vraag1();
  if (button1v1.mousePressed() && pressed == 0) {
    button1v1.mousePressed(antwoord1v1);
  }
  
  if (button2v1.mousePressed() && pressed == 0) {
    button2v1.mousePressed(antwoord2v1);
  }

    if (button3v1.mousePressed() && pressed == 0) {
    button3v1.mousePressed(antwoord3v1);
  }

    if (button4v1.mousePressed() && pressed == 0) {
    button4v1.mousePressed(antwoord4v1);
  }

  console.log(score)
}

function vraag1() {
  textFont('Times New Roman');
  textSize(40);
  fill(77, 54, 37);

  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgb(138, 110, 90)';

  text("How many reindeer does Santa Claus", 200, 170);
  text("traditionally have?", 350, 210);
}

function antwoord1v1() {
  button1v1.style('background-color', '#a60202d0')
  button3v1.style('background-color', '#3b8d07ca')
  
  pressed += 1;
}

function antwoord2v1() {
  button2v1.style('background-color', '#a60202d0')
  button3v1.style('background-color', '#3b8d07ca')
  
  pressed += 1;
}

function antwoord3v1() {
  button3v1.style('background-color', '#3b8d07ca')
  
  score += 1;
  pressed += 1;
}

function antwoord4v1() {
  button4v1.style('background-color', '#a60202d0')
  button3v1.style('background-color', '#3b8d07ca')
  
  pressed += 1;
}