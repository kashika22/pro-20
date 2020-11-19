var car,car2,wall,wall2;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,100,20,10);
  car.shapeColor = "orange";
  car.velocityX = random(10,80);
  car.speed=car.velocityX;    
  car.weight=random(800,1200);


  car2=createSprite(50,300,30,10);
  car2.shapeColor = "blue";
  car2.velocityX = random(50,80);
  car2.speed=car2.velocityX;
  car2.weight=random(1800,2000);

  console.log(car.speed);
  
  console.log(car2.speed);

  console.log(car.weight);
  
  console.log(car2.weight);


  wall=createSprite(800,200,1600,60);
  wall.shapeColor=color(80,80,80);


  wall2=createSprite(1500,200,60,height);
  wall2.shapeColor=color(80,80,80);


}

function draw() {
  background("pink");  
  
  if(car.isTouching(wall2)){
    
        var deformation=0.5*car.weight*car.speed*car.speed/22500;
        
        console.log(deformation);
    
        car.velocityX=0;
        
        console.log(car.velocityX);
       
        if(deformation>180)
        {
          car.shapeColour="red";
          fill ("red")
          text("Lethal",50,100);
        }
      
        if(deformation<=180 &&deformation>100){
          car.shapeColor="yellow";
          car2.shapeColor="yellow";
          fill ("yellow")
          text("Average",50,100);
        }
      
        if(deformation<=100)
        {
          car.shapeColor="green";
          fill ("green")
          text("Good",50,100);
        }
    
      
      
      }
 
    //if(car2.isTouching(wall2)){
      if (wall2.x-car2.x<(car2.width+wall2.width)/2){
          
          var deformation1=0.5*car2.weight*car2.speed*car2.speed/22500;
          
          console.log(deformation1);
      
          car2.velocityX=0;
          
          console.log(car2.velocityX);
          if(deformation1>180)
          {
            car2.shapeColor="red";
            fill ("red")
            text("Lethal",50,300);
          }
        
          if(deformation1<=180 &&deformation1>100){
            car2.shapeColor="yellow";
            fill ("yellow")
            text("Average",50,300);
          }
        
          if(deformation1<=100)
          {
            car2.shapeColor="green";
            fill ("green")
            text("Good",150,300);
          }  
         
          //car2.x=1455;
        }

 
 drawSprites();  


}

