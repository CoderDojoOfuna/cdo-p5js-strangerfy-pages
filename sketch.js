// custom p5js
class Walker {

    constructor(tmpNum) {
        this.num = tmpNum;
        this.x = (random(windowWidth)-windowWidth/2);
        this.y = (random(windowHeight)-windowHeight/2);
        this.r = 5;
        this.spd = this.r;
        this.c = color(random(255),random(255),random(255));
    }

    display() {
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
    }

    move() {
        if (random(10) < 5.0) {
            this.x_sign = 1;
        } else {
            this.x_sign = -1;
        }

        if (random(10) < 5.0) {
            this.y_sign = 1;
        } else {
            this.y_sign = -1;
        }

        this.x += this.x_sign * this.spd;
        this.y += this.y_sign * this.spd;

        if (this.x < -width/2) {
            this.x = width/2;
        }
        if (this.x > width/2) {
            this.x = -width/2;
        }
        if (this.y < -height/2) {
            this.y = height/2;
        }
        if (this.y > height/2) {
            this.y = -height/2;
        }
    }
}

const walkers = [];
function preload() {
    tiger = loadModel('tiger2.obj')
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    colorMode(HSB, 360, 100, 100);
    walkerNumber = random(2,5);
    for (i = 0; i < walkerNumber; i++) {
        walkers[i] = new Walker(i);
    }
}

function draw() {
    for (i = 0; i < walkerNumber; i++) {
        walkers[i].display();
        walkers[i].move();
    }
    push();
    ambientLight(10);
    pointLight(200, 100, 100, -windowWidth/2, -windowHeight/2, windowWidth);
    specularMaterial(100);
    rotateX(-PI/8);
    rotateY(PI/4);
    rotateZ(PI);
    scale(100);
    model(tiger);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



