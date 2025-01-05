let movers = [];
let num = 300;
function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < num; i++) {
    movers.push(new Mover(random(width), random(height), 2));
  }
}

function draw() {
  background(51);
  for (let m of movers) {
    m.update();
    m.display();
  }
}
