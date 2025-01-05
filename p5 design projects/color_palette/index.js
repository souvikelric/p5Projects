let parts;
let size;
let r;
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  parts = 3;

  r = random(0, 360);
}

function draw() {
  background(0);

  size = width / parts;
  for (var j = 0; j < parts; j++) {
    for (var i = 0; i < parts; i++) {
      let x = size * i;
      let y = size * j;
      let hue = (r + (360 / parts) * i) % 360;
      let bright = (((360 / parts) * j) / 2) % 100;
      fill(hue, 90, bright);
      rect(x, y, size, size);
    }
  }
  //   parts += 0.5;
}

function mousePressed() {
  parts = parts + 1;
  r = random(0, 360);
}
