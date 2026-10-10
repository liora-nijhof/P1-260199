let tempAntwoord = []
let score = 0
let fix;
let img;
let img2;
let pressed = 0;
let buttonStart;
let ButtonNext;
let col;
let right = false;
let ButtonA;
let ButtonB;
let ButtonC;
let ButtonD;
let vraaggeweest;
let rightAns = 0;
let vragen =[["Hoe heet het junior team van dit team, dat ook in de formule 1 rijdt" ],["Hoeveel coureurs hebben een GP gereden voor het team?"],['In welk jaar is het team opgericht?'],["Voor hoeveel geld hebben ze Jaguar F1 team overgekocht?"],["Hoeveel constructeurs-kampioenschappen hebben ze gewonnen?"],["Hoeveel team principals heeft het team gehad?"],["Hoeveel coureurs hebben 100 of meer GP’s voor het team gereden?"],["Hoeveel race overwinningen heeft het team behaald"],["Hoeveel coureurs-kampioenschappen heeft het team gewonnen?"],["Waar is dit team gevestigd?"]]
let antwoorden =[
  ["Racing Bulls","Toro Rosso","Rode Stier", "Alphatauri"],
  ["15","17","19","16"],
  ["2005","2006","2004","2007"],
  ["$1","$10.000.000","$25.000.000","$37.000.000"],
  ["6","3","1","12"],
  ["2","3","4","7"],
  ["4","3","2","1"],
  ["131","134","137","99"],
  ["8","6","3","12"],
  ["Milton Keynes, Groot Brittanië","Spielberg, Oostenrijk","Maranello, Italië","Vancouver, Canada"]
]



function preload(){
 img = loadImage("https://cdn.corenexis.com/f/CLe1xe9psUj.webp"); 
 img2 = loadImage("https://cdn.corenexis.com/f/CjdHIZLFjLX.jpg")
}


function startPress() {
  buttonStart.hide();
  pressed += 1;
}

function Next(){
  ButtonNext.hide();
  pressed += 1
}


function KnopA(){
  antwoorden.splice(fix, 1)
  vragen.splice(fix, 1)
  if (rightAns == 1) {
    score ++;
    ButtonA.style('background-color', 'rgb(0, 255, 0)')
  }
  ButtonNext.show();
}


function KnopB(){
  antwoorden.splice(fix, 1)
  vragen.splice(fix, 1)
  if (rightAns == 2) {
    score ++;
    ButtonB.style('background-color', 'rgb(0, 255, 0)')
  }
  ButtonNext.show();
}

function KnopC(){
  antwoorden.splice(fix, 1)
  vragen.splice(fix, 1)
  if (rightAns == 3) {
    score ++;
    ButtonC.style('background-color', 'rgb(0, 255, 0)')
  }
  ButtonNext.show();
}

function KnopD(){
  antwoorden.splice(fix, 1)
  vragen.splice(fix, 1)
  if (rightAns == 4) {
    score ++;
    ButtonD.style('background-color', 'rgb(0, 255, 0)')
  }
  ButtonNext.show();
}



function Questions(){
  strokeWeight(13)
  stroke("black")
  textSize (40)
  fill ("white")
  text(vragen[fix], 230,100,200,600)
}



function GameRound(){
  fix = int(random(0, vragen.length - 1))

  ButtonA.style('background-color', 'rgb(255, 255, 255)')
  ButtonB.style('background-color', 'rgb(255, 255, 255)')
  ButtonC.style('background-color', 'rgb(255, 255, 255)')
  ButtonD.style('background-color', 'rgb(255, 255, 255)')

  ButtonA.show();
  ButtonB.show();
  ButtonC.show();
  ButtonD.show();

  antwTeken();

  ButtonA.mousePressed(KnopA);
  ButtonB.mousePressed(KnopB);
  ButtonC.mousePressed(KnopC);
  ButtonD.mousePressed(KnopD);

  ButtonA.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
  ButtonB.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
  ButtonC.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
  ButtonD.html(tempAntwoord[0]);
  tempAntwoord.splice(0,1);
}


function antwTeken() {
  tempAntwoord = shuffle(antwoorden[fix])
  rightAns = 0;

  if (tempAntwoord[0] == antwoorden[fix][0]) {
    rightAns = 1;
  } else if (tempAntwoord[1] == antwoorden[fix][0]) {
    rightAns = 2;
  } else if (tempAntwoord[2] == antwoorden[fix][0]) {
    rightAns = 3;
  } else if (tempAntwoord[3] == antwoorden[fix][0]) {
    rightAns = 4;
  }
}

function drawQuest() {
  Questions();
}

function EindScherm(){
  ButtonA.hide();
  ButtonB.hide();
  ButtonC.hide();
  ButtonD.hide();

  strokeWeight(13)
  stroke("black")
  textSize (80)
  fill ("white")
  text(score + "/10", width / 2 - 90, height / 2 - 50, 200, 600)
}


function setup() {
  createCanvas(800, 600);

  buttonStart = createButton("start");
  buttonStart.position (325,425);
  buttonStart.style('font-size', '64px');
  buttonStart.mousePressed(startPress);

  ButtonNext = createButton("next")
  ButtonNext.position (100,100) 
  ButtonNext.style("font-size", '64px')
  ButtonNext.mousePressed(Next)

  ButtonA = createButton("A");
  ButtonA.position (20,20);
  ButtonA.size (200,100);
  ButtonA.style('font-size', '32px')

  ButtonB = createButton("B");
  ButtonB.position (600,20);
  ButtonB.size (200,100);
  ButtonB.style('font-size', '32px')
  
  ButtonC = createButton("C");
  ButtonC.position (20,500);
  ButtonC.size (200,100);
  ButtonC.style('font-size', '32px')

  ButtonD = createButton("D");
  ButtonD.position (600,500);
  ButtonD.size (200,100);
  ButtonD.style('font-size', '32px')
  
  ButtonA.style('background-color', 'rgb(255)')
  ButtonB.style('background-color', 'rgb(255)')
  ButtonC.style('background-color', 'rgb(255)')
  ButtonD.style('background-color', 'rgb(255)')

  ButtonA.hide();
  ButtonB.hide();
  ButtonC.hide();
  ButtonD.hide();
  ButtonNext.hide();
}


function draw() {
  background(220);
  image(img, 0, 0, 800,600);
  console.log(pressed)
  if (pressed >= 2){
    image(img2, 0, 0, 800, 600)
  }
  if (pressed >= 21){
    image(img, 0, 0, 800, 600)
  }
  

  if (pressed == 1){
    pressed = 2;
    GameRound()
    drawQuest()
  }
  if (pressed == 3){
    pressed = 4
    GameRound()
    drawQuest()
  }
  if (pressed == 5){
    pressed = 6
    GameRound() 
    drawQuest()
  }
    if (pressed == 5){
    pressed = 6
    GameRound()
    drawQuest()
  }
    if (pressed == 7){
    pressed = 8
    GameRound()
    drawQuest()
  }
    if (pressed == 9){
    pressed = 10
    GameRound()
    drawQuest()
  }
    if (pressed == 11){
    pressed = 12
    GameRound()
    drawQuest()
  }
    if (pressed == 13){
    pressed = 14
    GameRound()
    drawQuest()
  }
    if (pressed == 15){
    pressed = 16
    GameRound()
    drawQuest()
  }
    if (pressed == 17){
    pressed = 18
    GameRound()
    drawQuest()
  }
    if (pressed == 19){
    pressed = 20
    GameRound()
    drawQuest()
  }
    if (pressed == 21){
    EindScherm()
    drawQuest()
  }
 
}