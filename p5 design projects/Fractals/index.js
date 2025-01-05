let len = 100;
let sides = 60;
let maxLevel = 100;
let spread = 45;
let angle = 360 / sides;
let zoom = 0.96;
let r2 = 100;
let circles = 5;
var colors = [];
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  //designing a fractal based on multiple levels and straight lines bending at angles
  // angle, zoom ( scale ) and other parameters are mapped by mousePosition . Move the mouse to animate shape

  // for deciding level colors
  //   for (var c = 0; c < maxLevel; c++) {
  //     colors.push(color(random(255), random(255), random(255)));
  //   }
}

function draw() {
  background(0);
  stroke(255);

  // settings mapped to mouse

  spread = map(mouseX, 0, width, 0, 360);
  zoom = map(mouseY, 0, height, 0.96, -0.96);
  r2 = map(mouseX, 0, width, 50, width / 2 - 50);
  circles = floor(map(mouseY, 0, height, 5, 12));
  let r3 = map(mouseX, 0, width / 2, width / 2 - 50, 50);

  //

  strokeWeight(6);
  translate(width / 2, height / 2);

  for (var i = 0; i < sides; i++) {
    push();
    rotate(angle * i);
    drawBranch(1);
    pop();
  }

  fill(250, 0, 200);
  circle(0, 0, 30);
  noFill();
  stroke(200, 0, 255);
  circle(0, 0, 80);
  fill(200, 0, 240);
  for (var i = 0; i < circles; i++) {
    let x = r2 * cos((360 / circles) * i);
    let y = r2 * sin((360 / circles) * i);
    stroke(255);
    circle(x, y, 40);
  }
  for (var i = 0; i < circles; i++) {
    let x = r3 * cos((360 / circles) * i);
    let y = r3 * sin((360 / circles) * i);
    stroke(255);
    rectMode(CENTER);
    square(x, y, 20);
  }
}

function drawBranch(level) {
  if (level > maxLevel) return;

  line(0, 0, len, 0);
  translate(len, 0);
  scale(0.96, zoom);
  push();
  rotate(spread);
  drawBranch(level + 1);
  pop();
  rectMode(CENTER);
  noFill();
}
