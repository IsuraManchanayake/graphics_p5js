rslider = {};
angle = 0;
ratio = 1.5;
bend = 0;
press = 0;

function setup() {
	createCanvas(600, 500);
	noiseSeed(90);
}

function draw() {
	blendMode(BLEND);
	background(255);//point(200, 200);
	blendMode(DARKEST);
	stroke(0);
	
	angle = 0.5 + 0.05 * sin((PI / 2)* sin(frameCount / 40));
	angle /= 1.3;
	ratio = 1.43;

	var mx = 100 + 100 * cos(frameCount / 100);
	var my = 200;
	//my = constrain(mouseY, 0, 500);
	// var t = frameCount / 20;
	// var r = 50 + 50 * cos(2 * t);
	// mx = map(r * cos(t), -100, 100, 0, 500);
	// my = map(r * sin(t), -100, 100, 0, 500);
	translate(width / 2, height);
	bend = map(mx, 0, 500, -0.2, 0.2);
	press = map(my, 0, 500, 0, 0.5);
	branch(1, 120, 1);
}

function branch(index, len, rank) {
	if(len < 10) {
		blendMode(BLEND);
		noStroke();
		fill(255, 0, 50);
		var r =  (2 + noise(rank/100));
		ellipse(0, 0, r, r);
		blendMode(DARKEST);
		return;
	}
	strokeWeight(15 / index);
	stroke(index * 25);
	line(0, 0, 0, -len);
	push();
	translate(0, -len);
	rotate((1 + press) * (angle + bend + 0.2 * sin(rank / 10)));
	branch(index + 1, len / ratio, rank);
	pop();
	push();
	translate(0, -len);
	rotate((1 + press) * (-angle + bend + 0.3 * sin(rank / 10)));
	rank++;
	branch(index + 1, len / (ratio * (0.5 + noise(rank))), rank);
	pop();
}