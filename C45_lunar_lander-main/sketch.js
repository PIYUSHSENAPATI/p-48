let ground;
let lander;
var lander_img;
var bg_img;
var score=0;
var gameState="play";



var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.velocityY=0.2;
  lander.setCollider("rectangle",0,0,500,500)
  lander.debug=false

  ground1=createSprite(650,550,300,10);
  ground1.visible=false

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
  push()
  fill(255);
  text("landing score : "+score,800,75);
  pop();
  

  //fall down
  if(gameState==="play"){
    if(frameCount%10===0){
      score=score+1;

    }


    lander.velocityY=lander.velocityY+0.1;

  if(keyDown("left")){
    lander.x=lander.x-5;
  }
  if(keyDown("right")){
    lander.x=lander.x+5;

  }
  if(lander.isTouching(ground1)){
    gameState="end";
    a=lander.x;
    b=lander.y;

  }
  if(lander.y>700){
    gameState="end1"
  }
    
  }
  if(gameState==="end"){
    textSize(40);
    fill("white");
    text("landing successful",470,400);
    text("press R to RESTART",470,300);
    lander.x=a;
    lander.y=b;
    if(keyDown("r")){
      gameState="play";
      score=0;
      lander.velocityY=0.2;

      lander.x=50;
      lander.y=50;

    }}
    if(gameState==="end1"){
      textSize(40);
      fill("white");
      text("landing unsuccessful",470,400);
      text("press R to RESTART",470,300);
      lander.x=650;
      lander.y=200;
      if(keyDown("r")){
        gameState="play";
        score=0;
        lander.velocityY=0.2;

        lander.x=50;
        lander.y=50;
  
      }

  }
  drawSprites();
}
