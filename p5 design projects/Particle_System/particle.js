class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), 0);
    this.acc = createVector(0, 0);
    this.r = 5;
    this.lifetime = 255;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.lifetime -= 5;
  }

  isDead() {
    return this.lifetime <= 0;
  }

  applyForce(f) {
    this.acc.add(f);
  }

  display() {
    fill(this.lifetime);
    stroke(this.lifetime);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}
