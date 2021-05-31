var bg;
var tom, jerry;
function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
tom = createSprite(800,500,10,10);
tom.addAnimation("catstable",tomImg1);
tom.addAnimation("running", tomImg2);
tom.scale = 0.3;
jerry = createSprite(200,650,10,10);
jerry.addAnimation("mouseStable",jerryImg1);
jerry.scale = 0.2;
jerry.addAnimation("teasing", jerryImg2);
    //create tom and jerry sprites here
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<tom.width/2-jerry.width/2){
    tom.velocityX=0
    tom.addAnimation("tomlastImg", tomImg3);
//tom.x=300;
tom.scale=0.3;
tom.changeAnimation("tomlastImg");
jerry.addAnimation("jerrylastImg", jerryImg3);
jerry.scale=0.15; 
jerry.changeAnimation("jerrylastImg")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode==LEFT_ARROW){
    tom.velocityX=-5;
    tom.changeAnimation("running",tomImg2);

    jerry.frameDelay = 25; 
    jerry.changeAnimation("teasing",jerryImg2);
    
}

}
