// custom p5js
let pointGraphics;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pointGraphics = createGraphics(windowWidth, windowHeight, WEBGL);
    pointGraphics.background(0);
}

function draw() {
    pointGraphics.push();
    pointGraphics.fill(255,0,255);
    pointGraphics.noStroke();
//    pointGraphics.translate(-windowWidth/4, -windowHeight/4);
    pointGraphics.ellipse(0, 0, 50, 50);
    pointGraphics.plane(windowWidth, windowHeight);
    pointGraphics.pop();
}



