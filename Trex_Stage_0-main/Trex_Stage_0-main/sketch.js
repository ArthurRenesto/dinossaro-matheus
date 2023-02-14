var trex ,trex_running;

var ground, groundImg;

var invisible_ground;


//depurrar o primeiro bug : 




function preload()
{
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

  groundImg = loadImage("ground2.png");


}

function setup()
{
  createCanvas(1400,410);
  
  //crie um sprite de trex
  trex = createSprite(40,300,20,20);
  trex.addAnimation("correndo",trex_running);


  //criar um sprite do invisible_ground
  
  invisible_ground = createSprite(700,3700,1400,20);
  invisible_ground.visible = false;
  
  
  ground = createSprite(700,360,1400,20);
  ground.addImage(groundImg);


}

function draw()
{
  background("black");
  drawSprites();
  
  //2 condições: se apertar espaço e tiver limite então pular
  if (keyDown("space") && trex.y >= 100)
  {
   trex.velocityY = -8; //aqui :)
  }
  //ativar um peso quando usarmos o velocityY
  trex.velocityY = trex.velocityY + 0.8;
  
  ground.velocityX = -5
  //se chao menor que 0 repetir o chao
  if(ground.x<0)
  {
    ground.x = ground.width/2;
  } 


  trex.collide(invisible_ground);


  console.log(trex.y)
 
}
