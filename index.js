let character;
let platforms = [];
let start;
let score;
const game = new Game();

function setup() {
  createCanvas(600, 450);
}

// Jumps when pressing the "enter" tab
function keyPressed() {
  if (key == " " && start) {
    character.jump();
  }

  if (key == "s" && !start) {
    console.log("pressing S");
    game.newGame();
    start = true;
  }
}

function draw() {
  clear();
  background(220);
  if (!start) {
    game.startScreen();
  } else {
    character.show();
    character.move();

    if (character.intersect()) {
      character.y = constrain(
        character.y,
        0,
        height - (platforms[0].height + character.r)
      );
    }

    if (platforms.length > 1) {
      if (character.collide()) {
        noLoop();
        start = false;
        game.restartScreen();
      }
    }

    // Controll the sequncing of the spawning platforms
    if (frameCount % 100 == 0) {
      platforms.push(new Platform());
    }

    // Draw the platforms
    for (let i = platforms.length - 1; i >= 0; i--) {
      platforms[i].show();
      platforms[i].update();

      // Remove platform from array if it's outside the canvas
      if (platforms[i].offCanvas()) {
        // Make this splice later
        platforms.splice(i, 1);
        game.score++;
      }
    }
  }
}
