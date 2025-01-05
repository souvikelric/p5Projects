let xoff = 100;
function setup() {
  createCanvas(600, 600);
  stroke(255, 0, 200);

  background(0);
  for (var i = 0; i < width; i++) {
    let y = noise(xoff) * height;
    line(i, height, i, y);
    xoff += 0.01;
  }
}

function draw() {
  //   let x = noise(xoff) * width;
  //   circle(x, height / 2, 30);
  // increasing the xoffset very slowly, this gives the movement a steady effect
  // any value of above 1 almost gives a random like nature
}
