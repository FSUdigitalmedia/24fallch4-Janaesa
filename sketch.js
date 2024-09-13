let y = 0
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  let d = map(mouseX, 0, width, 50, 150, true);
  circle(width/2, y, d);
  

}
