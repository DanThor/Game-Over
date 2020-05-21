"use strict";
let gameOverSound;
let jumpSound;
let themeSong;
let fontRegular;
let characterSprite;
let backgroundImg;
let platformImg;
let character;
let platforms = [];
let start;
let firstGame = true;
let spawnFrequency;
let scoreCount = 0;
let platformSpeed;
let platformWidth;
const game = new Game();

function preload() {
  jumpSound = loadSound("audio/jump.mp3");
  gameOverSound = loadSound("audio/game_over.mp3");
  themeSong = loadSound("audio/game_theme.mp3");
  fontRegular = loadFont("fonts/arcadeclassic.ttf");
  characterSprite = loadImage("images/DinoSprite.png");
  backgroundImg = loadImage("images/background.png");
  platformImg = loadImage("images/platform.png");
}

function setup() {
  createCanvas(600, 450);
  themeSong.setVolume(0.2);
  themeSong.loop();
}

// Jumps when pressing the "enter" tab
function keyPressed() {
  if (key == " " && start) {
    jumpSound.play();
    jumpSound.setVolume(0.1);
    character.jump();
  }

  if (key == " " && !start) {
    start = true;
    game.score = 0;
    platforms = [];
    game.newGame();
    firstGame = false;
    spawnFrequency = 80;
    scoreCount = 0;
    platformSpeed = 5;
    platformWidth = 0.5;
    loop();
  }
}

function draw() {
  clear();
  image(backgroundImg, 0, 0, width, height);
  if (!start && firstGame) {
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
      gameOverSound.play();
      gameOverSound.setVolume(0.05);
      platforms = [];
      start = false;
      game.restartScreen();
      noLoop();
    }
  }

  // Controll the sequncing of the spawning platforms
  if (frameCount % spawnFrequency == 0) {
    if (game.score % 10 == 0 && game.score > 0) {
      platformSpeed++;
      spawnFrequency - 10;

      if (platformWidth < 0.7) {
        platformWidth = platformWidth + 0.1;
      }
    }

    platforms.push(
      new Platform(
        Math.floor(random(100, height / 2 - 50)),
        width,
        width * platformWidth,
        platformSpeed
      )
    );
  }

  // Draw the platforms
  for (let i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show(platformImg);
    platforms[i].update();

    // Remove platform from array if it's outside the canvas
    if (platforms[i].offCanvas()) {
      platforms.splice(i, 1);
      game.score++;
    }
  }
}
