const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myWorld, myEngine;
var dustbin1, dustbin2, dustbin3;
var ppr;
var ground;

function preload() {

}

function setup() {
	createCanvas(800, 520);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(600, 450, 10, 100);
	dustbin2 = new Dustbin(695, 495, 180, 10);
	dustbin3 = new Dustbin(780, 450, 10, 100);

	ground = new Ground(400, 505, 800, 10);

	ppr = new Paper(100, 490, 10, 10);


	Engine.run(myEngine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	ppr.display();

	ground.display()

	drawSprites();

}



function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(ppr.body, ppr.body.position, {x: 15, y: -15});
	}
}



