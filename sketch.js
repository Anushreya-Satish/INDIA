var bg, bg2, form, system, code, security;
var score = 0;

function preload() {
  bg = loadImage("Bg1.png");
  //load image for the treasure background
  bg2 = loadImage("Bg2.jpg");
}

function setup() {
  createCanvas(1200, 700);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);

  clues();
  security.display();

  fill("orange");
  textFont("Forte");
  text("Score - " + score, 1100, 690);

  // add code for changing the background to the treasure background
  if (score === 7) {
    clear();
    background(bg2);
  }

  drawSprites();
}
