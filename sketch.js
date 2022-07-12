const Engine = Matter.Engine
const Render = Matter.Render
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const Body = Matter.Body
const Composites = Matter.Composites
const Composite = Matter.Composite

var engine
var world

var ground

function preload() {
  
}

function setup() {
  createCanvas(500,700)

  engine = Engine.create()
  world = engine.world
 
  rectMode(CENTER)
  ellipseMode(RADIUS)
  textSize(50)

  // criei um objeto do modelo Ground
  ground = new Ground(250, 695, 500, 10)
}

function draw() {
  background('black')
  
  Engine.update(engine)

  ground.display()
}




