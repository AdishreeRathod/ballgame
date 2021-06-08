
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var poly;
var angle=60;



function setup() {
  createCanvas(400,400);
engine=Engine.create();
world1=engine.world;

var ballopt={
  restitution:0.9,
  frictionAir:0.01
}
ball=Bodies.circle(100,10,30,ballopt);
World.add(world1,ball);

var groundopt={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,groundopt);
World.add(world1,ground);

widge=Bodies.rectangle(100,200,100,20,groundopt);
World.add(world1,widge);

wall=Bodies.rectangle(300,150,20,70,groundopt);
World.add(world1,wall);
  
}


function draw() 
{
  background(200);
  Engine.update(engine);
  
rectMode(CENTER);
ellipseMode(CENTER);

  Matter.Body.rotate(widge,angle);
  ellipse(ball.position.x,ball.position.y,30,30);
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
push();
  translate(widge.position.x,widge.position.y);
  rotate(angle);
  rect(0,0,100,20)
  pop();
  angle=angle+0.1;
  rect(wall.position.x,wall.position.y,20,70);
}

