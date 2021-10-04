var bg, player, bg_img, player_img

function preload(){
   bg_img=loadImage("images/31.jpg")
   }
function setup() {
  createCanvas(800,400);

  player= new Player(600,300,20,20);
  
}

function draw() {
  background(bg_img);  
  drawSprites();
}