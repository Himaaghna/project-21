var bg,sleep,brush,gym,eat,drink,move,bath;
var astronaut;




function preload() {
bg=loadImage("images/iss.png");
bath=loadAnimation("images/bath1.png","images/bath2.png");
sleep=loadImage("images/sleep.png");
brush=loadImage("images/brush.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
gym=loadAnimation("images/gym1.png","images/gym2.png");
move=loadAnimation("images/move1.png","images/move.png");

}






function setup() {
  createCanvas(800,400);
  astronaut=createSprite(300,230);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);  
 if (keyDown("UP_ARROW")) {
   astronaut.addImage("brushing",brush);
   astronaut.changeImage("brushing");
   astronaut.y=230;
   astronaut.velocityX=0;
   astronaut.velocityY=0;
   
 }
 
 if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y=230;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}
 
if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=230;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}
 
if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=230;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}

if (keyDown("M")) {
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=230;
  astronaut.velocityX=+3;
  astronaut.velocityY=0;
  
}

drawSprites();
}