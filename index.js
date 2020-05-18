let character;
let startCount = 0;
let platforms = [];

function setup() {
  createCanvas(600, 450);
  platforms.push(new Platform(150, 200, 300));
  platforms.push(new Platform());
  character = new Character();
}

// Jumps when pressing the "enter" tab
function keyPressed() {
  if (key == " ") {
    character.jump();
  }
}

function draw() {
  background(220);
  character.show();
  character.move();

  if (character.intersect()) {
    character.y = constrain(
      character.y,
      0,
      height - (platforms[0].height + character.r)
    );
  } else {
    character.y = constrain(character.y, 0, height - character.r);
  }

  if (platforms.length > 1) {
    if (character.collide()) {
      noLoop();
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
    }
  }
}
