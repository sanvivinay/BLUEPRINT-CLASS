const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground, ball,box1,box2,box3,box4;
function setup() {
var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
 box1 = new Box(200,100,50,50);
 box2 = new Box(300,150,50,50);
 box3 = new Box(283,124,50,50);
 box4 = new Box(100,200,50,50);
 /*var ground_options ={
   isStatic:true
 }

 ground = Bodies.rectangle(200,390,200,20,ground_options);
 World.add(world,ground);
 var ball_options ={
  restitution: 1.0
 }
 ball = Bodies.circle(200,200,25, ball_options);
 World.add(world,ball);
 */
 /*var box1_options ={
  restitution: 1.0
 }
 box1 = Bodies.rectangle(200,200,40,40,box1_options);
 World.add(world,box1);

 var box2_options ={
  restitution: 1.0
 }
 box2 = Bodies.rectangle(200,200,40,40,box2_options);
 World.add(world,box2);

 var box3_options ={
  restitution: 1.0
 }
 box3 = Bodies.rectangle(200,200,40,40,box3_options);
 World.add(world,box3);

 var box4_options ={
  restitution: 1.0
 }
 box4 = Bodies.rectangle(200,200,10,10,box4_options);
 World.add(world,box4);
 */
 
 console.log(ground.position.x);
}
function draw() {
  background("black");
  Engine.update(engine);
  box1.display();
  /*rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);

  ellipse(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40,40);

  rectMode(CENTER);
  rect(box1.position.x, box1.position.y,40,40);

  rectMode(CENTER);
  rect(box2.position.x, box2.position.y,40,40);

  rectMode(CENTER);
  rect(box3.position.x, box3.position.y,40,40);

  rectMode(CENTER);
  rect(box4.position.x, box4.position.y,40,40);
*/
}