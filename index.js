"use strict";
let fontRegular;
let characterSprite;
let backgroundImg;
let platformImg;
let character;
let platforms = [];
let start;
let score;
const game = new Game();

function preload() {
  fontRegular = loadFont("fonts/arcadeclassic.ttf");
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

  if (key == " " && !start) {
    start = true;
    game.score = 0;
    platforms = []; 
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
    character.show(characterSprite);
    character.move();
    game.showCurrentScore();

    if (character.intersect()) {
      character.y = constrain(
        character.y,
        0,
        height - (platforms[0].height + character.r)
      );
    }


      if (character.collide()) {
        noLoop();
        platforms = [];
        start = false;
        game.restartScreen();
        console.log("res");
      }
    }

    // Controll the sequncing of the spawning platforms
    if (frameCount % 80 == 0) {
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
        game.score++;
      }
    }
  }
