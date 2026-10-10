//korilakkuma
let x = 100;

let folder = 0;

let saveKnop1 = 0;
let saveKnop2 = 0;

let call;
let font;

let msg;
let nam = 0;


function saveScore() {
  storeItem("Score", score);
}



function preload() {
  bg = loadImage("assets/bg.png")

  //char shi
  left = loadImage("assets/walkLeft.gif");
  right = loadImage("assets/walkRight.gif");
  idle = loadImage("assets/idle1.gif");
  bored = loadImage("assets/bored.gif");
  sleepy = loadImage("assets/sleepy.gif");
  hungry = loadImage("assets/hungry.gif");
  stinky = loadImage("assets/stinky.gif");

  //folder stuff
  ui1 = loadImage("assets/ui1.png");
  ui2 = loadImage("assets/ui2.png");
  ui3 = loadImage("assets/ui3.png");

  stats = loadImage("assets/stats.png");
  stats2 = loadImage("assets/stats2.png");

  //Save button stuff
  saveButUp1 = loadImage("assets/saveButUp1.png");
  saveButDown1 = loadImage("assets/saveButDown1.png");

  saveButUp2 = loadImage("assets/saveButUp2.png");
  saveButDown2 = loadImage("assets/saveButDown2.png");

  //namelabel
  label = loadImage("assets/label.png");
}



function setup() {
  createCanvas(1000, 650);
  let score = getItem("Score");
  print("De opgeslage score is:", score);

  call = createInput('Cutie');
  call.position(770, 130);
  call.size(190, 60);
  call.style('background-color', 'rgba(157, 113, 82)');
  call.style('font-size', '60px');
  call.style('font-family', 'Georgia');
  call.style('border-width', '0px');
  call.style('color', 'rgba(102, 67, 41)');
  call.style('outline', 'none');
  call.attribute('maxlength', '7');

  call.hide();
}



function folder1() {
  drawingContext.shadowBlur = 0;
  image(ui1, 590, 0, 650, 650);
  call.hide();

  if (saveKnop1 == 0) {
    image(saveButUp1, 615, 100, 360, 80);
  } else if (saveKnop1 == 1) {
    image(saveButDown1, 615, 100, 360, 80);
    
    if (!mouseIsPressed == true) {
      saveKnop1 = 0;
    }
  }

  if (saveKnop2 == 0) {
    image(saveButUp2, 615, 210, 360, 80);
  } else if (saveKnop2 == 1) {
    image(saveButDown2, 615, 210, 360, 80);
    
    if (!mouseIsPressed == true) {
      saveKnop2 = 0;
    }
  }
}

function folder2() {
  drawingContext.shadowBlur = 0;
  image(ui2, 590, 0, 650, 650);

  image(stats2, 615, 100, 360, 500);
  call.show();
}

function folder3() {
  drawingContext.shadowBlur = 0;
  image(ui3, 590, 0, 650, 650);
  call.hide();

  image(stats, 615, 100, 360, 500);
}



function mousePressed() {
  //folder
  if (mouseX >= 590 && mouseX <= 730 && mouseY >= 0 && mouseY <= 100) {
    folder = 1;
  } else if (mouseX >= 730 && mouseX <= 870 && mouseY >= 0 && mouseY <= 100) {
    folder = 2;
  } else if (mouseX >= 870 && mouseX <= 1000 && mouseY >= 0 && mouseY <= 100) {
    folder = 3;
  }

  //save buttons
  if (mouseX >= 615 && mouseX <= 975 && mouseY >= 130 && mouseY <= 210) {
    saveKnop1 = 1;
  }
  if (mouseX >= 615 && mouseX <= 975 && mouseY >= 240 && mouseY <= 320) {
    saveKnop2 = 1;
  }
}



function draw() {
  background(255);
  image(bg, 0, 0, 750, 750);
  msg = call.value();

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(140, 93, 66)'
  image(label, 10, 10, 170, 70);
  textSize(40);
  textFont('Georgia');
  fill(102, 67, 41);
  text(msg, 20, 60);


  //folder
  drawingContext.shadowOffsetX = -10;
  if (folder == 0 || folder == 1) {
    folder1();
  } else if (folder == 2) {
    folder2();
  } else if (folder == 3) {
    folder3();
  }

  //follow
  drawingContext.shadowBlur = 10;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(153, 125, 110)'
  
  if (x == mouseX - 100) {
    image(idle, x, 400, 200, 200);
  } else if (x > mouseX - 100 && x > 10) {
    x -= 1;
    image(left, x, 400, 200, 200);    
  } else if (x < mouseX - 100 && x < 380) {
    x += 1;
    image(right, x, 400, 200, 200); 
  } else if (x >= 380) {
    image(idle, x, 400, 200, 200);
  } else if (x <= 10) {
    image(idle, x, 400, 200, 200);    
  }
}