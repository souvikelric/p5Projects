let xoff, yoff;
let rows, cols;
let res = 5;
let inc = 0.1;
function setup() {
  // Trying to create a Perlin Map.
  createCanvas(800, 600);
  pixelDensity(1);
  rows = height / res;
  cols = width / res;
  xoff = 1;
  yoff = 1;
  noStroke();
}

function draw() {
  background(0);
  //   loadPixels();
  for (var x = 0; x < cols; x++) {
    yoff = 0.01;
    for (var y = 0; y < rows; y++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff);
      if (r > 0.5) {
        if (r > 0.7) {
          fill(67, 103, 168);
        } else {
          fill(35, 56, 150);
        }
      } else {
        if (r < 0.2) {
          fill(24, 82, 44);
        } else {
          fill(81, 171, 65);
        }
      }

      rect(x * res, y * res, res, res);
      yoff += inc;
    }
    xoff += inc;
  }

  //   updatePixels();
  noLoop();
}
