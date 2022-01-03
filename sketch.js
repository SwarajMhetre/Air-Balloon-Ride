var balloon,balloonImage1,balloonImage2;
var database, position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

function setup() {
  database=firebase.database();
  createCanvas(1360,600);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  

  var balloonPosition=database.ref('balloon/position')
balloonPosition.on("value",readPosition)
balloon.scale=0.4;

  textSize(20); 
}

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x=balloon.x-3;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x=balloon.x+3
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y=balloon.y-3
    balloon.scale=0.4;   
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y=balloon.y+3;
    balloon.scale=0.38;

  }

  drawSprites();
  fill("white");
  stroke("black");
  textSize(20);
  text("INSTRUCTION :- Use arrow keys to move Hot Air Balloon!",40,40);
}
 
function readPosition(data){
 position=data.val()
 balloon.x=position.x;
 balloon.y=position.y;
}


