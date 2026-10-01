let button;

let vragen = [
  ["How many reindeer does Santa Claus", "traditionally have?"],
  ["What do children leave out for Santa", "Claus on Christmas Eve?"],
  ["Which plant is traditionally hung on", "doorways on Christmas?"],
  ["Who started the Christmas tree deco-", "-rating tradition?"],
  ["What does the word 'Yule' refer", "to?"],
  ["What is the traditional color of", "Santa Claus's suit?"],
  ["From which country did the Christmas", "Stockings originate?"],
  ["What is the name of Santa Claus's", "red-nosed reindeer?"],
  ["On what date is Christmas Day cele-", "-brated?"],
  ["What is the name of the three spirits", "in 'A Christmas Carol'?"]
]

let col = 0;
let col2 = 0;

let press = 0;


function preload() {
  img = loadImage("https://cdn.corenexis.com/f/BPOwfydmyGU.png");
} 


function setup() {
  createCanvas(1000, 650);
}


function draw() {
  background(220);
  image(img, 0, 0, 1000, 650);

  vraag();
}


function vraag() {
  textFont('Times New Roman');
  textSize(40);
  fill(77, 54, 37);

  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgb(138, 110, 90)';
      
  col2 = 0;
  text(vragen[col][col2], 200, 170);
  col2 = 1;
  text(vragen[col][col2], 200, 210);
  
  if (press == 9) {
    press = 9;
    col = 9;
    col2 = 1;
  }
}


// function button() {
//   button = createButton()
//   button.position(190, 300);
//   button.size(300, 80);
//   button.style('font-size', '40px')
//   button.style('background-color', '#c8473e8f')
// }

function mousePressed() {
  press += 1;
  col += 1;
}