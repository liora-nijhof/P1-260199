let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let button = [];
let yur = 220;
let ran = 0;

function setup() {
  createCanvas(800, 400);

  buttpn();
}

function draw() {
  background(yur);

  console.log(ran);
}

function buttpn() {
  let x = 10;
  let i = 0;
  ran = 0;

  for (i; i <= 5; i++) {
    button[i] = createButton(kleuren[i]);
    button[i].style('background-color', kleuren[i])
    button[i].position(x, 10);

    x += 40; 

    button[i].mousePressed(bg);
  }
}

function bg() {
  yur = kleuren[ran];
}
