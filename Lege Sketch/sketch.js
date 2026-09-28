function setup() {
    createCanvas(800, 400);
    background(220);
}

function draw() {
    strokeWeight(1);
    fill(0);
    stroke(0);
    text("1.", 20, 15);
    text("2.", 20, 105);
    text("3.", 80, 105);
    text("4.", 80, 205);
    text("5.", 540, 20);
    text("6.", 350, 105);
    text("7.", 625, 105);


    x = 20;
    y = 20;
    fill(255);
    for (let i = 0; i < 10; i++) {
        square(x, y, 50);
        x += 50;
    }
}
