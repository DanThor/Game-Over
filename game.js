class Game {
  constructor() {
    this.score = 0;
  }

  newGame() {
    platforms.push(new Platform(150, 200, width * 0.9));
    character = new Character();
  }

  startScreen() {
    textSize(32);
    fill(0, 102, 153);
    text("Press S to start game", 150, 225);
    textSize(24);
    fill(0, 102, 153);
    text("Press SPACE to jump", 185, 270);
  }

  restartScreen() {
    textSize(32);
    fill(0, 102, 153);
    text("Game Over", 150, 225);
    textSize(24);
    fill(0, 102, 153);
    text("Score: ", 185, 270);
  }
}
