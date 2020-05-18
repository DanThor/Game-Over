class Character {
  constructor() {
    this.r = 50; // maybe change the name so size instead or r for radius?
    this.x = this.r;
    this.y = 0;
    this.velocity = 0;
    this.gravity = 1;
  }

  // Enables the character to jump from bottom or on a block
  jump() {
    if (
      this.y == height - this.r ||
      height - (this.y + this.r) == platforms[0].height
    ) {
      this.velocity = -20;
    }
  }

  // Gravity of the characters jump
  move() {
    this.y += this.velocity;
    this.velocity += this.gravity;
    // this.y = constrain(this.y, 0, height - this.r); // Update this.r to be the height of the second platform in the array.
  }

  show() {
    rect(this.x, this.y, this.r, this.r);
  }

  intersect() {
    if (
      this.y > platforms[0].height &&
      this.x <= platforms[0].x + platforms[0].w
    ) {
      return true;
    }
  }

  collide() {
    if (this.y - this.r >= height) {
      return true;
    }
  }
}
