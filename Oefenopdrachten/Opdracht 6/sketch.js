let colors = ["red", "green", "blue", "purple", "yellow"]
let getallen = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300]

function setup() {
  createCanvas(380, 350);
}

function draw() {
  background(220);

  stroke(0);
  strokeWeight(0);
  fill(0);
  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);

  //1
  h = 0;
  y = 15;
  for (let i = 0; i < 5; i++) {
    fill(colors[h]);
    text(colors[h], 35, y);

    y += 15;
    h ++;
  }

  // //2
  // h1 = 0;
  // y1 = 100;
  // for (let i = 0; i < 5; i++) {
  //   fill(colors[h1]);
  //   text(colors[h1], 35, y1);
  //   colors.shift();

  //   y1 += 15;
  //   h1 ++;
  // }

  // //3
  // h2 = 0;
  // y2 = 190;
  // for (let i = 0; i < 5; i++) {
  //   fill(colors[h2]);
  //   text(colors[h2], 35, y2);

  //   y2 += 15;
  //   h2 ++;
  // }

  //4
  c = 0;
  y3 = 250;
  for (let col of getallen) {
    if (col < 300) {
      print(getallen[c], 35, y3);
      y3 += 15;
    }
    c += 1;
  }
}