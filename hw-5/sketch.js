/**
 * Attempt at Spinning Person
 *
 */

function setup(){
  createCanvas( windowWidth, windowHeight )
}

var headAngle = 0;
var headRotationRate = 0;
var armAngle = 0;
var headWidth = 80;
var headHeight = 50;

function draw(){
    // erase every frame
    background('#1EBEFE');
    // turn cursor off
    noCursor();

    // UPDATE VALUES
    // base head rotation rate on mouseY pos
    headRotationRate = (mouseY * 0.2) - 20;
    // head angle update,
    // equal itself plus headRotationRate
    headAngle = headAngle + headRotationRate;
    // arm spin at constant rate
    armAngle = armAngle - 2;


    // ********************
    // PERSON
    // ********************
    push();

    // make person follow mouse.
    translate( mouseX, mouseY );

    // ARMS
    push();
    // right arm
    strokeWeight( 15 );
    stroke( 0 );
    // spinning forearm
    push();
    // moving position of arm
    // to facilitate rotation
    translate( 60, -40);
    // rotate arm
    rotate( radians(armAngle) );
    // draw arm
    line( 0, 0, 55, 0 );
    // draw a hand
    fill( '#FE761E' );
    noStroke();
    ellipse( 60, 0, 30 );
    pop();
    // draw static upper arm
    line( 15, -30, 60, -40 );

    // left arm
    push();
    // move to center to facilitate the rotate
    translate( -15, -30 );
    // rotate based on mouseX pos
    rotate( radians( mouseX ) );
    // drawing arm and hand
    line( 0, 0, 155, 0);
    fill( '#FE761E' );
    noStroke();
    ellipse( 175, 0, 40 );
    pop();
    pop();


// PERSONS BODY
// AWESOME BODY
ellipse( 0, 0, 35, 100 );

// HEAD
push();
noStroke();
fill( '#58FE1E' );
// move center
translate( 0, -65 );
// rotate head
rotate( radians(headAngle) );
// draw head
ellipse( 0, 0, headWidth, headHeight );
stroke(0);
fill( '#0300E5' );
// eyes
strokeWeight(2);
push();
// draw eyes based on head size
translate( headWidth * -0.2, headHeight * -0.2 );
ellipse( 0, 0, headWidth * 0.33, headHeight * 0.33 );
noStroke();
fill( '#FE761E' );
ellipse( 0, 0, 10 );
fill( 0 );
ellipse( 0, 0, 5 );
pop();
push();
translate( headWidth * 0.2, headHeight * -0.2 );
ellipse( 0, 0, 20 );
noStroke();
fill( '#FE761E' );
ellipse( 0, 0, 10 );
fill( 0 );
ellipse( 0, 0, 5 );
pop();

// MOUTH
push();
fill( 0 );
arc( 0, headHeight * 0.2, 60, 20, 0, PI );
pop();
pop(); // End head

// LEGS
fill( '#0300E5' );
noStroke();
// legs out of bottom window
triangle( -15, 35, 10, 35, -40, height+100 );
    triangle( 15, 35, -10, 35, 40, height+100 );

pop(); // end guy

}
