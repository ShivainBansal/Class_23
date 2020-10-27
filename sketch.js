const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

ground=new Ground(200,380,400,20);
    console.log(ground);

    box1=new Box(200,300,50,50);
    

    box2=new Box(240,100,50,100);

   //box3=new Box(250,300,100,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
   

    ground.display();
    box1.display();
    box2.display();
   //box3.display();
}