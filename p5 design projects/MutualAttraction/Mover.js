class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.radius = this.mass * 5;
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.02);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(5);
    this.acc.set(0, 0);
  }

  display() {
    fill(255, 150);
    noStroke();
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }
}
