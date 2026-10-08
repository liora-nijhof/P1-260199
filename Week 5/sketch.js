let buttonMenu;

let vragen = [["What is the traditional color of Santa Claus's suit?"], ["Which plant is traditionally hung as decoration underneath doorway's at Christmas?"], ["Which country is credited with starting the tradition of decorating Christmas trees?"], ["What is the name of Santa Claus's red-nosed reindeer?"], ["How many reindeer does Santa Claus traditionally have?"], ["What do children traditionally leave out for Santa Claus on Christmas Eve?"], ["On what date is Christmas Day celebrated?"], ["What does the word 'Yule' refer to?"], ["In which country did the tradition of Christmas stockings originate?"], ["What is the name of the three spirits in Charles Dickens' 'A Christmas Carol'?"]]

let pressed = 0;

let order;

let buttonA;
let buttonB;
let buttonC;
let buttonD;

let answer = [
  ["Red", "Red", "Green", "Purple", "Yellow"],
  ["Mistletoe", "Ivy", "Mistletoe", "Holly", "Poinsettia"],
  ["Germany", "France", "England", "Germany", "United States"],
  ["Rudolph", "Prancer", "Rudolph", "Dasher", "Comet"],
  ["9", "9", "12", "10", "8"],
  ["Milk and cookies", "Eggnog and pie", "Milk and cookies", "Hot cocoa and cake", "Juice and crackers"],
  ["December 25", "December 24", "December 26", "January 6", "December 25"],
  ["Old Germanic winter festival", "A Scandinavian Christmas elf", "The name of Christmas Eve", "Old Germanic winter festival", "A type of Christmas bread"],
  ["Netherlands", "Netherlands", "Germany", "France", "United States"],
  ["Past, Present, and Yet to Come", "Birth, Life, and Death", "Past, Present, and Yet to Come", "Past, Future, and Present", "Joy, Hope, and Love"]
]

let score = 0;

let kirbyX = -180;


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

function check1() {
  if (buttonA.html() == answer[order][0]) {
    buttonA.style('background-color: green;');
    score += 1;
  } else if (buttonA.html() != answer[order][0]) {
    buttonA.style('background-color: brown;');
  }
  if (buttonB.html() == answer[order][0]) {
    buttonB.style('background-color: green;');
  }
  if (buttonC.html() == answer[order][0]) {
    buttonC.style('background-color: green;');
  }
  if (buttonD.html() == answer[order][0]) {
    buttonD.style('background-color: green;');
  }

  nextButton.show();
  nextButton.mousePressed(next);
    
  answer.splice(order, 1);
  vragen.splice(order, 1);
}

function check2() {
  if (buttonB.html() == answer[order][0]) {
    buttonB.style('background-color: green;');
    score += 1;
  } else if (buttonB.html() != answer[order][0]) {
    buttonB.style('background-color: brown;');
  }

  if (buttonA.html() == answer[order][0]) {
    buttonA.style('background-color: green;');
  }
  if (buttonC.html() == answer[order][0]) {
    buttonC.style('background-color: green;');
  }
  if (buttonD.html() == answer[order][0]) {
    buttonD.style('background-color: green;');
  }

  nextButton.show();
  nextButton.mousePressed(next);
    
  answer.splice(order, 1);
  vragen.splice(order, 1);
}

function check3() {
  if (buttonC.html() == answer[order][0]) {
    buttonC.style('background-color: green;');
    score += 1;
  } else if (buttonC.html() != answer[order][0]) {
    buttonC.style('background-color: brown;');
  }

  if (buttonB.html() == answer[order][0]) {
    buttonB.style('background-color: green;');
  }
  if (buttonA.html() == answer[order][0]) {
    buttonA.style('background-color: green;');
  }
  if (buttonD.html() == answer[order][0]) {
    buttonD.style('background-color: green;');
  }

  nextButton.show();
  nextButton.mousePressed(next);
    
  answer.splice(order, 1);
  vragen.splice(order, 1);
}

function check4() {
  if (buttonD.html() == answer[order][0]) {
    buttonD.style('background-color: green;');
    score += 1;
  } else if (buttonD.html() != answer[order][0]) {
    buttonD.style('background-color: brown;');
  }

  if (buttonB.html() == answer[order][0]) {
    buttonB.style('background-color: green;');
  }
  if (buttonC.html() == answer[order][0]) {
    buttonC.style('background-color: green;');
  }
  if (buttonA.html() == answer[order][0]) {
    buttonA.style('background-color: green;');
  }

  nextButton.show();
  nextButton.mousePressed(next);
    
  answer.splice(order, 1);
  vragen.splice(order, 1);
}

function gameRonde() {
  order = int(random(0, vragen.length - 1));

  stroke(0);
  strokeWeight(1);
  fill('rgba(160, 6, 6, 0.81)');
  textSize(40);
  textFont('Times New Roman');

  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(160, 6, 6, 0.5)';

  text(vragen[order], 200, 150, 600, 150);

  buttonA.style('background-color: rgba(224, 174, 82, 0.52);');
  buttonB.style('background-color: rgba(224, 174, 82, 0.52);');
  buttonC.style('background-color: rgba(224, 174, 82, 0.52);');
  buttonD.style('background-color: rgba(224, 174, 82, 0.52);');

  buttonA.html(answer[order][1]);
  buttonB.html(answer[order][2]);
  buttonC.html(answer[order][3]);
  buttonD.html(answer[order][4]);

  buttonA.show();
  buttonB.show();
  buttonC.show();
  buttonD.show();

  buttonA.mousePressed(check1);
  buttonB.mousePressed(check2);
  buttonC.mousePressed(check3);
  buttonD.mousePressed(check4);
}

function end() {
  stroke(0);
  strokeWeight(2);
  fill('rgba(160, 6, 6, 0.81)');

  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(119, 12, 12, 0.5)';

  textSize(100);
  textAlign(CENTER);
  textFont('Times New Roman');
  text("End of quiz!", 500, 230);

  textSize(60);
  text("Your score:", 500, 360);

  textSize(50);
  if (score >= 0 && score <= 4) {
    fill('rgba(100, 6, 6, 0.81)');
    text(score + "/10", 500, 450);
    image(lol, 630, 380, 160, 160);
  } else if (score >= 5 && score <= 6) {
    fill('rgba(180, 66, 14, 0.81)');
    text(score + "/10", 500, 450);
  } else if (score >= 7 && score <= 10) {
    fill('rgba(53, 158, 18, 0.81)');
    text(score + "/10", 500, 450);
  }
}

function startQuizPressed() {
  buttonMenu.hide();
  pressed += 1;
}

function next() {
  nextButton.hide();
  pressed+= 1;
}


function press() {
  pressed += 1;
}


function preload() {
  img1 = loadImage("https://cdn.corenexis.com/f/BPOwfydmyGU.png");
  img2 = loadImage("https://cdn.corenexis.com/f/200RZnlJDnt.png");
  lol = loadImage("https://cdn.corenexis.com/f/YvYmpiBNf2e.png");

  kirby = loadImage("Assets/Y3il.gif");
} 


function setup() {
  createCanvas(1000, 650);
  
  buttonMenu = createButton('Start');
  buttonMenu.position(420, 400);
  buttonMenu.size(200, 60);
  buttonMenu.style('font-size', '60');
  buttonMenu.style('background-color', 'rgba(224, 174, 82, 0.52)');
  
  buttonMenu.mousePressed(startQuizPressed);

  buttonA = createButton("A") 
  buttonA.position(200, 350);
  buttonA.size(280, 70);
  buttonA.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonB = createButton("B")
  buttonB.position(540, 350);
  buttonB.size(280, 70);
  buttonB.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonC = createButton("C")
  buttonC.position(200, 450);
  buttonC.size(280, 70);
  buttonC.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonD = createButton("D")
  buttonD.position(540, 450);
  buttonD.size(280, 70);
  buttonD.style('background-color', 'rgba(224, 174, 82, 0.52)');

  buttonA.hide();
  buttonB.hide();
  buttonC.hide();
  buttonD.hide();

  nextButton = createButton("Next")
  nextButton.position(720, 300);
  nextButton.size(100, 30);
  nextButton.style('background-color', 'rgba(240, 202, 132, 0.52)')

  nextButton.hide();
}


function draw() {
  if (pressed == 0) {
    image(img1, 0, 0, 1000, 650);
    menu();

    image(kirby, kirbyX, 450, 200, 200);
    kirbyX += 1;

    if (kirbyX > 1000) {
      kirbyX = -600;
    }
  } else if (pressed == 1) {
    pressed = 2;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 3) {
    pressed = 4;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 5) {
    pressed = 6;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 7) {
    pressed = 8;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 9) {
    pressed = 10;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 11) {
    pressed = 12;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 13) {
    pressed = 14;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 15) {
    pressed = 16;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 17) {
    pressed = 18;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 19) {
    pressed = 20  ;
    image(img2, 0, 0, 1000, 650);
    gameRonde();
  } else if (pressed == 21) {
    image(img1, 0, 0, 1000, 650);
    end();

    buttonA.hide();
    buttonB.hide();
    buttonC.hide();
    buttonD.hide();
  }
}