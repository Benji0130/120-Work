let rows, x_space;
let cols, y_space;

function setup() {
  createCanvas( windowWidth, 500 );
  frameRate( 6 );

  x_space = 55;
  rows = floor( width / x_space );
  y_space = 55;
  cols =floor( height / y_space );
}



function draw() {
  background( 'black' );


  noStroke();

  // Making 'x' a dummy value.
  let x = 1;
  let y = 3;
  while ( x != 0 ){
      x = floor(random() * rows);
      y = floor(random() * cols);

      fill( random(150,350), random(150,350), random(150,350) );
      ellipse( x*x_space, y*y_space, random(15, 60) );
  }
}
