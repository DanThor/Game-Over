class Platform {
  constructor(h = Math.floor(random(height / 2)), x = width, w = width / 2) {
    this.height = h;
    this.x = x;
    this.w = w;
    this.speed = 4;
  }

  show() {
    fill(255);
    rect(this.x, height - this.height, this.w, this.height);
  }

  // Moves platform from right to left
  update() {
    this.x -= this.speed;
  }

  // Calculate off canvas
  offCanvas() {
    return this.x < -this.w;
  }
}
