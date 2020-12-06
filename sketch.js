var homescreen,bmiscreen,tipscreen,trackscreen;

function setup() {
  createCanvas(displayWidth,displayHeight);
homescreen = new HomeScreen();
}

function draw() {
  background(255,5,80); 
  homescreen.display(); 
  
  drawSprites();
}