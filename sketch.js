var mrect,frect;

function setup() {
  createCanvas(400,400);
 mrect= createSprite(100, 300, 60, 50);


 frect=createSprite(200,200,80,40);
}

function draw() {
  background(255,255,255); 
  
  mrect.y=World.mouseY;
  mrect.x=World.mouseX;

  if(mrect.x-frect.x<mrect.width/2+frect.width/2 && frect.x-mrect.x<mrect.width/2+frect.width/2 
    && frect.y-mrect.y<mrect.height/2+frect.height/2 && mrect.y-frect.y<mrect.height/2+frect.height/2 ){
  mrect.shapeColor="blue";
  frect.shapeColor="blue";
  }

  else{

 mrect.shapeColor="red";
 frect.shapeColor="red";   
  }
  
  drawSprites();
}