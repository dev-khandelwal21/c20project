
function preload() {
    //load the images here
  ratSittingImg=loadAnimation("images/jerryOne.png");
  ratTeasingImg=loadAnimation("images/jerryTwo.png", "images/JerryThree.png");
  ratLastImg=loadAnimation ("images/jerryFour.png");
  catSittingImg=loadAnimation("images/tomOne.png");
  catMovingImg=loadAnimation("images/tomTwo.png", "images/tomThree.png");
  catLastImg=loadAnimation ("images/tomFour.png");
  gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    rat=createSprite(100,600,30,30);
    rat.addAnimation("sittingRat",ratSittingImg);
    rat.scale=0.1;
    cat=createSprite(800,600,30,30);
    cat.addAnimation("sittingCat",catSittingImg);
    cat.scale=0.2;

}

function draw() {

  background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-rat.x<cat.width/2-rat.width/2){
      cat.addAnimation("lastCat",catLastImg);
      cat.changeAnimation("lastCat");
      cat.velocityX=0;
      rat.addAnimation("lastRat",ratLastImg);
      rat.changeAnimation("lastRat");
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
   cat.velocityX=-5; 
   cat.addAnimation("movingCat",catMovingImg);
   cat.changeAnimation("movingCat");
   rat.addAnimation("teasingRat",ratTeasingImg);
   rat.changeAnimation("teasingRat");
  }
  
  }



