function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(255);
  let score = random(100);
  noLoop();
  
  if (score >=  90) {
    fill('green');
    text("Uitstekend!", 200, 100);
  } else if (score >= 70 && score <= 89) {
    fill('yellow');
    text("Goed gedaan!", 200, 100);
  } else if (score >= 50 && score <= 69) {
    fill('orange');
    text("Voldoende.", 200, 100);
  } else {
    fill('red');
    text("Onvoldoende.", 200, 100);
  }
}
