"use strict";

let characterSprite;
let backgroundImg;
let platformImg;
let character;
let startCount = 0;
let platforms = [];
let start;
const game = new Game();

function preload() {
  characterSprite = loadImage("images/DinoSprite.png");
  backgroundImg = loadImage("images/background.png");
  platformImg = loadImage("images/platform.png");
}

function setup() {
  createCanvas(600, 450);
}

// Jumps when pressing the "enter" tab
function keyPressed() {
  if (key == " " && start) {
    character.jump();
  }

  if (key == "s" && !start) {
    start = true;
    game.newGame();
    loop();
  }
}

function draw() {
  clear();
  image(backgroundImg, 0, 0, width, height);
  if (!start) {
    game.startScreen();
  } else {
    noTint();
    character.show(characterSprite);
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
        platforms = [];
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
      platforms[i].show(platformImg);
      platforms[i].update();

      // Remove platform from array if it's outside the canvas
      if (platforms[i].offCanvas()) {
        // Make this splice later
        platforms.splice(i, 1);
      }
    }
  }
}
