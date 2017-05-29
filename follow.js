
var balls = [];

function setup() {
	createCanvas(500, 500);
	for(var i = 0; i < 10; i++) {
		balls.push(new Ball());
	}
}

function draw() {
	background(51);
	for(var i = 0; i < balls.length; i++) {
		b = balls[i];
		b.target = createVector(mouseX, mouseY);
		b.seek();
		b.update();
		b.show();
	}
}

function Ball() {
	this.pos = createVector(random(width), random(width));
	this.v = createVector(5, 0);
	this.a = createVector();
	this.col = random(150, 255);
	this.target = createVector(mouseX, mouseY);
	this.steer = createVector();
	this.history = [];
	for(var i = 0; i < 30; i++) {
		this.history.push(createVector(this.pos.x, this.pos.y));
	}
}

Ball.prototype.show = function() {
	stroke(this.col, 200, 0);
	strokeWeight(10);
	point(this.pos.x, this.pos.y);
	for(var i = 0; i < this.history.length; i++) {
		stroke(this.col, 200, 0, i);
		point(this.history[i].x, this.history[i].y);
	}
}

Ball.prototype.update = function() {
	this.pos.add(this.v);
	this.v.add(this.a);
	this.history.push(createVector(this.pos.x, this.pos.y));
	this.history.splice(0, 1);
}

Ball.prototype.seek = function() {
	var d = p5.Vector.sub(this.target, this.pos);
	if(d.mag() > 20) {
		d.div(10);
		this.steer = p5.Vector.sub(d, this.v);
		this.steer.setMag(.5);
		this.addForce(this.steer);
	}
}

Ball.prototype.addForce = function(force) {
	this.a = force;
}