var trex ,trex_running;

var ground, groundImg;




function preload()
{
  trex_running = loadAnimation ("trex1.png",
                                 "trex3.png","trex4.png")

  groundImg = loadImage(ground2.png);


}

function setup()
{
  createCanvas(1400,410)
  
  //crie um sprite de trex
 trex = createSprite (40,300,20,20);
  trex.addAnimation("correndo",trex_running);

  ground = createSprite(580,380,1400,20);
  ground.addImage(groundImg);

}

function draw()
{
  background("black");
  if (keydown(UP_ARROW)){
trex.velocity.y = 8;





  }
  
  trex.collide(ground);



drawSprites();
}
