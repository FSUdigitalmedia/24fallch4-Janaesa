let y = 0
let speed = 3;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(137,207,240);

  textSize(30)
  text("Tick Tock!", 145, 70)

 
  rectMode(CORNER)

  //Size of circle changes with the horizontal mouse position
  let d = map(mouseX, 0, width, 50, 150, true);
  let yPos = map2(y, 0, height, 0, height, QUADRATIC, BOTH)
  circle(width/2, yPos, yPos);

  if (y > height || y < 0) {
    speed = 0
  }
  y = y + speed;

  // rotating rectangle
  push();
  translate(200,400);
  rotate( radians(frameCount) );
  rect(0, 0, 160, 20);
  pop();

  //rotating text
  push();
  translate(200,400);
  rotate( radians(frameCount) );
  text("TIME", 160, 20)
  pop();

  console.log (d)




}
