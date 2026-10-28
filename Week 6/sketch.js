//korilakkuma


//hier heb ik alle variabelen, ik weet dat het nog al een rotzooi is maar voor mij
//staat alles gesorteerd met de verschillende functies omdat ik me code ken
let x = 100;

let deadFR = false;

let folder = 0;

let saveKnop1 = 0;
let saveKnop2 = 0;

let exit = 0;
let exit2 = 0;
let exit3 = 0;
let exit4 = 0;

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
let gifpauseEat = 9;

let xsleep1 = 10;
let xsleep2 = 20;

let free = true;

let leftPress = false;

let exitPress = false;
let exitPress2 = false;
let exitPress3 = false;
let exitPress4 = false;

let dragged = false;
let by = 550;
let r = 550;

let bathPress = false;

let gamePress = false;

let fridgePress = false;

let soapDragged = false;
let soapY = 100;
let soapX = 100;
let soapR = 150;

let showerDragged = false;
let showerY = 100;
let showerX = 400;
let showerR = 150;

let soaped = false;

let ijskoffie2;
let bun2;
let giri2;
let pancakes2;
let jam2;

let fed = false;

let minigames = 0;
let menuOption = 0;
let ent = false;
let settingOption = 0;
let ent2 = false;
let option = 0;


//dit zijn al mn images en gifs
let assets = {};
let assetFiles = {
  bg: "assets/bg.png",
  bg2: "assets/room2.png",
  left: "assets/walkLeft.gif",
  right: "assets/walkRight.gif",
  idle: "assets/idle1.gif",
  bored: "assets/bored.gif",
  sleepy: "assets/sleepy.gif",
  hungry: "assets/hungry.gif",
  stinky: "assets/stinky.gif",
  dead: "assets/death.gif",
  laying: "assets/laying.gif",
  sleepAnim: "assets/sleep.gif",
  soap1: "assets/washIdle.gif",
  soap2: "assets/Soaping.gif",
  soap3: "assets/soapyIdle.gif",
  soap4: "assets/washOff.gif",
  eating: "assets/eating.gif",
  ui1: "assets/ui1.png",
  ui2: "assets/ui2.png",
  ui3: "assets/ui3.png",
  stats: "assets/stats.png",
  stats2: "assets/stats2.png",
  saveButUp1: "assets/saveButUp1.png",
  saveButDown1: "assets/saveButDown1.png",
  saveButUp2: "assets/saveButUp2.png",
  saveButDown2: "assets/saveButDown2.png",
  label: "assets/label.png",
  exitUp: "assets/exitUp.png",
  exitDown: "assets/exitDown.png",
  bed: "assets/bed.png",
  bedAbove: "assets/bed2.png",
  blanket: "assets/blanket.png",
  bath: "assets/bath.png",
  soapbar: "assets/soapBar.png",
  shower: "assets/shower.gif",
  fridge: "assets/fridge.png",
  tv: "assets/pc.png",
  bgMini1: "assets/game1bg.png",
  minimenu: "assets/menuGif.gif",
  menuArrow: "assets/menuArrow.png",
  menuMenu: "assets/menuMenu.png",
  settingMenu: "assets/settingMenu.png",
  setting2 : "assets/setting2.png",
  setting3 : "assets/setting2.png",
  setting4 : "assets/setting2.png",
  leftUp: "assets/leftUp.png",
  leftDown: "assets/leftDown.png",
  rightUp: "assets/rightUp.png",
  rightDown: "assets/rightDown.png",
  ijskoffie: "assets/ijskoffie.png",
  bun: "assets/chocobun.png",
  jam: "assets/jam.png",
  giri: "assets/shrimpgiri.png",
  pancakes: "assets/pancakes.png"
};

let menuMove;



//dit is voor mn ding dat ervoor zorgt dat alles blijft draaien offline
function saveScore() {
  storeItem("Score", score);
}



//ik had eerst alles los staan maar ik dacht dat 1 loop toch wel wat makkelijker zal zijn
//ook om te lezen zonder een hersenschudding te krijgen
function preload() {
  for (let key in assetFiles) {
    assets[key] = loadImage(assetFiles[key]);
  }

  menuMove = loadSound("assets/menuMove.mp3");
  gameMusic = loadSound("assets/gameMusic.mp3");
}



function setup() {
  createCanvas(1000, 650);
  
  //dit is gwn een test dat ik t niet vergeet
  let score = getItem("Score");
  print("De opgeslage score is:", score);


  //dit zijn alle settings voor de naam tag links boven in
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

  //dit zijn de foods die ik heb aangemaakt van de class food
  ijskoffie2 = new food(assets.ijskoffie, 115, 28, 100, 50, false, 115, 28);
  bun2 = new food(assets.bun, 230, 30, 100, 50, false, 230, 30);
  giri2 = new food(assets.giri, 115, 130, 100, 50, false, 115, 130);
  jam2 = new food(assets.jam, 230, 140, 100, 50, false, 230, 140);
  pancakes2 = new food(assets.pancakes, 115, 236, 100, 50, false, 115, 236);
}



function folder1() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(99, 65, 45)'
  call.hide();

  image(assets.ui1, 590, 0, 650, 650);

  //dit is er dat je de knop naar beneden ziet gaan als je t
  //klikt of ingedrukt houd
  if (saveKnop1 == 0) {
    image(assets.saveButUp1, 615, 100, 360, 80);
  } else if (saveKnop1 == 1) {
    image(assets.saveButDown1, 615, 100, 360, 80);
    
    if (!mouseIsPressed == true) {
      saveKnop1 = 0;
    }
  }

  if (saveKnop2 == 0) {
    image(assets.saveButUp2, 615, 210, 360, 80);
  } else if (saveKnop2 == 1) {
    image(assets.saveButDown2, 615, 210, 360, 80);
    
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
  image(assets.ui2, 590, 0, 650, 650);

  image(assets.stats2, 615, 100, 360, 500);
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
  image(assets.ui3, 590, 0, 650, 650);
  call.hide();

  image(assets.stats, 615, 100, 360, 500);

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

  image(assets.bedAbove, 0, 0, 600, 750);


  //heel lange reeks van welke animatie hij moet doen wanneer de deken waar is
  //getrokken en afhankelijk van hoeveel energie hij heeft
  if (by == 300 && energie != 297) {
    drawingContext.shadowBlur = 20;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowColor = 'rgb(153, 125, 110)'
    image(assets.sleepAnim, 105, 70, 400, 400);

    energie += 0.25;
  } else {
    drawingContext.shadowBlur = 20;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowColor = 'rgb(153, 125, 110)'
    image(assets.laying, 105, 70, 400, 400);
  }

  if (frameCount % 15 === 0 && gifpauseSleep > 0 && by == 300) {
    gifpauseSleep --;
  }

  if (gifpauseSleep == 0) {
    assets.sleepAnim.pause();
  }


  //dit zijn de codes van het deken zelf
  drawingContext.shadowBlur = 0;
  image(assets.blanket, 47, by, 510, 510);

  if (dragged == true) {
    by = mouseY

    if (by <= 300) {
      by = 300;
    } else if (by >= 580) {
      by = 580;
    }
  }


  //exit knop
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (exit == 0) {
    image(assets.exitUp, 10, 10, 70, 70);
    exitPress = false;
  } else if (exit == 1) {
    image(assets.exitDown, 10, 10, 70, 70);
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

  image(assets.bath, 0, 0, 600, 750);

  
  //dit is weer welke animatie hij bij welke staat moet doen
  drawingContext.shadowBlur = 20;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(153, 125, 110)'
  if (soapX >= 70 && soapX <= 570 && soapY >= 200 && soapY <= 500){
    image(assets.soap2, 70, 200, 500, 500);
    soaped = true;

    if (frameCount % 15 === 0 && gifpauseSoap > 0) {
      gifpauseSoap --;
    }

    if (gifpauseSoap == 0) {
      assets.soap2.pause();
    }
  } else if (showerX >= 70 && showerX <= 570 && showerY >= 200 && showerY <= 500){
    image(assets.soap4, 70, 200, 500, 500);
    soaped = false;

    
    if (frameCount % 13 === 0 && gifpauseWash > 0) {
      gifpauseWash --;
    }

    if (gifpauseWash == 0) {
      assets.soap4.pause();
    }
  } else if (soaped == true) {
    image(assets.soap3, 70, 200, 500, 500);
    gifpauseWash = 13;
    assets.soap4.play();
    assets.soap4.reset();
  } else if (soaped == false){
    image(assets.soap1, 70, 200, 500, 500);
    gifpauseSoap = 15;
    assets.soap2.play();
    assets.soap2.reset();
  }


  //of er hygiene bij komt of niet
  if (!(hygiene >= 297) && showerX >= 70 && showerX <= 570 && showerY >= 200 && showerY <= 500) {
    hygiene += 0.25;
  } else if (!(hygiene >= 297) && soapX >= 70 && soapX <= 570 && soapY >= 200 && soapY <= 500) {
    hygiene += 0.25;
  }
  

  //dat je de douche en zeep kan slepen
  drawingContext.shadowBlur = 0;
  image(assets.soapbar, soapX, soapY, 150, 150);

  if (soapDragged == true) {
    soapX = mouseX - 75;
    soapY = mouseY - 75;
  }

  drawingContext.shadowBlur = 0;
  image(assets.shower, showerX, showerY, 150, 150);

  if (showerDragged == true) {
    showerX = mouseX - 75;
    showerY = mouseY - 75;
  }


  //exit knop part 2
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (exit2 == 0) {
    image(assets.exitUp, 10, 10, 70, 70);
    exitPress2 = false;
  } else if (exit2 == 1) {
    image(assets.exitDown, 10, 10, 70, 70);
    exitPress2 = true;
    
    if (!mouseIsPressed == true) {
      exit2 = 0;
    }
  }
}



class food {
  //een constructor is die dingen die je invoert wanneer je een object van de class
  //maakt, zegmaar settings die je kan invoeren zijn binnen de haakjes van dat ding
  //en anders kan je ook gwn standaard settings erin doen maar die heb ik niet nodig
  constructor(foodImg, foodX, foodY, foodSize, foodR, foodDragged, startFoodX, startFoodY) {
    this.foodX = foodX;
    this.foodY = foodY;
    this.foodR = foodR;
    this.startFoodX = startFoodX;
    this.startFoodY = startFoodY;
    this.foodDragged = foodDragged;
    this.foodImg = foodImg;
    this.foodSize = foodSize;
  }

  draw() {
    image(this.foodImg, this.foodX, this.foodY, this.foodSize, this.foodSize);

    if (this.foodDragged == true) {
      this.foodX = mouseX - 50;
      this.foodY = mouseY - 50;
    } else if (this.foodDragged == false) {

      this.foodX = this.startFoodX;
      this.foodY = this.startFoodY;
    }
  }

  mousePressed() {
    let d = dist(mouseX - 50, mouseY - 50, this.foodX, this.foodY);
    if (d < this.foodR) {
      this.foodDragged = true;
    } else {
      this.foodDragged = false;
    }
  }

  mouseReleased() {
    if (mouseX >= 200 && mouseX <= 700 && mouseY >= 250 && mouseY <= 750 && this.foodDragged == true) {
      fed = true;
      this.foodDragged = false;
    }
  }
}



function eat() {
  xsleep1 = -1000;
  xsleep2 = -1000;

  fridgePress = true;

  //background/setting
  image(assets.fridge, -50, 0, 650, 750);


  //weer welke anim
  drawingContext.shadowBlur = 20;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(153, 125, 110)'

  if (frameCount % 15 === 0 && gifpauseEat > 0 && fed == true) {
    gifpauseEat --;
  }

  if (gifpauseEat == 1) {
    assets.eating.pause();
  }

  if (gifpauseEat == 0) {
    fed = false;

    gifpauseEat = 9;
  }

  if (fed == false) {
    image(assets.idle, 200, 250, 500, 500);
    assets.eating.reset();
    assets.eating.play();
  } else if (fed == true) {
    image(assets.eating, 200, 250, 500, 500);

    if (hunger <= 297) {
      hunger += 0.5;
    }
  } 


  //food voor de background
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;

  image(assets.ijskoffie, 115, 28, 100, 100);
  image(assets.bun, 230, 30, 100, 100);
  image(assets.giri, 115, 130, 100, 100);
  image(assets.jam, 230, 140, 100, 100);
  image(assets.pancakes, 115, 236, 100, 100);

  ijskoffie2.draw();
  bun2.draw();
  giri2.draw();
  jam2.draw();
  pancakes2.draw();

  

  //exit part 3
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (exit3 == 0) {
    image(assets.exitUp, 10, 10, 70, 70);
    exitPress3 = false;
  } else if (exit3 == 1) {
    image(assets.exitDown, 10, 10, 70, 70);
    exitPress3 = true;
    
    if (!mouseIsPressed == true) {
      exit3 = 0;
    }
  }
}



function main() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;

  image(assets.bg, 0, 0, 750, 750);

  image(assets.bed, 400, 300, 190, 250);

  xsleep1 = 10;
  xsleep2 = 20;

  //laat de text de ingegvoerde naam showen
  msg = call.value();

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(140, 93, 66)'
  image(assets.label, xsleep1, 10, 170, 70);
  textSize(40);
  textFont('Georgia');
  fill(102, 67, 41);
  text(msg, xsleep2, 60);


  //knop om naar links te gaan
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (left1 == 0) {
    image(assets.leftUp, 10, 300, 50, 50);
  } else if (left1 == 1) {
    image(assets.leftUp, 10, 300, 50, 50);
    leftPress = true;
    left1 = 0;
  }
}



function room2() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;

  image(assets.bg2, 0, 0, 600, 650);

  xsleep1 = 10;
  xsleep2 = 20;

  msg = call.value();

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowColor = 'rgb(140, 93, 66)'
  image(assets.label, xsleep1, 10, 170, 70);
  textSize(40);
  textFont('Georgia');
  fill(102, 67, 41);
  text(msg, xsleep2, 60);


  //knop om naar rechts te gaan
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (right1 == 0) {
    image(assets.rightUp, 530, 300, 50, 50);
  } else if (right1 == 1) {
    image(assets.rightUp, 530, 300, 50, 50);
    leftPress = false;
    right1 = 0;
  }
}



function follow() {
  drawingContext.shadowBlur = 10;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowOffsetX = -10;
  drawingContext.shadowColor = 'rgb(118, 92, 78)'


  //dit is voor de health die naar beneden moet gaan maar ik had eerst == 0 dat 
  //werkt niet omdat hij bijna nooit precies 0 word dus heb ik <= 1 gedaan
  if (energie <= 1 || happy <= 1 || hunger <= 1 || hygiene <= 1) {
    if (frameCount % 5 === 0 && health > 0) {
      health -= 1;
    }
  }
  

  //dit zijn alle loop animaties dat hij de goede doet en ook wat speling heeft bij de distance van de muis
  if (health != 0) {
    if (energie > 100 && happy > 100 && hunger > 100 && hygiene > 100) {
      if (x >= mouseX - 120 && x <= mouseX - 80) {
        image(assets.idle, x, 400, 200, 200); //doesnt work
      } else if (x == mouseX - 100) {
        image(assets.idle, x, 400, 200, 200);
      } else if (x > mouseX - 100 && x > 10) {
       x -= 1;
        image(assets.left, x, 400, 200, 200);
      } else if (x < mouseX - 100 && x < 380) {
        x += 1;
        image(assets.right, x, 400, 200, 200); 
      } else if (x >= 380) {
        image(assets.idle, x, 400, 200, 200);
     } else if (x <= 10) {
        image(assets.idle, x, 400, 200, 200);
     }
   } else if (energie <= 100) {
     image(assets.sleepy, x, 400, 200, 200);
   } else if (happy <= 100) {
     image(assets.bored, x, 400, 200, 200);
   } else if (hunger <= 100) {
     image(assets.hungry, x, 400, 200, 200);
   } else if (hygiene <= 100) {
     image(assets.stinky, x, 400, 200, 200);
   }
  }

  if (health == 0) {
    image(assets.dead, x, 400, 200, 200);
      
    if (frameCount % 15 === 0 && gifpause > 0) {
      gifpause --;
    }
  }

  //ik doe gifpause omdat hij anders blijft dood gaan, 
  //je kan het ook doen met de laatste frame apart te downloaden maar
  //daar had ik niet eerder aan gedacht en was te lui om het te veranderen
  //en .pause werkt prima (wel kut dat het met een timer moet omdat ik alleen
  //de laatste frame wil pauzeren)
  if (gifpause == 0) {
    assets.dead.pause();
  }
}



function games() {
  xsleep1 = -1000;
  xsleep2 = -1000;

  gamePress = true;

  image(assets.tv, 0, 0, 600, 700);
  
  
  //exit knop part 40653904650
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;
  if (exit4 == 0) {
    image(assets.exitUp, 10, 10, 70, 70);
    exitPress4 = false;
  } else if (exit4 == 1) {
    image(assets.exitDown, 10, 10, 70, 70);
    exitPress4 = true;
    
    if (!mouseIsPressed == true) {
      exit4 = 0;
    }
  }
}



function miniMenu() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;

  image(assets.minimenu, 49, 57, 502, 320);
  image(assets.menuMenu, 200, 120, 200, 250);


  //menu shit met key binds
  if (menuOption < 0) {
    menuOption = 3;
  } else if (menuOption > 3) {
    menuOption = 0;
  }

  if (menuOption == 0) {
    image(assets.menuArrow, 200, 190, 25, 25);
  } else if (menuOption == 1) {
    image(assets.menuArrow, 217, 234, 25, 25);
  } else if (menuOption == 2) {
    image(assets.menuArrow, 217, 275, 25, 25);
  } else if (menuOption == 3) {
    image(assets.menuArrow, 217, 320, 25, 25);
  }


  //dat de exit knop erover heen tekent ipv eronder
  image(assets.exitUp, 10, 10, 70, 70);
}



function settings() {
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowOffsetX = 0;

  image(assets.minimenu, 49, 57, 502, 320);
  console.log(settingOption)


  if (option == 0) {
    image(assets.settingMenu, 200, 120, 200, 250);
  } else if (option == 1) {
    image(assets.setting2, 200, 120, 200, 250);
  } else if (option == 2) {
    image(assets.setting3, 200, 120, 200, 250);
  } else if (option == 3) {
    image(assets.setting4, 200, 120, 200, 250);
  }


  if (settingOption < 0) {
    settingOption = 1;
  } else if (settingOption > 1) {
    settingOption = 0;
  }

  if (settingOption == 0) {
    image(assets.menuArrow, 200, 190, 25, 25);    
  } else if (settingOption == 1) {
    image(assets.menuArrow, 217, 234, 25, 25);
  }



  image(assets.exitUp, 10, 10, 70, 70);
}



function keyPressed() {
  //minigame menu
  if (minigames == 0) {
    if (key === 'Enter') {
      ent = true;
      minigames = 1;
    }

    if ((key === 'w' || key === 'W' || keyCode === UP_ARROW) && menuOption >= 0 && ent == false) {
      menuOption -= 1;
      menuMove.setVolume(0.7);
      menuMove.play();
    } else if ((key === 's' || key === 'S' || keyCode === DOWN_ARROW) && menuOption <= 3 && ent == false) {
      menuOption += 1;
      menuMove.setVolume(0.7);
      menuMove.play();
    }  
  } else if (minigames == 1) {
    if (ent == true) {
      if (key === 'w' || key === 'W' || keyCode === UP_ARROW) {
        settingOption -= 1;
        menuMove.setVolume(0.7);
        menuMove.play();
      } else if (key === 's' || key === 'S' || keyCode === DOWN_ARROW) {
        settingOption += 1;
        menuMove.setVolume(0.7);
        menuMove.play();
      }
    }

    if (key === 'Enter' && settingOption == 0) {
      if (option == 0) {
        option = 1;
      } else if (option == 1) {
        option = 0;
      } else if (option == 2) {
        option = 3;
      } else if (option == 3) {
        option = 2;
      }
    }

    if (key === 'Enter' && settingOption == 1) {
      if (option == 0) {
        option = 2;
      } else if (option == 1) {
        option = 3;
      } else if (option == 2) {
        option = 0;
      } else if (option == 3) {
        option = 1;
      }
    }
  }

  if (ent == true) {
    if (key === 'Backspace') {
      ent = false;
      minigames = 0;
    }
  }

 }



function mousePressed() {
  //folders laten zien wanneer
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


  //voor het bed
  if (mouseX >= 400 && mouseX <= 590 && mouseY >= 300 && mouseY <= 550 && leftPress == false && gamePress == false) {
    free = false;
  }


  //voor de tv
  if (mouseX >= 100 && mouseX <= 350 && mouseY >= 200 && mouseY <= 380 && leftPress == false) {
    free = false;
    gamePress = true;

    gameMusic.setVolume(0.5);
    gameMusic.loop();
    gameMusic.play();
  }


  //voor het bad
  if (mouseX >= 10 && mouseX <= 350 && mouseY >= 250 && mouseY <= 400 && leftPress == true && fridgePress == false) {
    bathPress = true;
  }


  //voor het eten
  if (mouseX >= 360 && mouseX <= 520 && mouseY >= 20 && mouseY <= 410 && leftPress == true && bathPress == false) {
    fridgePress = true;
  }


  //voor alle exit knoppen om te werken (kan wss makkelijker maar ik heb het nu zo al
  //en ben te lui)
  if (mouseX >= 10 && mouseX <= 80 && mouseY >= 10 && mouseY <= 80) {
    exit = 1;
    free = true;
  }

  if (mouseX >= 10 && mouseX <= 80 && mouseY >= 10 && mouseY <= 80) {
    exit2 = 1;
    bathPress = false;
  }

  if (mouseX >= 10 && mouseX <= 80 && mouseY >= 10 && mouseY <= 80) {
    exit3 = 1;
    fridgePress = false;
  }

  if (mouseX >= 10 && mouseX <= 80 && mouseY >= 10 && mouseY <= 80) {
    exit4 = 1;
    gamePress = false;
    gameMusic.stop();
  }


  //voor naar links te gaan
  if (mouseX >= 10 && mouseX <= 60 && mouseY >= 300 && mouseY <= 350) {
    left1 = 1;
    free = true;
  }


  //voor naar rechts te gaan
  if (mouseX >= 530 && mouseX <= 580 && mouseY >= 300 && mouseY <= 350) {
    right1 = 1;
    free = true;
  }


  //voor het deken draggen
  let d = dist(47, mouseY, 557, by);
  if (d < r) {
    dragged = true;
  }


  //voor de douche
  let showerD = dist(showerX, mouseY, mouseX, showerY);
  if (showerD < showerR) {
    showerDragged = true;
  }


  //voor de zeep
  let soapD = dist(soapX, mouseY, mouseX, soapY);
  if (soapD < soapR && showerDragged == false) {
    soapDragged = true;
  }


  //laat de class objects mousepressed functie ook echjt werken
  ijskoffie2.mousePressed();
  bun2.mousePressed();
  giri2.mousePressed();
  jam2.mousePressed();
  pancakes2.mousePressed();
}



function mouseReleased() {
  //deken
  dragged = false;

  //douche
  soapDragged = false;

  //zeep
  showerDragged = false;

  //laat de objexten fucntie werken
  ijskoffie2.mouseReleased();
  bun2.mouseReleased();
  giri2.mouseReleased();
  jam2.mouseReleased();
  pancakes2.mouseReleased();
}



function draw() {
  background(255);

  if (health == 0) {
    deadFR = true;
  }


  //alle volgordens van wanneer welke functies moeten draaien enzo
  if (free == true && leftPress == false) {
    main();
    follow();
  } else if (free == false && deadFR == false && gamePress == false) {
    sleep();
  } else if (free == false && deadFR == false && gamePress == true) {
    games();

    if (minigames == 0) {
      miniMenu();
    } else if (ent == true && menuOption == 0) {
      settings();
    }
  } else if (deadFR == false && leftPress == true && bathPress == false && fridgePress == false) {
    room2();
    follow();
  } else if (deadFR == false && bathPress == true && leftPress == true) {
    wash();
  } else if (deadFR == false && fridgePress == true && leftPress == true) {
    eat();
  }


  //volgorde folders alweer
  drawingContext.shadowOffsetX = -10;
  if (folder == 0) {
    folder2();
  } else if (folder == 1) {
    folder1();
  } else if (folder == 2) {
    folder2();
  } else if (folder == 3) {
    folder3();
  }


  //dat de stats naar beneden gaan behalve als ie dood is
  if (deadFR == false) {
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
  }
}

