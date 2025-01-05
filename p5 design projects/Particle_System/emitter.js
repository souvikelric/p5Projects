class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }
  emit() {
    this.particles.push(new Particle(this.pos.x, this.pos.y));
  }
  display() {
    for (let p of this.particles) {
      p.applyForce(createVector(0, 0.1));
      p.update();
      p.display();
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
