var bullet,wall;
var bulletSpeed,bulletWeight;
var thickness;




function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white"
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80)
  bulletSpeed=random(223,321);
  bulletWeight=random(30,52);
}

function draw() {
  background(255,255,255);  
  car.velocityX=bulletSpeed;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness)
    if(damage>10){
    car.shapeColor="red";
  }
  if(damage<10){
    car.shapeColor="green";
  }
  
  }
  drawSprites();
  }
