let xoff, yoff;
let rows, cols;
let res = 10;
let inc = 0.04;
let zoff = 0;
var flowfield;
var particles = [];
function setup() {
  // Trying to create a Perlin Map.
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100, 100);
  pixelDensity(1);
  rows = height / res;
  cols = width / res;
  for (let j = 0; j < 500; j++) {
    particles.push(new Particle());
  }
  flowfield = new Array(cols * rows);
  yoff = 0.1;
  // noStroke();
  background(255);
}

function draw() {
  //   loadPixels();
  xoff = 0.1;
  for (var x = 0; x < cols; x++) {
    yoff = 0.01;
    for (var y = 0; y < rows; y++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      flowfield[index] = v;
      stroke(0);
      yoff += inc;
      // push();
      // translate(x * res, y * res);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, res, 0);
      // pop();
    }
    xoff += inc;
    zoff += 0.0005;
  }

  for (let p of particles) {
    p.follow(flowfield);
    p.update();
    p.edges();
    p.display();
  }

  // console.log(flowfield);
  // noLoop();
}
