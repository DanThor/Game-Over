let character;
function setup() {
  createCanvas(600, 450);
  character = new Character();
}

function draw() {
  background(220);
  character.show();
  character.move();
}
