var ball={
  x:30,
  y:35,
  r:30,
  color:["blue","red"],
  xspeed:0
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r,)
  fill (ball.color[0])
  ball.xspeed=3
  ball.x=ball.x+ball.xspeed
}