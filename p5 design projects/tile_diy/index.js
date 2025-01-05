function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  let size = 200;

  let rows = width / size;
  let cols = height / size;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = r * size + size / 2;
      let y = c * size + size / 2;
      drawPattern(x, y, size);
    }
  }
}

function drawPattern(x, y, size) {
  rectMode(CENTER);
  push();
  translate(x, y);
  //   rotate(PI / 4);
  fill(random(100, 150), 0, random(150, 255));
  square(0, 0, size);
  fill(200, 80, 230);
  noStroke();
  rect(0, 0, size / 5, size);
  rect(0, 0, size, size / 5);
  stroke(51);
  fill(250, 10, 250);
  circle(0, 0, 30);
  fill(110, 0, 255);
  let srx = (-size / 10 - size / 2) / 2;
  rect(srx, 0, size / 6, size / 10);
  rect(-srx, 0, size / 6, size / 10);
  rect(0, srx, size / 10, size / 6);
  rect(0, -srx, size / 10, size / 6);
  fill(54, 48, 98);
  circle(-size / 2 + size / 20, 0, size / 25);
  circle(-size / 10 - size / 20, 0, size / 25);

  circle(size / 2 - size / 20, 0, size / 25);
  circle(size / 10 + size / 20, 0, size / 25);

  circle(0, -size / 2 + size / 20, size / 25);
  circle(0, -size / 10 - size / 20, size / 25);

  circle(0, size / 2 - size / 20, size / 25);
  circle(0, size / 10 + size / 20, size / 25);

  noStroke();
  fill(218, 12, 129);
  square(srx, srx, 40);
  square(-srx, srx, 40);
  square(-srx, -srx, 40);
  square(srx, -srx, 40);
  pop();
}
