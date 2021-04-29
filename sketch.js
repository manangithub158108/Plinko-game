var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = null;
var gameState = 'initial';
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");

  if(gameState === 'initial'){
    fill('yellow')
    textSize(20)
    text('This is a lucky game',20,30);
    text('where you need to score the maximum points in one click',20,60);
    text('Your maximum target should be of 3000 points ',20,100);
  }

  if(keyCode === 32 && gameState === 'initial'){
    gameState = 'play'
  }
  

  if(gameState === 'play'){
    textSize(20)
    text("Score : "+score,20,30);
    
     for (var i = 0; i < plinkos.length; i++) {
       
       plinkos[i].display();
       
     }
     if(frameCount%60===0  && gameState === 'play' && turn === 0){
       particles.push(new Particle(random(0, 800), 10,10));
       turn = null;
        count = 1;
     }
  
     if(frameCount%60===0  && gameState === 'play' && turn === 0){
      particles.push(new Particle(random(0, 800), 10,10));
      turn = null;
       count = 2;
    }
  
    if(frameCount%60===0  && gameState === 'play' && turn === 0){
      particles.push(new Particle(random(0, 800), 10,10));
      turn = null;
       count = 3;
    }
  
    if(frameCount%60===0  && gameState === 'play' && turn === 0){
      particles.push(new Particle(random(0, 800), 10,10));
      turn = null;
       count = 4;
    }
  
    if(frameCount%60===0  && gameState === 'play' && turn === 0){
      particles.push(new Particle(random(0, 800), 10,10));
      turn = null;
       count = 5;
    }
   
    for (var j = 0; j < particles.length; j++) {
     
       particles[j].display();
       console.log(particles[j]);
     }
     for (var k = 0; k < divisions.length; k++) {
       
       divisions[k].display();
     }
  
     ground.display();
  
  }

  Engine.update(engine);
     
}

function keyPressed(){
  if(keyCode == 32 && gameState === 'initial'){
    gameState = 'play'
  } 

  if(keyCode == 32 && gameState === 'play'){
    turn = 0
  } 
}