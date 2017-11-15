let smileys = [];
let t = 0;

function setup(){
  createCanvas( windowWidth, 600 );

  // creating random sine movement for face
  for (var i = 0; i < 10; i++) {

    // adding new smiey objs to array
    smileys.push(
      {
        period: { x: random(30, 200), y: random(30, 200) },
        maxSize: random(5),
        maxDist: {
          x: random(width/2),
          y: random(height/2)
      },
      pos: {
        x: random(width),
        y: random(height)
      }
    }// smiley obj end
  ); // array push end
} // end loop
}

function draw() {
  // background color
  background('0, 0, 0, 10');
  // number of smileys to array
  // based mouse pos
  let numToDraw = map( mouseX, 0, width, 0, smileys.length );
  for ( let i = 0; i < numToDraw; i++ ) {
    // draw faces
    drawSmiley( smileys [i], t );
  }

    // time for sine wave
    t++;

}

/* draw smile face */
function drawSmiley( smiley, time ) {
  // values of individual sine wave
  let x = sinePos( smiley.period.x, time );
  let y = sinePos( smiley.period.y, time );

  let pos_x = x * smiley.maxDist.x + smiley.pos.x;
  let pos_y = y * smiley.maxDist.y + smiley.pos.y;

  // drawing smiley based on obj data
  smileyFace(
    pos_x,
    pos_y,
    x * smiley.maxSize,
    y * smiley.maxSize
  );
}


/* face function */
function smileyFace( pos_x, pos_y, scale_x, scale_y ) {
  push(); // Start sandbox

  // 1. scale and position face
  translate( pos_x, pos_y );
  scale( scale_x, scale_y );

  // 2. draw face
  stroke( 0 );
  fill('yellow');
  ellipse( 0, 0, 50 );
  noStroke();
  fill( 40, 255 );
  arc( 0, 10, 40, 50, 0, PI );
  ellipse( -30, -25, 30 );
  ellipse( 30, -25, 30 );

  pop(); // sandox end
}


/* sine function */
function sinePos( timeScale, time ) {
  let val = sin( TWO_PI * time/timeScale );
  return val;
}
