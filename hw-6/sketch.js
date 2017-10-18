// defining smiley as variable
// instantiating screaming as object
var smiley = {};

// assigning qaulities to screamer
smiley.size = 180;
smiley.eye_mouth_y = -50;
smiley.color = 'red';
smiley.mouth_h = 100;
smiley.pos_x = 0;
smiley.pos_y = 0;

function setup() {
  createCanvas( windowWidth, windowHeight );
  background( 'green' );

  smiley.pos_x = width/3;
  smiley.pos_y = height/3;

  var text2Print = "SCREAMING!!!";
textSize( 34 );
text( text2Print, 1, height/1 );
}


function draw() {

  // drawing the smile
  translate( smiley.pos_x, smiley.pos_y );

  fill( smiley.color );
  ellipse( 0, 0, smiley.size );

  fill('orange');
  ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.30 );
  ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.30 );
  fill('blue');
  ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.20 );
  ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.20 );
  fill('black');
  ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.10 );
  ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.10 );
  fill('purple');
  arc( 0, -smiley.eye_mouth_y, smiley.size * 0.5, smiley.mouth_h, 0, PI );
  fill('yellow');
  arc( 0, -smiley.eye_mouth_y, smiley.size * 0.3, smiley.mouth_h, 0, PI );
  fill('black');

  // update position
  smiley.pos_x += random( -5, 5 );
  smiley.pos_y += random( -5, 5 );


}
