let arrPerson = [
    ["bob", "henk", "harry", "hallo", "kweenie"],
    ["lisa", "thijs", "jasper", "idk", "ja"],
    ["veel", "man", "vrouw", "moeder", "vader"],
    ["broer", "sus", "oom", "tante", "nicht"],
    ["neef", "voor", "achter", "links", "rechts"]
]


function setup() {
    createCanvas(300, 300);
    background(220);
}

function draw() {
    stroke(0);
    l = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            ja = arrPerson[i][j];


            if (l == 0) {
                fill(255);
            } else {
                fill(0);
            }
            strokeWeight(1);
            rect(j * 50 + 25, i * 50 + 25, 50, 50);


            fill(255, 0, 0);
            textSize(10);
            strokeWeight(0);
            text(ja, j * 50 + 30, i * 50 + 40);
            l += 1; 

            if (l > 1) {
                l = 0;
            }
        }
    }
}
