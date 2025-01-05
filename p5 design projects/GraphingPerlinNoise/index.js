var inc = 0.01;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
}

function draw() {
  //   background(51);
  //   stroke(255);
  //   noFill();
  loadPixels();
  var xoff = 0;
  for (var x = 0; x < width; x++) {
    var yoff = 0;
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      var b = noise(xoff, yoff) * 255;
      pixels[index + 0] = b;
      pixels[index + 1] = b;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;
      yoff += inc;
    }
    xoff += inc;
  }
  updatePixels();
  noLoop();
}
