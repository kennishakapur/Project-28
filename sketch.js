
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(175,600,800,20);
	tree = new Tree (600,190,400,500);
	stone = new Stone(100,300,20);
	
	mango1 = new Mango(650,350,40);
	mango2 = new Mango(680,300,40);
	mango3 = new Mango(790,250,40);
	mango4 = new Mango(880,360,40);
	mango5 = new Mango(950,400,40);

	boy= new Boy(100,240,150,300);
	
	slingshot = new SlingShot(stone.body, {x:100, y:310})


	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ground.display();
  tree.display();
  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();
  slingshot.display();

  detectcollison(stone,mango1);
  detectcollison(stone,mango2);
  detectcollison(stone,mango3);
  detectcollison(stone,mango4);
  detectcollison(stone,mango5);


  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingshot.released();
}

function detectcollison(Stone,Mango){
	MangoBodyPosition=Mango.body.position;
	StoneBodyPosition=Stone.body.position;

	var distance=dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
	if (distance<=Mango.r+Stone.r)
	{
		Matter.Body.setStatic(Mango.body,false);
	}
}

function keyPressed()
{
	if(keyCode==32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		slingshot.attach(stone.body);
	}
}


