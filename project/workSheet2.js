function setup() {
  createCanvas(400, 400);
  background( 146, 232, 201 );
}

function draw() {  
  eye(200, 150, 50-0.001)  
}

function eye(x, y) { // Creates Eye Centered on X, Y coords
  let leftx = (x-40)
  let rightx= (x+40)

  stroke("black");
  fill("white");
  ellipse(leftx, y, 50, 20);
  fill("blue");
  circle(leftx, y, 20);
  fill("black");
  circle(leftx, y, 10);
  fill("white");
  circle((leftx-2.5), (y-2.5), 5);

  stroke("black");
  fill("white");
  ellipse(rightx, y, 50, 20);
  fill("blue");
  circle(rightx, y, 20);
  fill("black");
  circle(rightx, y, 10);
  fill("white");
  circle((rightx-2.5), (y-2.5), 5);
}
  