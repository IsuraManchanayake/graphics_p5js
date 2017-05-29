
circles = []

function setup() {
	createCanvas(500, 500);
	background(50);
	for (var i = 0; i < 100; i++) {
		circles.push(new circle(random(10, 490), random(10, 490)));
	}
}

function draw() {
	// blendMode(OVERLAY);
	for (var i = 0; i < circles.length; i++) {
		circles[i].update();
	}
}

function circle(x, y) {

	this.x = x;
	this.y = y;
	this.theta = random(0, TWO_PI);
	this.vx = 10 * cos(this.theta);
	this.vy = 10 * sin(this.theta);
	this.color = color(random(255), random(0, 255), 100);

	this.update = function() {
		stroke(this.color);
		strokeWeight(10);
		line(this.x, this.y, this.x + this.vx, this.y + this.vy);
		this.x += this.vx;
		this.y += this.vy;
		this.vx -= 0.5;
		this.vy -= 0.5;
		if(this.x < 10 || this.x > 490)
			this.vx *= -1;
		if(this.y < 10 || this.y > 490)
			this.vy *= -1;
		//noStroke();
		//ellipse(this.x, this.y, 10, 10);
	};
}