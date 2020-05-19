"use strict";

class Game {
  constructor() {
    this.score = 0;
  }

  newGame() {
    platforms.push(new Platform(150, 200, width * 0.9));
    character = new Character();
  }

  startScreen() {
    tint(255, 127);
    textSize(72);
    fill("#3d6090");
    textStyle(BOLD);
    text("SKY DINO", 135, 130);
    textSize(32);
    fill("#3d6090");
    textStyle(BOLD);
    text("Press S to start the game", 115, 220);
    textSize(24);
    fill("#3d6090");
    text("Press SPACE to jump", 185, 270);
  }

  restartScreen() {
    // tint(255, 127);
    textSize(42);
    textStyle(BOLD);
    fill("#3d6090");
    text("Game Over", 200, 75);
    textSize(32);
    fill("#3d6090");
    text("Score: ", 205, 125);
    textSize(32);
    fill("#3d6090");
    textStyle(BOLD);
    text("Press S to restart the game", 110, 200);
  }
}
