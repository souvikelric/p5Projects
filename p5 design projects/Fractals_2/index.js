let len = 50;
let sides = 20;
let angle = 360 / sides;
let maxLevel = 10;
let spread = 0;
let branches = 2;
let stretch;
let inc = 0.1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  stretch = width / 4;
}

function draw() {
  //   colorMode(RGB);
  background(0, 0, 0);
  //   colorMode(HSB, 360, 100, 100);
  translate(width / 2, height / 2);
  stroke(255);
  stroke(floor(spread), 90, 50);
  strokeWeight(4);
  stretch = map(mouseY, 0, height, width / 2, width / 10);
  //   spread = map(mouseX, 0, width, 30, 359);
  for (var s = 0; s < sides; s++) {
    rotate(angle);
    push();
    drawBranch(1, 50);
    pop();
  }

  spread += inc;
  if (spread >= 360 || spread <= 0) {
    inc *= -1;
  }

  //   console.log(spread);
}

function drawBranch(level, len) {
  if (level > maxLevel) return;
  line(0, 0, len, 0);
  translate(len, 0);
  line(0, 0, 0, width / 4);
  translate(0, width / 4);
  push();
  let r = floor(random(-1, 1));
  rotate(spread);
  drawBranch(level + 1);
  pop();
}

function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 50);
  }
}
