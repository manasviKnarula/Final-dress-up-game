var princess;
var dress1, dress2, dress3;
var legging1, legging2, legging3;
var shoe1, shoe2, shoe3, shoe4;

var PrincessIMG;
var dress1IMG, dress2IMG, dress3IMG;
var legging1IMG, legging2IMG, legging3IMG;
var shoe1IMG, shoe2IMG, shoe3IMG, shoe4IMG;

var gameState = "start";

var background1;

function preload(){
    PrincessIMG = loadImage("Princess.png");
    dress1IMG = loadImage("dress1.png");
    dress2IMG = loadImage("Dress2.png");
    dress3IMG = loadImage("Dress3.png");
    legging1IMG = loadImage("Legging1.png");
    legging2IMG = loadImage("Legging2.png");
    legging3IMG = loadImage("Legging3.png");
    shoe1IMG = loadImage("Shoe1.png");
    shoe2IMG = loadImage("Shoe2.png");
    shoe3IMG = loadImage("Shoe3.png");
    shoe4IMG = loadImage("Shoe4.png");

    background1 = loadImage("bg.jpg");
  }

  function setup(){
  createCanvas(1000, 800);
  

  princess = createSprite(200,400,100,100);
  princess.addImage(PrincessIMG);
  princess.scale = 0.7;

  dress1 = createSprite(450,130,20,50);
  dress1.addImage(dress1IMG);
  dress1.scale = 0.5;

  dress2 = createSprite(600,130,20,50);
  dress2.addImage(dress2IMG);
  dress2.scale = 0.5;

  dress3 = createSprite(750,130,20,50);
  dress3.addImage(dress3IMG);
  dress3.scale = 0.5;

  legging1 = createSprite(450,360,20,50);
  legging1.addImage(legging1IMG);
  legging1.scale = 0.5;

  legging2 = createSprite(600,360,20,50);
  legging2.addImage(legging2IMG);
  legging2.scale = 0.5;

  legging3 = createSprite(750,360,20,50);
  legging3.addImage(legging3IMG);
  legging3.scale = 0.5;

  shoe1 = createSprite(400,560,20,50);
  shoe1.addImage(shoe1IMG);
  shoe1.scale = 0.5;

  shoe2 = createSprite(550,560,20,50);
  shoe2.addImage(shoe2IMG);
  shoe2.scale = 0.5;

  shoe3 = createSprite(700,560,20,50);
  shoe3.addImage(shoe3IMG);
  shoe3.scale = 0.5;

  shoe4 = createSprite(850,560,20,50);
  shoe4.addImage(shoe4IMG);
  shoe4.scale = 0.5;


  }
  
  function draw() {
    background(background1);
    text(mouseX +" , "+ mouseY,100,150);
    drawSprites();

    if(mousePressedOver(legging1)){
      legging1.x = 165;
      legging1.y = 465;
      legging1.scale=0.7;
      legging2.x = 600;
      legging2.y = 360;
      legging2.scale=0.5;
      legging3.x = 750;
      legging3.y = 360;
      legging3.scale=0.5;
    }

    if(mousePressedOver(legging2)){
      legging2.x = 162;
      legging2.y = 520;
      legging2.scale=0.7;
      legging1.x = 450;
      legging1.y = 360;
      legging1.scale=0.5;
      legging3.x = 750;
      legging3.y = 360;
      legging3.scale=0.5;
    }

    if(mousePressedOver(legging3)){
      legging3.x = 162;
      legging3.y = 516;
      legging3.scale=0.7;
      legging1.x = 450;
      legging1.y = 360;
      legging1.scale=0.5;
      legging2.x = 600;
      legging2.y = 360;
      legging2.scale=0.5;
    }

    if(mousePressedOver(dress1)){
      dress1.x = 166;
      dress1.y = 340;
      dress1.scale=0.7
      dress2.x = 600;
      dress2.y = 130;
      dress2.scale=0.5;
      dress3.x = 750;
      dress3.y = 130;
      dress3.scale=0.5;
    }

    if(mousePressedOver(dress2)){
      dress2.x = 166;
      dress2.y = 335;
      dress2.scale=0.7;
      dress1.x = 450;
      dress1.y = 130;
      dress1.scale=0.5;
      dress3.x = 750;
      dress3.y = 130;
      dress3.scale=0.5;

    }

    if(mousePressedOver(dress3)){
      dress3.x = 167;
      dress3.y = 340;
      dress3.scale=0.7;
      dress2.x = 600;
      dress2.y = 130;
      dress2.scale=0.5;
      dress1.x = 450;
      dress1.y = 130;
      dress1.scale=0.5;
    }

    if(mousePressedOver(shoe1)){
      shoe1.x = 165;
      shoe1.y = 615;
      shoe1.scale=0.7;
      shoe2.x = 550;
      shoe2.y = 560;
      shoe2.scale=0.5;
      shoe3.x = 700;
      shoe3.y = 560;
      shoe3.scale=0.5;
      shoe4.x = 850;
      shoe4.y = 560;
      shoe4.scale=0.5;
    }

    if(mousePressedOver(shoe2)){
      shoe2.x = 167;
      shoe2.y = 615;
      shoe2.scale=0.7;
      shoe3.x = 700;
      shoe3.y = 560;
      shoe3.scale=0.5;
      shoe4.x = 850;
      shoe4.y = 560;
      shoe4.scale=0.5;
      shoe1.x = 400;
      shoe1.y = 560;
      shoe1.scale=0.5;
    }

    if(mousePressedOver(shoe3)){
      shoe3.x = 178;
      shoe3.y = 615;
      shoe3.scale=0.7;
      shoe4.x = 850;
      shoe4.y = 560;
      shoe4.scale=0.5;
      shoe1.x = 400;
      shoe1.y = 560;
      shoe1.scale=0.5;
      shoe2.x = 550;
      shoe2.y = 560;
      shoe2.scale=0.5;
    }

    if(mousePressedOver(shoe4)){
      shoe4.x = 165;
      shoe4.y = 619;
      shoe4.scale=0.7;
      shoe1.x = 400;
      shoe1.y = 560;
      shoe1.scale=0.5;
      shoe2.x = 550;
      shoe2.y = 560;
      shoe2.scale=0.5;
      shoe3.x = 700;
      shoe3.y = 560;
      shoe3.scale=0.5;
    }


    if(gameState==="start"){
        textSize(20);
        fill("black")
        text("The princess needs to get to the party as soon as possible, help her dress up!", 10,750)
        text("Click on the dresses, leggings and shoes to dress the princess",10,770)
    }
  }