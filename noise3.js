
var c = 10;
var r = 10;

var balls = [];

function setup() {
	createCanvas(500, 500);
	background(255);
	for(var i = 0; i < 100; i++) {
		balls.push(new Ball());
	}
	noiseSeed(random(100));
}

function draw() {
	background(255);
	for(var x = 0; x < c; x++) {
		for(var y = 0; y < r; y++) {
			var a = map(x, 0, c, 0, 2);
			var b = map(y, 0, r, 0, 2);
			var v = map(noise(a, b, frameCount / 200), 0, 1, 0, 255);
			stroke(v);
			strokeWeight(2);
			var xx = map(x, 0, c, 0, width);
			var yy = map(y, 0, r, 0, height);
			var angle = map(v, 0, 255, 0, TWO_PI) + PI / 2;
			// point(xx, yy);
			line(xx, yy, xx + 20 * cos(angle), yy + 20 * sin(angle));
		}
	}
	for (var i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].show();
	}
}

function Ball() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector();
	this.acc = createVector();
	this.accm = 1;

	this.update = function() {
		var x = this.pos.x;
		var y = this.pos.y;
		var a = map(x, 0, width, 0, 2);
		var b = map(y, 0, height, 0, 2);
		var angle = map(noise(a, b, frameCount / 200), 0, 1, 0, TWO_PI);
		this.acc = createVector(this.accm * cos(angle), this.accm * sin(angle));
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.vel.setMag(3);
		if(this.pos.x < 0 || this.pos.x > width) {
			this.pos.x = width - this.pos.x;
		}
		if(this.pos.y < 0 || this.pos.y > height) {
			this.pos.y = height - this.pos.y;
		}
	}

	this.show = function() {
		strokeWeight(10);
		stroke(128, 0, 128)
		point(this.pos.x, this.pos.y);
	}
}

