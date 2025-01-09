function setup() {
  createCanvas(400, 400);
  background( 146, 232, 201 );
}

function draw() {  
  eye(200, 150)  
}

function eye(x, y) { // Creates Eye Centered on X, Y coords
  stroke("blue")
  fill("white")
  ellipse((x-40), y, 50, 20)
  fill("green")
  circle((x-40), y, 20)
  fill("black")
  circle((x-42.5), (y-2.5), 5)

  stroke("blue")
  fill("white")
  ellipse((x+40), y, 50, 20)
  fill("green")
  circle((x+40), y, 20)
  fill("black")
  circle((x+37.5), (y-2.5), 5)
}
  