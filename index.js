let character;
function setup() {
  createCanvas(600, 450);
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
}
