function setup() {
    createCanvas(800, 400);
    background(220);
}

function draw() {
    strokeWeight(0);
    fill(0);
    stroke(0);
    text("1.", 20, 15);
    text("2.", 20, 105);
    text("3.", 80, 105);
    text("4.", 80, 205);
    text("5.", 540, 20);
    text("6.", 350, 105);
    text("7.", 625, 105);

    
    //1
    x = 20;
    strokeWeight(2);
    fill(255);
    for (let i = 0; i < 9; i++) {
      if (i == 6) {
        fill(0, 0, 255);
        square(x, 20, 50);
        x += 50;
      } 
      fill(255);  
      square(x, 20, 50);
      x += 50;
    }
    

    //2
    y1 = 110;
    col1 = 0;
    for (let i = 0; i < 5; i++) {
      fill(col1);
      square(20, y1, 50);
      y1 += 50;
      col1 += 70;
    }


    //3
    x2 = 80;
    col2 = 0;
    breed = 25;
    for (let i = 0; i < 4; i++) {
      fill(0, col2, 0);
      rect(x2, 110, breed, 50);
      col2 += 80;
      breed += 25;
      x2 += breed - 25;
    }


    //4
    x3 = 80;
    y3 = 210;
    col3 = 255;
    breed1 = 25;
    hoog1 = 50;
    for (let i = 0; i < 4; i++) {
      fill(0, 0, col3);
      rect(x3, y3, breed1, hoog1);
      col3 -= 80;
      breed1 += 25;
      hoog1 += 25;
      x3 += breed1 - 25;
    }


    //5
    x4 = 0;
    dik = 0;
    fill(255);
    for (let i = 0; i < 5; i++) {
      strokeWeight(dik);
      circle(x4, 45, 40);
      dik += 1.5;
      x4 += 50;
    }


    //6
    x5 = 350;
    y5 = 110;
    grootte = 200;
    klik = 1;
    strokeWeight(2);
    for (let i = 0; i < 10; i++) {
      if (klik == 1) {
        fill(255);
        circle(x5, x5, grootte);
      } else if (klik == 2) {
        fill(255, 0, 0);
        circle(x5, y5, grootte);
      }
      x5 += 20;
      y5 += 20;
      grootte -= 20;
    }
}