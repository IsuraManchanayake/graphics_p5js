
string = "F";
len = 25;
deapth = 0;
angle = 0;

function generate() {
	var newstring = "";
	for(var i = 0; i < string.length; i++) {
		var c = string.charAt(i);
		if(c == "F") {
			newstring += "FF+[+F-F-F]-[-F+F+F]";
		} else {
			newstring += c;
		}
	}
	string = newstring;
}

function createTree() {
	translate(width / 3, height);
	// console.log(string);
	for(var i = 0; i < string.length; i++) {
		var c = string.charAt(i);
		if(c == "F") {
			stroke(50 + 10 * deapth);
			// stroke(deapth * 20, deapth * 70, 50 * (1 + deapth));
			// console.log(deapth);
			line(0, 0, 0, -len/(1 + deapth/3));
			translate(0, -len/(1 + deapth/3));
		} else if(c == "-") {
			rotate(-angle + deapth / 75);
		} else if(c == "+") {
			rotate(angle + deapth / 75);
		} else if(c == "[") {
			deapth += 1;
			push();
		} else {
			deapth -= 1;
			pop();
		}
		if(c == "F" && string.charAt(i + 1) == "]") {
			noStroke();
			fill(15 * deapth, 255, 127);
			ellipse(0, 0, 3, 3);
		}
	}
}

function setup() {
	createCanvas(600, 500);
	background(255);
	colorMode(HSB);
	angle = PI / 6;
	for(var i = 0; i < 4; i++) {
		generate();
		len /= 1.2;
	}
	noiseSeed(90);
}

function draw() {
	background(255);
	createTree();
	angle = PI / 6 + 0.1 * sin(frameCount / 50);
}