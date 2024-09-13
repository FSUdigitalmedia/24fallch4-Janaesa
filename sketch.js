let y = 0
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);

  //Size of circle changes with the horizontal mouse position
  let d = map(mouseX, 0, width, 50, 150, true);
  let yPos = map2(y, 0, height, 0, height, QUADRATIC, BOTH)
  circle(width/2, yPos, yPos);

  if (y > height || y < 0) {
    speed = 0
  }
  y = y + speed;



}
