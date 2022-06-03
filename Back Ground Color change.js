var box

function setup() {
  createCanvas(1000,600);
  
  box=createSprite(500,400,50,50)
  box.shapeColor="Red"
}
Text.shapeColor="grey"
function draw() 
{
  background("black");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x+=5
    background("blue")
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x-=5
    background("yellow")
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y-=5
    background("aqua")
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y+=5
    background("orange")
  }

  drawSprites()
}




