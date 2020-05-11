let character;
let platforms = [];

function setup() {
  createCanvas(600, 450);
  character = new Character();
  platforms.push(new Platform());
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

  // Controll the sequncing of the spawning platforms
  if (frameCount % 230 == 0) {
    platforms.push(new Platform());
  }

  // Draw the platforms
  for (let i = platforms.length - 1; i >= 0; i--) {
    platforms[i].show();
    platforms[i].update();

    // Remove platform from array if it's outside the canvas
    if (platforms[i].offCanvas()) {
      platforms.splice(i, 1);
      console.log(platforms.length);
    }
  }
}
