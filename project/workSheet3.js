function setup() {
    createCanvas(400, 400);
    background(146, 232, 201);
    frameRate(3)
    let eyes = [
    eyeOpen(200, 150),
    eyeClosing1(200, 150),
    eyeClosing2(200, 150),
    ]
}

var i = 0

function draw() { 
    eyes[i]
    i ++
}
  
function eyeOpen(x, y) { // Creates Eye Centered on X, Y coords
    let leftx = (x-40)
    let rightx= (x+40)
   
    strokeWeight(2)
    stroke("black");
    fill("white");
    ellipse(leftx, y, 50, 20);
    strokeWeight(1)
    fill("blue");
    circle(leftx, y, 20);
    fill("black");
    circle(leftx, y, 10);
    fill("white");
    circle((leftx-2.5), (y-2.5), 5);
    
    strokeWeight(2)
    stroke("black");
    fill("white");
    ellipse(rightx, y, 50, 20);
    strokeWeight(1)
    fill("blue");
    circle(rightx, y, 20);
    fill("black");
    circle(rightx, y, 10);
    fill("white");
    circle((rightx-2.5), (y-2.5), 5);
}

function eyeClosing1(x, y) { // Creatd Closing Eye from X, Y coords
    let leftx = (x-40)
    let rightx= (x+40)
    
    strokeWeight(1) // Eye
    stroke("black");
    fill("white");
    ellipse(leftx, y, 50, 20);
    fill("blue");
    circle(leftx, y, 20);
    fill("black");
    circle(leftx, y, 10);
    fill("white");
    circle((leftx-2.5), (y-2.5), 5);
    
    stroke(146, 232, 201); // Eyelid
    noFill();
    strokeWeight(4)
    ellipse(leftx, y, 60, 20)
    strokeWeight(2); 
    stroke("black");
    noFill();
    ellipse(leftx, y, 50, 15);
    
    strokeWeight(1); // Eye
    stroke("black");
    fill("white");
    ellipse(rightx, y, 50, 15);
    fill("blue");
    circle(rightx, y, 20);
    fill("black");
    circle(rightx, y, 10);
    fill("white");
    circle((rightx-2.5), (y-2.5), 5);

    stroke(146, 232, 201); // Eyelid
    noFill();
    strokeWeight(4)
    ellipse(rightx, y, 60, 20)
    strokeWeight(2); 
    stroke("black");
    noFill();
    ellipse(rightx, y, 50, 15);

}

function eyeClosing2(x, y) { // Creatd Closing Eye from X, Y coords
    let leftx = (x-40)
    let rightx= (x+40)
    
    strokeWeight(1) // Eye
    stroke("black");
    fill("white");
    ellipse(leftx, y, 50, 20);
    fill("blue");
    circle(leftx, y, 20);
    fill("black");
    circle(leftx, y, 10);
    fill("white");
    circle((leftx-2.5), (y-2.5), 5);
    
    
    stroke(146, 232, 201); // Eyelid
    noFill();
    strokeWeight(8)
    ellipse(leftx, y, 60, 20)
    strokeWeight(2); 
    stroke("black");
    noFill();
    ellipse(leftx, y, 50, 10);
    
    strokeWeight(1); // Eye
    stroke("black");
    fill("white");
    ellipse(rightx, y, 50, 10);
    fill("blue");
    circle(rightx, y, 20);
    fill("black");
    circle(rightx, y, 10);
    fill("white");
    circle((rightx-2.5), (y-2.5), 5);

    stroke(146, 232, 201); // Eyelid
    noFill();
    strokeWeight(8)
    ellipse(rightx, y, 60, 20)
    strokeWeight(2); 
    stroke("black");
    noFill();
    ellipse(rightx, y, 50, 10);
}