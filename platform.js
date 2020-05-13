class Platform {
  constructor() {
    this.height = Math.floor(random(height / 2)); // Can't jump 50% so add a minus param that make it jumpable
    this.x = width;
    this.w = width / 2;
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
