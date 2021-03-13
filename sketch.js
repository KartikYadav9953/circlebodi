
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	b1 = new box(20, 20, 80, 30);
	i1 = new iron(500, 550, 100, 100)
	g1 = new gr(400, 700);
	C1 = new circel(300, 20);
	sb1 = new sbox(300, 300, 50, 50);
	sc1 = new scircel(300, 300);


}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
 
  b1.display();
  i1.display();
  g1.display();
  C1.display();
  sb1.display();
  sc1.display();

}
