const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    base1 = new Ground(600,550, 250, 15);
    base2 = new Ground(950,300, 250, 15);

    pig1 = new Pig (490,530);
    pig2 = new Pig (525,530);
    pig3 = new Pig (560,530);
    pig4 = new Pig (595,530);
    pig5 = new Pig (630,530);
    pig6 = new Pig (665,530);
    pig7 = new Pig (700,530);

    pig8 = new Pig (505,490);
    pig9 = new Pig (540,490);
    pig10 = new Pig (575,490);
    pig11 = new Pig (610,490);
    pig12 = new Pig (645,490);
    pig13 = new Pig (680,490);

    pig14 = new Pig (520,450);
    pig15 = new Pig (555,450);
    pig16 = new Pig (590,450);
    pig17 = new Pig (625,450);
    pig18 = new Pig (660,450);

    pig19 = new Pig (840,280);
    pig20 = new Pig (875,280);
    pig21 = new Pig (910,280);
    pig22 = new Pig (945,280);
    pig23 = new Pig (980,280);
    pig24 = new Pig (1015,280);
    pig25 = new Pig (1050,280);

    pig26 = new Pig (855,240);
    pig27 = new Pig (890,240);
    pig28 = new Pig (925,240);
    pig29 = new Pig (960,240);
    pig30 = new Pig (995,240);
    pig31 = new Pig (1030,240);

    pig32 = new Pig (870, 200);
    pig33 = new Pig (905, 200);
    pig34 = new Pig (940, 200);
    pig35 = new Pig (975, 200);
    pig36 = new Pig (1020, 200);





    bird = new Bird(200,305);
    slingshot = new SlingShot(bird.body,{x:200, y:305});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(25)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    base1.display();
    base2.display();
    bird.display();

    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    pig11.display();
    pig12.display();
    pig13.display();
    pig14.display();
    pig15.display();
    pig16.display();
    pig17.display();
    pig18.display();
    pig19.display();
    pig20.display();
    pig21.display();
    pig22.display();
    pig23.display();
    pig24.display();
    pig25.display();
    pig26.display();
    pig27.display();
    pig28.display();
    pig29.display();
    pig30.display();
    pig31.display();
    pig32.display();
    pig33.display();
    pig34.display();
    pig35.display();
    pig36.display();


    pig1.score();
    pig2.score();
    pig3.score();
    pig4.score();
    pig5.score();
    pig6.score();
    pig7.score();
    pig8.score();
    pig9.score();
    pig10.score();
    pig11.score();
    pig12.score();
    pig13.score();
    pig14.score();
    pig15.score();
    pig16.score();
    pig17.score();
    pig18.score();
    pig19.score();
    pig20.score();
    pig21.score();
    pig22.score();
    pig23.score();
    pig24.score();
    pig25.score();
    pig26.score();
    pig27.score();
    pig28.score();
    pig29.score();
    pig30.score();
    pig31.score();
    pig32.score();
    pig33.score();
    pig34.score();
    pig35.score();
    pig36.score();




    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory =[];
        Matter.Body.setPosition(bird.body,{x:200,y:420});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}