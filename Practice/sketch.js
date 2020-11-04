
var Play=1;
var END=0;
var GameState=Play;

var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,200);
  
  
  monkey=createSprite(30,170,10,10);

  monkey.addAnimation("monkey running",monkey_running);
  
  monkey.scale=0.07;

  ground=createSprite(0,196,10000,10);
  
score=0;
  
  FoodGroup=createGroup();
  hurdleGroup=createGroup();
  
  survivaltime=0;
  
}


function draw() {
  
  background("white");
  

  text("score:"+score,500,50);
  
  stroke("Black")
  textSize(20);
  fill("black")
  text("Survival Time:"+survivaltime,200,50);
  
 
  
  
  
  if(GameState===Play){
     
     
      bananas();
obstacles();
    
     survivaltime=Math.ceil(frameCount/frameRate())
    
  if(keyDown("space")&&monkey.y>=162){
     
     monkey.velocityY=-12;
     
     }
     
      monkey.velocityY=monkey.velocityY+0.5     
  
  monkey.collide(ground) 
     
     
      if(monkey.isTouching(FoodGroup)){
     
        score=score+1;
     
     FoodGroup.destroyEach();
     
     
     
     }
    
    
    if(monkey.isTouching(hurdleGroup)){
       
       
       GameState=END;
       
       
       }
     
     
     }else if(GameState===END){
              
           hurdleGroup.setVelocityXEach(0);
              
          FoodGroup.setVelocityXEach(0);    
              
              
         hurdleGroup.setLifetimeEach(-1);     
        FoodGroup.setLifetimeEach(-1);  
       
       monkey.velocityY=0;
       ground.velocityX=0;
              
              }
  
  

   
  

 
  
  
  
  
  
  
  
  
  
  

  drawSprites();
}

function obstacles(){
  
  
  if(frameCount%70===0){
     
     obstacle=createSprite(590,180,15,20)
     
     obstacle.velocityX=-(10+score/4);
     
     obstacle.lifetime=300;  
     
     obstacle.addImage("obstacle",obstacleImage)
     
    obstacle.scale=0.06;
    
    hurdleGroup.add(obstacle);
     } 
  
}

function bananas(){
  
  if(frameCount%60===0){
     
     banana=createSprite(590,40,15,20)
     
     
     banana.velocityX=-(10+score/4);
    
    banana.lifetime=300;
     
     banana.addImage("banana",bananaImage)
     
     banana.scale=0.07;
     
    banana.y=Math.round(random(10,120))
     
    FoodGroup.add(banana);
     }
  
  
  
  
  
  
  
  
  
}


