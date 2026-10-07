let buttonMenu;

let vragen = [["What is the traditional color of Santa Claus's suit?"], ["Which plant is traditionally hung as decoration underneath doorway's at Christmas?"], ["Which country is credited with starting the tradition of decorating Christmas trees?"], ["What is the name of Santa Claus's red-nosed reindeer?"], ["How many reindeer does Santa Claus traditionally have?"], ["What do children traditionally leave out for Santa Claus on Christmas Eve?"], ["On what date is Christmas Day celebrated?"], ["What does the word 'Yule' refer to?"], ["In which country did the tradition of Christmas stockings originate?"], ["What is the name of the three spirits in Charles Dickens' 'A Christmas Carol'?"]]

let pressed = 0;

let order;
let dif;

let buttonA;
let buttonB;
let buttonC;
let buttonD;

let answer = [
  ["Red", "Green", "Purple", "Yellow"],
  ["Mistletoe", "Ivy", "Holly", "Poinsettia"],
  ["Germany", "France", "England", "United States"],
  ["Rudolph", "Prancer", "Dasher", "Comet"],
  ["9", "12", "10", "8"],
  ["Milk and cookies", "Eggnog and pie", "Hot cocoa and cake", "Juice and crackers"],
  ["December 25", "December 24", "December 26", "January 6"],
  ["Old Germanic winter festival", "A Scandinavian Christmas elf", "The name of Christmas Eve", "A type of Christmas bread"],
  ["Netherlands", "Germany", "France", "United States"],
  ["Past, Present, and Yet to Come", "Birth, Life, and Death", "Past, Future, and Present", "Joy, Hope, and Love"]
]


function bad() {
  
}


function menu() {
  stroke(0);
  strokeWeight(2);
  fill('rgba(160, 6, 6, 0.81)');

  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(119, 12, 12, 0.5)';

  textSize(90);
  textFont('Times New Roman');
  text("Christmas Quiz!", 210, 240);
}


function gameRonde() {
  stroke(0);
  strokeWeight(1);
  fill('rgba(160, 6, 6, 0.81)');
  textSize(40);
  textFont('Times New Roman');

  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(160, 6, 6, 0.5)';

  text(vragen[order], 200, 150, 600, 150);

  buttonA.show();
  buttonB.show();
  buttonC.show();
  buttonD.show();

  buttonA.mousePressed(bad);
  buttonB.mousePressed(bad);
  buttonC.mousePressed(bad);
  buttonD.mousePressed(bad);
}


function startQuizPressed() {
  buttonMenu.hide();
  pressed += 1;
}


function press() {
  pressed += 1;
}


function preload() {
  img1 = loadImage("https://cdn.corenexis.com/f/BPOwfydmyGU.png");
  img2 = loadImage("https://cdn.corenexis.com/f/200RZnlJDnt.png")
} 


function setup() {
  createCanvas(1000, 650);

  order = int(random(0, 9));
  
  buttonMenu = createButton('Start');
  buttonMenu.position(420, 400);
  buttonMenu.size(200, 60);
  buttonMenu.style('font-size', '60');
  buttonMenu.style('background-color', 'rgba(224, 174, 82, 0.52)');
  
  buttonMenu.mousePressed(startQuizPressed);

  buttonA = createButton(answer[order][0])
  buttonA.position(200, 350);
  buttonA.size(280, 70);
  buttonA.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonB = createButton(answer[order][1])
  buttonB.position(540, 350);
  buttonB.size(280, 70);
  buttonB.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonC = createButton(answer[order][2])
  buttonC.position(200, 450);
  buttonC.size(280, 70);
  buttonC.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonD = createButton(answer[order][3])
  buttonD.position(540, 450);
  buttonD.size(280, 70);
  buttonD.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonA.hide();
  buttonB.hide();
  buttonC.hide();
  buttonD.hide();
}


function draw() {
  background(220);

  if (pressed == 0) {
    image(img1, 0, 0, 1000, 650);
    menu();
  } else if (pressed >= 1) {
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  }
}