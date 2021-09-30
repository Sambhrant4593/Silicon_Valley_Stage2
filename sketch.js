var mainBackground;

var playerImg;

var meteorImg;

var enemyImg;

var enemyBeam;

function preload(){

mainBackground=loadImage("backgroundImg.jpg");

playerImg=loadImage("player.png");

meteorImg=loadImage("meteor.png");

enemyImg=loadImage("enemy.png");

enemyBeam=loadImage("enemy_Beam.png");

}

function setup(){
createCanvas(770,600);

bg=createSprite(600,300);
bg.addImage("background",mainBackground);
bg.scale=2.5;
bg.x=bg.width/2;
bg.velocityX=-2;

player=createSprite(100,450);
player.addImage("Player",playerImg);
player.scale=0.3;


enemy=createSprite(700, 100);
enemy.addImage("Enemy",enemyImg);
enemy.scale=0.4;



}

function draw(){
background(0);
console.log(bg.x);



if(bg.x<80){
bg.x=bg.width/2;
}

if(keyDown("UP_ARROW")){
    player.y=player.y-1.5;
}
if(keyDown("DOWN_ARROW")){
    player.y=player.y+1.5;
}

enemy1();
meteor1();

drawSprites();
}

function enemy1(){

    beam=createSprite(450,125);
    beam.addImage("EnemyBeam",enemyBeam);
    beam.scale=0.3;
    beam.visible=false;

    if(frameCount%60===0){
        enemy.y=Math.round(random(100,350));
        beam.visible=true;
        beam.velocityX=-6;
        beam.y=enemy.y;
        }
    

}

function meteor1(){

    if(frameCount%200===0){
        meteor=createSprite(700,530);
        meteor.addImage("Meteor",meteorImg);
        meteor.scale=0.8;
        meteor.velocityX=-3;
    }
   

}
