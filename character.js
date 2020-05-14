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

  update() {
    // console.log(platforms[0].x + platforms[0].w);
    // console.log(platforms[0].height);
    if (
      // character.x == platforms[0].x ||
      this.y > platforms[0].height &&
      this.x <= platforms[0].x + platforms[0].w
    ) {
      // console.log("On platform!");
      return true;
      // this.y = constrain(this.y, 0, height - (platforms[0].height + this.r));
    } else {
      return false;
      // console.log("not on box");
      // this.y = constrain(this.y, 0, height - this.r);
    }
  }
}
