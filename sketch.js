
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,dustbin;
function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);
    
    engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = new Ground(400,600,800,20);
  dustbin = new Dustbin(500,580,200,20);
  paper = new Paper(200,100);
  dustbin1 = new Dustbin(400,505,20,170);
  dustbin2 = new Dustbin(600,505,20,170);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    ground.display();
    dustbin.display();
    paper.display();
  dustbin1.display();
  dustbin2.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

