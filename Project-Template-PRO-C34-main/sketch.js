const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var Boxes=[]

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  for(var i=100;i<=106;i++){
    Boxes.push(new Box(800,i,70,70))
  }

  for(var i=105;i<=110;i++){
    Boxes.push(new Box(700,i,70,70))
  }
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();

  for(i=0;i<Boxes.length;i++){
    Boxes[i].display();
  }

  for(i=0;i<Boxes.length;i++){
    Boxes[i].display();
  }
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}
