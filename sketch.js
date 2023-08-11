function setup() {
  createCanvas(400, 600);
  background("red");
}

function draw() {
  
  stroke("pink");
  fill("yellow");
  
  if(mouseIsPressed) {
    rect(mouseX , mouseY ,30,40)
  }
   
   
 }