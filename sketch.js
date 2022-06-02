var box

function setup() {
  createCanvas(1000,800);
  
  box=createSprite(500,400,50,50)
  
}

function draw() 
{
  background("green");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x+=5
  }
  drawSprites()
}




