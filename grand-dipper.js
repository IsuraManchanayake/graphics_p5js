
var W = 11, H = 17, xc = 3, yc = 9, r = 5;

function setup() {
	createCanvas(W * 50, H * 50);
	background(0);
	fill(255);

	xc *= 50;
	yc *= 50;
	r *= 50;

	rectMode(CENTER);

	strokeWeight(0);
	for(var i = 0.5; i < W; i++) {
		for(var j = 0.5; j < H; j++) {
			var x = i * 50;
			var y = j * 50;
			if((x - xc) * (x - xc) + (y - yc) * (y - yc) <= r * r) {
				fill(209, 255, 198);
			} else {
				fill(255);
			}
			strokeWeight(0);
			rect(x, y, 49, 49);
			stroke(0, 20);
			strokeWeight(5);
			point(x, y);
		}
	}

	fill(0, 0);
	stroke(0);
	strokeWeight(2);
	ellipse(xc, yc, 2 * r, 2 * r);
	
	noLoop();
}

function draw() {

}