var tom,tomImg1,tomImg2,tomImg3;
var bg,bgImg;
var jerry,jerryImg1,jerryImg2,jerryImg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom  = createSprite(800,600,50,50);
    jerry = createSprite(200,650,50,50);
    tom.addAnimation("sleeping",tomImg1);
    jerry.addAnimation("standing",jerryImg1);
    tom.scale = 0.2;
    jerry.scale = 0.1;
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
     if(tom.x - jerry.x < (tom.width - jerry.width)/2){
         tom.velocityX = 0;
         tom.addAnimation("smiling",tomImg3);
         jerry.addAnimation("happy",jerryImg3);
         tom.changeAnimation("smiling");
         jerry.changeAnimation("happy");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       jerry.addAnimation("teasing",jerryImg2);
       jerry.changeAnimation("teasing");
       jerry.frameDelay = 25;
       tom.addAnimation("walking",tomImg2);
       tom.changeAnimation("walking");
       tom.frameDelay = 25;
       tom.velocityX=-3;
   }   

}
