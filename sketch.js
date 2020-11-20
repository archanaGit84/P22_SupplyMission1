const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var helicopter, helicopterImg, package,packageImg;
var packageBody,groundBody, ground


function preload()
{
	helicopterImg=loadImage("helicopter.png");
	packageImg=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageImg);
	package.scale=0.2;

	helicopter = createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImg);
	helicopter.scale = 0.6;

	var groundOptions = {
		isStatic: true
	}
	//Create a Ground
	groundBody = Bodies.rectangle (width/2, height - 50, width, 10 , groundOptions );
	 World.add(world, groundBody);
	 

	ground = createSprite(groundBody.position.x, groundBody.position.y+20, width,10);
	ground.shapeColor = color(255);

	
	var packageOptions = {
		restitution: 0.6,
		isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageOptions);
	World.add(world, packageBody);
	
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x ;
  package.y= packageBody.position.y ;
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Body.setStatic(packageBody,false);
    
  }
}



