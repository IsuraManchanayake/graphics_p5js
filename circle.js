require('./libraries/p5.js');

var circles;
var factor;

function setup() {
    factor = 5.;
    circles = [];
    colors = ['#ECD078','#D95B43','#C02942', '#53777A'];
    createCanvas(1366, 640);
    background(255);
    noStroke();
    for(var i = 0; i < 50; i++) {
        circles.push(new Circle(random(0 + 10 + 100, width - 10 - 100), random(0 + 10 + 100, height - 10 - 100), random(2, 10), random(20, 100), floor(random(10, 20)), colors[floor(random(4))], random(-1, 1), random(-1, 1)));
    }
}

function draw() {
    background('#542437');
    circles.forEach(function(circle) {
        circle.rotate();
        circle.move();
        circle.show();
    });
}

function Circle(x, y, r, R, n, c, vx, vy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.R = R;
    this.n = n;
    this.c = c;
    this.orientation = 0;
    this.speed = random(100, 150);
    this.vx = vx;
    this.vy = vy;
    this.expandSeed = random(100);

    this.show = function() {
        noStroke();
        fill(this.c);
        for(var i = 0; i < this.n; i++) {
            var x_ = this.x + this.R * cos(this.orientation + i * TWO_PI / this.n);
            var y_ = this.y + this.R * sin(this.orientation + i * TWO_PI / this.n);
            ellipse(x_, y_, 2 * this.r, 2 * this.r);
        }
    }

    this.rotate = function() {
        this.orientation = frameCount / this.speed;
    }

    this.move = function() {        
        this.R += sin(this.expandSeed + frameCount / 10);
        this.x += this.vx;
        this.y += this.vy;  
        if(this.x - this.R - this.r < 0 || this.x + this.R + this.r > width) {
            this.vx *= -1;
        }
        if(this.y - this.R - this.r <  0 || this.y + this.R + this.r > height) {
            this.vy *= -1;
        }
    }
}