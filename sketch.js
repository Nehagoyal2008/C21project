var bullet, wall;
var  thickness, speed, weight;
var wallLeftEdge;


function setup() {
  createCanvas(1600,400);
  speed=random(221,321);
  weight=random(30,52);

 bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";

bullet.velocityX = speed;

thickness=random(22,83);

}

function draw() {
  background("black");

  if(hascollide(bullet,wall))
  {
    var damage=0.5 * speed*speed/(thickness*thickness*thickness);
  
  
  if(damage<40)
  {
    wall.shapeColor="green";
  }
  if(damage>100)
  {
    wall.shapeColor="red";
  }
  }

bullet.collide(wall);


  drawSprites();
  hascollide(bullet,wall);
}

function hascollide(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  bulletLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge);
  {
    return true;
  }
  return false;
}

