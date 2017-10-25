

var ball = {};
ball.width = 5;
ball.x = 20;
ball.y = 20;
ball.delta_x = 4;
ball.delta_y = 4;
ball.scale_x = 4;
ball.scale_y = 4;


function setup() {
    createCanvas(windowWidth, 400);
    background( '0' );
}




function draw() {

    if ( mouseIsPressed ) {
        background( random(255), random(255), random(255) );

        noStroke();
        fill( random(255), random(255), random(255) );
        ellipse(
            random(width),
            random(height),
            random(width),
            random(height)
        );
      }

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill('blue');
    ellipse(ball.x, ball.y, ball.width, ball.width);

}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, .5, 10);
    ball.scale_y = map(mouseY, 0, height, .5, 10);


}
