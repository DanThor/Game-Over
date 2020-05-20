"use strict";

class Platform {
  constructor(
    h = Math.floor(random(100, height / 2 - 50)),
    x = width,
    w = width * 0.5,
  ) {
    this.height = h;
    this.x = x;
    this.w = w;
    this.speed = 5;
  }

  show(platform) {
    image(platform, this.x, height - this.height, this.w, this.height / 2);
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
