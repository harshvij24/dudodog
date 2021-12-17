var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14;
var wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25;

var form;

function preload(){
 
}
function setup() {
  createCanvas(windowWidth-50,600);
  
   form = new Heading();
   wall1 = createSprite(750,100,1000,10);
   wall1.shapeColor="blue";
   wall2 = createSprite(750,500,1000,10);
   wall2.shapeColor="blue";
   wall3 = createSprite(250,270,10,350);
   wall3.shapeColor="blue";
   wall4 = createSprite(360,300,10,250);
   wall4.shapeColor="blue";
   wall5 = createSprite(540,300,10,250);
   wall5.shapeColor="blue"; 
   wall6 = createSprite(450,300,40,10);
   wall6.shapeColor="blue"; 
   wall7 = createSprite(700,200,200,10);
   wall7.shapeColor="blue";
   wall8 = createSprite(700,400,200,10);
   wall8.shapeColor="blue";
   wall9 = createSprite(1250,300,10,410);
   wall9.shapeColor="blue";
   wall10 = createSprite(1170,300,10,280);
   wall10.shapeColor="blue";
   wall10 = createSprite(1030,300,10,200);
   wall10.shapeColor="blue";
   wall11 = createSprite(1100,260,40,10);
   wall11.shapeColor="blue"; 
   wall12 = createSprite(1100,350,40,10);
   wall12.shapeColor="blue";
   wall13 = createSprite(700,260,130,10);
   wall13.shapeColor="blue";  
   wall14 = createSprite(700,340,130,10);
   wall14.shapeColor="blue";
   wall15 = createSprite(640,300,10,80);
   wall15.shapeColor="blue"; 
   wall16 = createSprite(760,270,10,20);
   wall16.shapeColor="blue"; 
   wall17 = createSprite(760,330,10,20);
   wall17.shapeColor="blue"; 
   wall18 = createSprite(990,200,80,10);
   wall18.shapeColor="blue";
   wall19 = createSprite(970,340,10,150);
   wall19.shapeColor="blue";
   wall20 = createSprite(880,260,60,10);
   wall20.shapeColor="blue";
   wall21 = createSprite(880,350,10,60);
   wall21.shapeColor="blue"; 
 

}

function draw() {
  background(0);
  drawSprites();


  form.display();


  
  
}