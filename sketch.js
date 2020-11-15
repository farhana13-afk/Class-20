var fixedR, movingR;
var rect1, rect2;



function setup() {
  createCanvas(800,400);
  fixedR= createSprite (400,200,40,50);
  fixedR.shapeColor= "purple";
  movingR= createSprite(200,300,40,50);
  movingR.shapeColor="purple";
  rect1 = createSprite(400, 10, 60, 60);
  rect1.shapeColor= "green";
  rect1.velocityY= 4;
  rect2 = createSprite(400, 390, 60, 60);
  rect2.shapeColor="green";
  rect2.velocityY=-4;
}

function draw() {
  background("blue");  
   movingR.x = mouseX;
   movingR.y= mouseY;

   if(movingR.x - fixedR.x < movingR.width/2 + fixedR.width/2 
    && fixedR.x - movingR.x < movingR.width/2 + fixedR.width/2
    && movingR.y - fixedR.y < movingR.height/2 + fixedR.height/2
    && fixedR.y - movingR.y < movingR.height/2 + fixedR.height/2){
    fixedR.shapeColor= "pink";
    movingR.shapeColor= "pink"
   } else{
     fixedR.shapeColor= "purple";
     movingR.shapeColor="purple";
   }
   if(rect1.y - rect2.y< rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y< rect1.height/2 + rect2.height/2){
      rect1.velocityY= rect1.velocityY * (-1);
      rect2.velocityY= rect2.velocityY * (1);
    }
    if( rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.x - rect1.x < rect1.width/2 + rect2.width/2){
      rect1.velocityX= rect1.velocityX * (-1);
      rect2.velocityX= rect2.velocityX * (1);
    }
  drawSprites();
}