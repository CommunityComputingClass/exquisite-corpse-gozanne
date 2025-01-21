let eyes = [eyeOpen, eyeClosing1, eyeClosing2, eyeClosing1]
let i = 0

function setup() {
    createCanvas(400, 400);
    background(146, 232, 201);
    frameRate(10)
}

function draw() { 
    //background(146, 232, 201);
    eyes[i](mouseX, mouseY);
    i++;
    if (i > 3) {
        i = 0;
    }
}
  
function eyeOpen(x, y) { // Creates Eye Centered on X, Y coords
    let leftx = (x-50)
    let rightx= (x+50)
   
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
    let leftx = (x-50)
    let rightx= (x+50)
    
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
    let leftx = (x-50)
    let rightx= (x+50)
    
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