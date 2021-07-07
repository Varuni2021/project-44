var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);

  if(score === 3){
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("Treasure unlocked", 250,250);
  };

  clues();
  security.display();

  

  drawSprites();
}