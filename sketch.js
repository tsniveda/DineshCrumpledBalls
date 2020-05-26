const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin1,dustbin2,dustbin3;
var ground;
var paper;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;


	dustbin1 =new Dustbin(800,200,100,0);

	dustbin2 =new Dustbin(1000,200,100,PI/2);

	dustbin3 =new Dustbin(900,210,200,PI/2);

	paper =new Paper(200,200);

	ground=new Ground(600,380,1200,20);

	
	
  
}


function draw() {
  background("yellow");

  Engine.update(engine);

	ground.display();

	dustbin1.display();

	dustbin2.display();

	dustbin3.display();

	paper.display();
 
}



function keyPressed() {
    if (keyCode === 38){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-0.1} );
		
    
    }
  }


