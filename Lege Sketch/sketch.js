let a;
let b;

function setup() {
    createCanvas(500, 500);
}

function draw() {

    background(200);

    if (a <= b) {
        text(a + " is kleiner dan " + b, 160, 250);
    } else if (a >= b) {
        text(a + " is groter aan " + b, 160, 250);
    } else if (a == b) {
        text(a + " is gelijk dan " + b, 160, 250);
    }
}

function keyPressed() {
    if (key == " ") {
        a = floor(random(0, 101));
        b = floor(random(0, 101));
    }
}