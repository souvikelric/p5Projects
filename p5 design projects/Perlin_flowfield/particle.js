class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 4;
    this.col = color(random(360), 90, 80);
    this.prev = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(this.maxSpeed);
    this.acc.setMag(0);
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePosition();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePosition();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePosition();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePosition();
    }
  }

  follow(vectors) {
    let x = floor(this.pos.x / res);
    let y = floor(this.pos.y / res);
    let index = x + y * cols;
    let f = vectors[index];
    this.applyForce(f);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  updatePosition() {
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  display() {
    stroke(this.col);
    strokeWeight(2);
    line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
    this.updatePosition();
    // point(this.pos.x, this.pos.y);
  }
}
