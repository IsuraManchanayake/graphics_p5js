
String string = "F";
Float len = 25.0;
Float deapth = 0.0;
Float angle = 0.0;

void generate() {
  String newString = "";
  for(int i = 0; i < string.length(); i++) {
    char c = string.charAt(i);
    if(c == 'F') {
      newString += "FF+[+F-F-F]-[-F+F+F]";
    } else {
      newString += c;
    }
  }
  string = newString;
}

void createTree() {
  translate(width / 3, height);
  colorMode(HSB);
  for (int i = 0; i < string.length(); i++) {
    char c = string.charAt(i);
    if(c == 'F') {
      stroke(0, 0, 50 + 45 * deapth);
      line(0, 0, 0, -len / (1 + deapth / 3));
      translate(0, -len / (1 + deapth / 3));
    } else if(c == '-') {
      rotate(-angle + deapth / 75);
    } else if(c == '+') {
      rotate(angle + deapth / 75);
    } else if(c == '[') {
      deapth++;
      pushMatrix();
    } else {
      deapth--;
      popMatrix();
    }
    if(c == 'F' && string.charAt(i + 1) == ']') {
      noStroke();
      fill(15 * deapth, 255, 255);
      ellipse(0, 0, 3, 3);
    }
  }
}

void setup() {
  size(600, 500);
  background(255);
  angle = PI / 6;
  for(int i = 0; i < 4; i++) {
    generate();
    len /= 1.2;
  }
  noiseSeed(90);
}

void draw() {
  background(255);
  createTree();
  angle = PI / 5 + 0.1 * sin(frameCount / 50.0);
}