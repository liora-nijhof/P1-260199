//korilakkuma
let x = 100;

let folder = 0;

let saveKnop1 = 0;
let saveKnop2 = 0;
let exit = 0;

let call;
let font;

let msg;
let nam = 0;

let health = 297;
let energie = 297;
let happy = 297;
let hunger = 297;
let hygiene = 297;

let gifpause = 25;

let xsleep1 = 10;
let xsleep2 = 20;

let free = true;

let exitPress = false;



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
  dead = loadImage("assets/death.gif");
  laying = loadImage("assets/laying.gif");

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

  //EXITBUTTON
  exitUp = loadImage("assets/exitUp.png");
  exitDown = loadImage("assets/exitDown.png");

  //furniture
  bed = loadImage("assets/bed.png");
  bedAbove = loadImage("assets/bed2.png");
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
  drawingContext.shadowOffsetX = -10;
  image(ui2, 590, 0, 650, 650);

  image(stats2, 615, 100, 360, 500);
  call.show();

  //stats1
  drawingContext.shadowOffsetX = 0;
  strokeWeight(0);
  fill(183, 134, 99);

  rect(646, 395, health, 50);

  rect(646, 515, energie, 50);
}


function folder3() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = -10;
  image(ui3, 590, 0, 650, 650);
  call.hide();

  image(stats, 615, 100, 360, 500);

  //stats2
  drawingContext.shadowOffsetX = 0;
  strokeWeight(0);
  fill(183, 134, 99);

  rect(646, 275, happy, 50);

  rect(646, 395, hunger, 50);  

  rect(646, 515, hygiene, 50);  
}



function sleep() {
  xsleep1 = -1000;
  xsleep2 = -1000;

  image(bedAbove, 0, 0, 600, 750);

  drawingContext.shadowBlur = 20;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(153, 125, 110)'
  image(laying, 105, 70, 400, 400);

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(140, 93, 66)'
  if (exit == 0) {
    image(exitUp, 10, 10, 70, 70);
    exitPress = false;
  } else if (exit == 1) {
    image(exitDown, 10, 10, 70, 70);
    exitPress = true;
    
    if (!mouseIsPressed == true) {
      exit = 0;
    }
  }
}



function main() {
    image(bg, 0, 0, 750, 750);

    drawingContext.shadowColor = 'rgb(82, 50, 32)'
    image(bed, 400, 300, 190, 250);
}



function follow() {
  drawingContext.shadowBlur = 10;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(153, 125, 110)'

  if (energie == 0 || happy == 0 || hunger == 0 || hygiene == 0) {
    if (frameCount % 5 === 0 && health > 0) {
      health -= 1;
    }
  }
  
  if (health != 0) {
    if (energie > 100 && happy > 100 && hunger > 100 && hygiene > 100) {
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
     } else if (x == mouseX) {
        image(idle, x, 400, 200, 200); //doesnt work
     }
   } else if (energie <= 100) {
     image(sleepy, x, 400, 200, 200);
   } else if (happy <= 100) {
     image(bored, x, 400, 200, 200);
   } else if (hunger <= 100) {
     image(hungry, x, 400, 200, 200);
   } else if (hygiene <= 100) {
     image(stinky, x, 400, 200, 200);
   }
  }

  if (health == 0) {
    image(dead, x, 400, 200, 200);
      
    if (frameCount % 15 === 0 && gifpause > 0) {
      gifpause --;
    }
  }

  if (gifpause == 0) {
    dead.pause();
  }
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

  if (mouseX >= 400 && mouseX <= 590 && mouseY >= 300 && mouseY <= 550) {
    sleep();
    free = false;
  }

  if (mouseX >= 10 && mouseX <= 80 && mouseY >= 10 && mouseY <= 80) {
    exit = 1;
    free = true;
  }
}



function draw() {
  background(255);
  if (free == true) {
    main();
    follow();
  } else if (free == false) {
    sleep();
  }

  msg = call.value();

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(140, 93, 66)'
  image(label, xsleep1, 10, 170, 70);
  textSize(40);
  textFont('Georgia');
  fill(102, 67, 41);
  text(msg, xsleep2, 60);


  //folder
  drawingContext.shadowOffsetX = -10;
  if (folder == 0 || folder == 1) {
    folder1();
  } else if (folder == 2) {
    folder2();
  } else if (folder == 3) {
    folder3();
  }

  //stats
  if (frameCount % 60 === 0 && energie > 0) {
    energie--;
  }
  if (frameCount % 60 === 0 && happy > 0) {
    happy--;
  }
  if (frameCount % 60 === 0 && hunger > 0) {
    hunger--;
  }
  if (frameCount % 60 === 0 && hygiene > 0) {
    hygiene--;
  }
}


// let bx = 200;
// let by = 200;
// let r = 25;       // Radius of the circle
// let isBeingDragged = false;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);

//   // Update position if the shape is being dragged
//   if (isBeingDragged) {
//     bx = mouseX;
//     by = mouseY;
//   }

//   // Draw the circle
//   fill(isBeingDragged ? color(255, 100, 100) : color(100, 150, 255));
//   noStroke();
//   ellipse(bx, by, r * 2);
// }

// function mousePressed() {
//   // Check if the mouse is inside the circle
//   let d = dist(mouseX, mouseY, bx, by);
//   if (d < r) {
//     isBeingDragged = true;
//   }
// }

// function mouseReleased() {
//   // Stop dragging when the mouse button is let go
//   isBeingDragged = false;
// }