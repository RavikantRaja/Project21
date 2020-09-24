var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1366,400);
  bullet = createSprite(75, 200, 50, 25);
  wall = createSprite(1230,200,60,height/2);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  wall.shapeColor = rgb(80,80,80);
  bullet.shapeColor = "white";
}

function draw() {
  background("black");
  
  if(keyDown("space"))
  {
    wall.width = thickness;

    bullet.x = 75;
    bullet.y = 200;
    bullet.velocityX = speed;
  }

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
  if(damage<10){bullet.shapeColor = color(0,255,0)}
  if(damage>10){bullet.shapeColor = color(255,0,0)}
  }
  drawSprites();
}

function hasCollided(xyz,abc)
{
  bulletRightEdge = xyz.x+xyz.width;
  wallLeftEdge = abc.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}