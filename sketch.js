var canvas;
var Jack, Hydrant, backgroundImage;

function preload(){
  JackImage = loadImage("Jack Project 44.webp");
  HydrantImage = loadImage("Fire Hydrant Project 44.jpg");
  StreetLightImage = loadImage("Screen Shot 2021-09-26 at 5.29.21 PM.png");
  HouseImage = loadImage("Screen Shot 2021-10-13 at 2.15.19 PM.png");
  backgroundImage = loadImage("Screen Shot 2021-10-10 at 11.51.33 AM.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  Jack = createSprite(100,400);
  Jack.addImage(JackImage);
  Jack.scale = 0.15;
  Hydrant = createSprite(400,650);
  Hydrant.addImage(HydrantImage);
  Hydrant.scale = 0.1;
  StreetLight = createSprite(800,570);
  StreetLight.addImage(StreetLightImage);
  StreetLight.scale = 0.3;
  House = createSprite(1250,630);
  House.addImage(HouseImage);
  House.scale = 0.8
}

function draw() {
  background(backgroundImage);  

  if(keyDown("space")){
    Jack.position.y += -50;
  }

  Jack.position.y += 6;

  if(keyDown(RIGHT_ARROW)){
    Jack.position.x += 4;
  }

  drawSprites();
}