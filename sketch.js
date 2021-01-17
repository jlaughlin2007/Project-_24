
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	
	paper1 = new paper();
	ground1 = new ground(400,680,800,20);
	dustbin1 = new Dustbin(600,660,100,20);
	dustbin2 = new Dustbin(545,625,10,100);
	dustbin3 = new Dustbin(655,625,10,100);
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 //console.log(paper1)
}		

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:25, y:-50});
	}
}