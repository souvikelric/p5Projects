let c2;
let star;
let slider;
let size;
let label;
function preload() {
  star = loadImage("image-1.jpg");
}
function setup() {
  createCanvas(800, 600);
  label = createElement("label", "Particle Size");

  slider = createSlider(2, 40, 40);
  background(0);
  //   image(star, 0, 0);
  c2 = createGraphics(star.width, star.height);
  c2.image(star, 0, 0, 800, 600);
}

function draw() {
  for (var i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let cl = color(c2.get(x, y));
    noStroke();
    size = slider.value();
    fill(cl);
    rect(x, y, size, size);
  }
}
