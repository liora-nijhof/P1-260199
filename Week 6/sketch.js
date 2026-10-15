//korilakkuma
let x = 100;

let folder = 0;

let saveKnop1 = 0;
let saveKnop2 = 0;
let exit = 0;
let exit2 = 0;
let left1 = 0;
let right1 = 0;

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
let gifpauseSleep = 15;
let gifpauseSoap = 15;
let gifpauseWash = 13;

let xsleep1 = 10;
let xsleep2 = 20;

let free = true;

let leftPress = false;

let exitPress = false;
let exitPress2 = false;

let dragged = false;
let by = 550;
let r = 550;

let bathPress = false;

let soapDragged = false;
let soapY = 100;
let soapX = 100;
let soapR = 150;

let showerDragged = false;
let showerY = 100;
let showerX = 400;
let showerR = 150;

let soaped = false;


function saveScore() {
  storeItem("Score", score);
}



function preload() {
  bg = loadImage("assets/bg.png");
  bg2 = loadImage("assets/room2.png");

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
  sleepAnim = loadImage("assets/sleep.gif");

  soap1 = loadImage("assets/washIdle.gif");
  soap2 = loadImage("assets/Soaping.gif");
  soap3 = loadImage("assets/soapyIdle.gif");
  soap4 = loadImage("assets/washOff.gif");

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
  exitUp2 = loadImage("assets/exitUp.png");
  exitDown2 = loadImage("assets/exitDown.png");

  //furniture
  bed = loadImage("assets/bed.png");
  bedAbove = loadImage("assets/bed2.png");
  blanket = loadImage("assets/blanket.png");
  bath = loadImage("assets/bath.png");

  soapbar = loadImage("assets/soapBar.png");
  shower = loadImage("assets/shower.gif");

  //left and right buttons
  leftUp = loadImage("assets/leftUp.png");
  leftDown = loadImage("assets/leftDown.png");
  rightUp = loadImage("assets/rightUp.png");
  rightDown = loadImage("assets/rightDown.png");
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
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(99, 65, 45)'
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
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(99, 65, 45)'
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
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(99, 65, 45)'
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

  if (by == 300 && energie != 297) {
    drawingContext.shadowBlur = 20;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowColor = 'rgb(153, 125, 110)'
    image(sleepAnim, 105, 70, 400, 400);

    energie += 0.25;
  } else {
    drawingContext.shadowBlur = 20;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowColor = 'rgb(153, 125, 110)'
    image(laying, 105, 70, 400, 400);
  }

  if (frameCount % 15 === 0 && gifpauseSleep > 0) {
    gifpauseSleep --;
  }

  if (gifpauseSleep == 0) {
    sleepAnim.pause();
  }

  drawingContext.shadowBlur = 0;
  image(blanket, 47, by, 510, 510);

  if (dragged == true) {
    by = mouseY

    if (by <= 300) {
      by = 300;
    } else if (by >= 580) {
      by = 580;
    }
  }

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
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



function wash() {
  xsleep1 = -1000;
  xsleep2 = -1000;

  bathPress == true;

  image(bath, 0, 0, 600, 750);

  //char
  drawingContext.shadowBlur = 20;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(153, 125, 110)'
  if (soapX >= 70 && soapX <= 570 && soapY >= 200 && soapY <= 500){
    image(soap2, 70, 200, 500, 500);
    soaped = true;

    if (frameCount % 15 === 0 && gifpauseSoap > 0) {
      gifpauseSoap --;
    }

    if (gifpauseSoap == 0) {
      soap2.pause();
    }
  } else if (showerX >= 70 && showerX <= 570 && showerY >= 200 && showerY <= 500){
    image(soap4, 70, 200, 500, 500);
    soaped = false;

    
    if (frameCount % 13 === 0 && gifpauseWash > 0) {
      gifpauseWash --;
    }

    if (gifpauseWash == 0) {
      soap4.pause();
    }
  } else if (soaped == true) {
    image(soap3, 70, 200, 500, 500);
    gifpauseWash = 13;
    soap4.play();
    soap4.reset();
  } else if (soaped == false){
    image(soap1, 70, 200, 500, 500);
    gifpauseSoap = 15;
    soap2.play();
    soap2.reset();
  }

  if (!(hygiene >= 297) && showerX >= 70 && showerX <= 570 && showerY >= 200 && showerY <= 500) {
    hygiene += 0.25;
  } else if (!(hygiene >= 297) && soapX >= 70 && soapX <= 570 && soapY >= 200 && soapY <= 500) {
    hygiene += 0.25;
  }
  

  drawingContext.shadowBlur = 0;
  image(soapbar, soapX, soapY, 150, 150);

  if (soapDragged == true) {
    soapX = mouseX - 75;
    soapY = mouseY - 75;
  }

  drawingContext.shadowBlur = 0;
  image(shower, showerX, showerY, 150, 150);

  if (showerDragged == true) {
    showerX = mouseX - 75;
    showerY = mouseY - 75;
  }


  //exit
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (exit2 == 0) {
    image(exitUp2, 10, 10, 70, 70);
    exitPress2 = false;
  } else if (exit2 == 1) {
    image(exitDown2, 10, 10, 70, 70);
    exitPress2 = true;
    
    if (!mouseIsPressed == true) {
      exit2 = 0;
    }
  }
}



function main() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;

  image(bg, 0, 0, 750, 750);

  image(bed, 400, 300, 190, 250);

  xsleep1 = 10;
  xsleep2 = 20;

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

  //left
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (left1 == 0) {
    image(leftUp, 10, 300, 50, 50);
  } else if (left1 == 1) {
    image(leftUp, 10, 300, 50, 50);
    leftPress = true;
    left1 = 0;
  }
}



function room2() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;

  image(bg2, 0, 0, 600, 650);

  xsleep1 = 10;
  xsleep2 = 20;

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

  //right
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (right1 == 0) {
    image(rightUp, 530, 300, 50, 50);
  } else if (right1 == 1) {
    image(rightUp, 530, 300, 50, 50);
    leftPress = false;
    right1 = 0;
  }
}



function follow() {
  drawingContext.shadowBlur = 10;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(118, 92, 78)'

  if (energie == 0 || happy == 0 || hunger == 0 || hygiene == 0) {
    if (frameCount % 5 === 0 && health > 0) {
      health -= 1;
    }
  }
  
  if (health != 0) {
    if (energie > 100 && happy > 100 && hunger > 100 && hygiene > 100) {
      if (x >= mouseX - 120 && x <= mouseX - 80) {
        image(idle, x, 400, 200, 200); //doesnt work
      } else if (x == mouseX - 100) {
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

  if (mouseX >= 400 && mouseX <= 590 && mouseY >= 300 && mouseY <= 550 && leftPress == false) {
    free = false;
  }

  if (mouseX >= 10 && mouseX <= 350 && mouseY >= 250 && mouseY <= 400 && leftPress == true) {
    bathPress = true;
  }

  if (mouseX >= 10 && mouseX <= 80 && mouseY >= 10 && mouseY <= 80) {
    exit = 1;
    free = true;
  }

  if (mouseX >= 10 && mouseX <= 80 && mouseY >= 10 && mouseY <= 80) {
    exit2 = 1;
    bathPress = false;
  }

  if (mouseX >= 10 && mouseX <= 60 && mouseY >= 300 && mouseY <= 350) {
    left1 = 1;
    free = true;
  }

  if (mouseX >= 530 && mouseX <= 580 && mouseY >= 300 && mouseY <= 350) {
    right1 = 1;
    free = true;
  }

  let d = dist(47, mouseY, 557, by);
  if (d < r) {
    dragged = true;
  }


  let showerD = dist(showerX, mouseY, mouseX, showerY);
  if (showerD < showerR) {
    showerDragged = true;
  }

  let soapD = dist(soapX, mouseY, mouseX, soapY);
  if (soapD < soapR && showerDragged == false) {
    soapDragged = true;
  }
}



function mouseReleased() {
  dragged = false;

  soapDragged = false;

  showerDragged = false;
}



function draw() {
  background(255);
  if (free == true && leftPress == false) {
    main();
    follow();
  } else if (free == false) {
    sleep();
  } else if (leftPress == true && bathPress == false) {
    room2();
    follow();
  } else if (bathPress == true && leftPress == true) {
    wash();
  }

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
    happy -= 0.5;
  }
  if (frameCount % 60 === 0 && hunger > 0) {
    hunger -= 1.1;
  }
  if (frameCount % 60 === 0 && hygiene > 0) {
    hygiene -= 0.8;
  }

  if (energie == 297) {
    energie = 297;
  }
}

