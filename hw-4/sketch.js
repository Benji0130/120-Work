function setup() {
  // create a canvas to draw my portrait on
  createCanvas( 400, 600 );
}
function draw() {
  // set the background color
  background('#1EFE9C');
  // making a sandbox for whole monster
  push();
  // making the center origin of my canvas
  translate( 200, 300);
  // body and arms of monster
  push();
  // arm code
  stroke('#7D3CD1');
  strokeWeight(20);
  line( -100, 10, -150, 100 );
  line( -150, 100, -150, 200 );
  line( 100, 10, 150, 100 );
  line( 150, 100, 150, 200 );
  // end arms code
  // body code
  noStroke();
  fill('#7D3CD1');
  quad( -20, -15, 20, -15, 30, 1, -30, 1 );
  noStroke();
  fill('#7D3CD1');
  rect(-100, 0, 200, 300);
  stroke('#E31E15');
  strokeWeight('30');
  line(-100, 0, 75, 300, );
  line(-100, 280, 100, 280, );
  pop();
  // end of body and arms
  // start of head
  push();
  // head here
  fill('#76E315');
  noStroke();
  ellipse( 0, -50, 110, 140 );
  // mouth
  fill('#000000')
  arc( 0, -35, 55, 70, 0, PI );
  // end of mouth
  // start of eyes
  fill('#000000');
  arc( -20, -65, 20, 30, 0, PI);
  arc( 20, -65, -20, -30, 0, PI);
  // eyes done
  // eye color
  fill('#E31E15');
  arc( -20, -65, 10, 15, 0, PI);
  arc( 20, -65, 10, -15, 0, PI);
  // eyes done
  // helmet for head
  fill('#E31E15');
  arc( 0, -120, -150, 100, 0, PI);
  fill('#291EFE');
  arc( 0, -120, -75, 50, 0, PI);
  pop();
  // helmet done
  // sun
  push();
  fill('#FECF1E');
  noStroke();
  ellipse( 150, -250, 300, 300 );

}
