// Bouncing Balls
// Week 12


// Ball object variable
let balls = [];
const numOfBalls = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // new "Ball" class
  let init_x = 60;
  let init_y = 60;
  for (let i = 0; i < numOfBalls; i++) {
    balls.push(new Ball(init_x, init_y));
    // Start pos moved over
    // Ensures the balls to no start on one another

    init_x += 100;
    if (init_x > width) {
        init_x = 60;
        init_y += 100;
    }
  }
}

function draw() {
  background('green');

  for (let i = 0; i < balls.length; i++) {
      // Method of ball's
      balls[i].ballCheck(balls, i);
      balls[i].edgeCheck();
      balls[i].move();
      balls[i].display();
  }
}






//////
// Ball Class Def.
/////
class Ball {
  constructor(x, y, size) {
    this.color = 'red';
    this.size = random(20, 80);
    this.rad = this.size / 2;
    this.posX = x;
    this.posY = y;
    this.deltaX = random(-5, 5);
    this.DeltaY = random(-5, 5);
  }

  display() {
      push();
      // outer stroke balls removed
      noStroke();
      // balls fill color
      fill(this.color);
      // set pos of ball
      translate(this.posX, this.posY);
      ellipse(0, 0, this.size);
      pop();
  }

  move() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }

  edgeCheck(){
    // check if ball hits left and right walls
    if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
        this.deltaY *= -1;
        this.color = 'rgb(110, 240, 158)';
    }
    // check if ball hits deck and ceiling
    if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
        this.deltaY *= -1;
        this.color = 'rgb(110, 240, 158)';
    }
  }


  ballCheck(otherBalls, myId) {
    // all balls in array get touched by loop
    for (let n = 0; n < otherBalls.length; n++) {
          // if n != myId, then check for touching
          // otherwise, its ME and we need to skip
          if (n != myId) {
              let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
              let combinedR = this.rad + otherBalls[n].rad;

              if (d <= combinedR) {
                  this.deltaX *= -1;
                  this.deltaY *= -1;

                  // flipping color
                  if( this.color == 'rgb(237, 36, 232)') {
                      this.color = 'rgb(16, 224, 231)';
                    } else {
                        this.color = 'rgb( 237, 36, 232)';
                  }
              }
          }
      }
  }
}
