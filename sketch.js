const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body
var angle=45;



function setup() {
  createCanvas(400,400);
//crear engine
  //Agregar world a engine
  engine = Engine.create();
  world = engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   boton=createImg("up (1).png");
   boton.position(350,40);
   boton.size(50,50);
   boton.mouseClicked(Fuerza)
  
  
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  background("black");
  ground = Bodies.rectangle(220,350,400,20,ground_options);
  World. add(world,ground);

Piso = Bodies.rectangle(70, 250, 50, 150,ground_options);
World.add(world,Piso);
  

  


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,20);
  
  //escribir una función rectangle para mostrar el suelo.
 
rect(ground.position.x,ground.position.y,400,20);
Matter.Body.rotate(Piso,angle);
push ();
translate(Piso.position.x,Piso.position.y);
rotate(angle); //va a comenzar en ese angulo, comenzara a girar 
rect (0,0,100,50);
pop ();
angle += 0.1;

  
}
function Fuerza(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

