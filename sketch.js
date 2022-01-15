// custom p5js
class Walker {

	constructor(tmpNum) {
		this.num = tmpNum;
		this.x = width.toFixed(2)/2;
		this.y = height.toFixed(2)/2;
		this.r = 5;
		this.spd = this.r;
		this.c = color('#FFFFFF');
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

		if (this.x < 0) {
			this.x = width;
		}
		if (this.x > width) {
			this.x = 0;
		}
		if (this.y < 0) {
			this.y = height;
		}
		if (this.y > height) {
			this.y = 0;
		}
	}
}

const walkers = []
function setup(){
	createCanvas(windowWidth,windowHeight);
	colorMode(HSB, 360, 100, 100);
	// background(360);

	for (i = 0; i < 4; i++) {
		walkers[i] = new Walker(i);
	}

	walkers[0].c = color('#93431B');
	walkers[1].c = color('#175A0A');
	walkers[2].c = color('#61D34B');
	walkers[3].c = color('#F5F782');
}

function draw(){
	for (i = 0; i < 4; i++) {
		walkers[i].display();
		walkers[i].move();
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



