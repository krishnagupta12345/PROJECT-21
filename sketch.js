
var thickness,wall
var speed,weight,bullet

function setup() {
  createCanvas(1600,400);
  bullet=createSprite (400, 200, 20, 50);
  bullet.shapeColor=color(255)
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(230,230,230)
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed

}

function draw() {
  background(0);  
if(hasCollided(bullet,wall) )
{
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}
if( damage<10)
{
  wall.shapeColor=color(0,0,255)
}
}

  drawSprites();
}
function hasCollided(bullet,wall)
{bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge  )
{
  return true
}
return false;


}
