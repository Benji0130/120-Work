let bubbles = [];

function setup () {
  createCanvas(windowWidth, 400);
  let b = new Bubble(width/2, height/2, 10);
  bubbles.push(b);
}

function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background('yellow');
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

show() {
  stroke(250);
  strokeWeight(5);
  fill('green');
  ellipse(this.x, this.y, this.r * 2);
}
}
