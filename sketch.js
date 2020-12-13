
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	di = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new  Paper(480,645,50);
	

	dustbin1 = new Dustbin(1100,630,160,20);
	dustbin2 = new Dustbin(1020,550,20,100);
	dustbin3 = new Dustbin(1180,550,20,100);

   ground = new Ground(650,650,1300,10);


	Engine.run(engine);
  
}


function draw() {
  
  background("white");


dustbin1.display();
dustbin2.display();
dustbin3.display();

image(di,1000,450,200,200);
paper1.display();

ground.display();
 
}
function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:400,y:-400});

}

}


