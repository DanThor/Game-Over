class Character {
  constructor() {
    this.r = 50;
    this.x = this.r;
    this.y = 0;
    this.velocity = 0;
    this.gravity = 1;
  }

  // Enables the character to only jump from bottom
  jump() {
    if (this.y == height - this.r) {
      this.velocity = -20;
    }
  }

  // Gravity of the characters jump
  move() {
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.r); // Update this.r to be the height of the second platform in the array. 
  }

  show() {
    rect(this.x, this.y, this.r, this.r);
  }
}
