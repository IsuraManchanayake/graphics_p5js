
var width;

var height;

function preload() {
	width = 1300;
	height = 720;
}

function setup() {
	createCanvas(width, height);
	background(255);
}


function draw() {
	noFill();
	colorMode(HSB);
	stroke(random(0, 50), random(20, 50), random(200, 255));
	rect(random(0, width) - 20, random(0, height) - 20, random(60, 120), random(60, 120));
	print(frameRate());
}