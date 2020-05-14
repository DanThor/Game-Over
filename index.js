let character;
let platforms = [];

function setup() {
  createCanvas(600, 450);
  character = new Character();
  platforms.push(new Platform());
  console.log(platforms);
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
  // character.update();

  if (character.update()) {
    character.y = constrain(
      character.y,
      0,
      height - (platforms[0].height + character.r)
    );
  } else {
    character.y = constrain(character.y, 0, height - character.r);
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
      platforms.splice(i, 1);
    }
  }
}
