let emitters = [];
function setup() {
  createCanvas(600, 600);
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY)); // press mouse to create a particle emitter
}

function draw() {
  background(0);
  for (let e of emitters) {
    e.emit();
    e.display();
    e.update();
  }
  let sum = 0;
  for (let e of emitters) {
    sum = sum + e.particles.length;
  }
  text(sum, width - 30, 70);
}
