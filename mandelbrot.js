var maxIterations;
var maxVal;

var height;
var width;

var pointx;
var pointy;
var thresh;

function preload() {
    maxIterations = 100;
    maxVal = 16;
    height = 1500;
    width = 1500;
    pointx = -1
    pointy = 0;
    thresh = 1;
}

function setup() {
    createCanvas(width, height);
    background(255);
    noLoop();
}

function draw() {
    var left = pointx - thresh;
    var right = pointx + thresh;
    var down = pointy - thresh;
    var up = pointy + thresh;
    for(var x = 0; x < width; x++) {
        for(var y = 0; y < height; y++) {

            var ca = map(x, 0, width, left, right);
            var cb = map(y, 0, height, down, up);

            var a = ca;
            var b = cb;

            var iter = 0;
            while(iter < maxIterations) {
                var aa = a * a - b * b + ca;
                b = 2 * a * b + cb
                a = aa;

                if(a * a + b * b > maxVal) {
                    break;
                }
                iter++;
            }

            if (iter < maxIterations ) {
                var log_zn = log(a * a + b * b) / 2;
                var nu = log( log_zn / log(2) ) / log(2);
                iter = iter + 1 - nu;
            }
            //var color1 = floor(iter);
            //var color2 = floor(iter) + 1;
            //var color = color1 + color2 * (iter % 1);
            colorMode(HSB, 1000);
            //if(iter == maxIterations)
            //  stroke(0);
            //else
                stroke(map(iter, 0, maxIterations, 0, 1000));
                //stroke(map(color, 0, maxIterations, 0, 255), 128, 128);
            point(x, y);
        }
    }



}