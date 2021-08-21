var ghost1, ghost2, ghost3, ghost4, ghost1_img, ghost2_img, ghost3_img, ghost4_img;
var pacman, pacman_img;
var lives = 2;
var gameState = "serve";
var dot1, dot2, dot3, dot4, dot5;
var border1, border2, border3, border4, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,
    wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19,
    wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,
    wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40,
    wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50;

function preload() {
    pacman_img = loadImage("pacman.png");
    ghost1_img = loadImage("orange.png");
    ghost2_img = loadImage("red.png");
}

function setup() {
    createCanvas(600, 600);
    pacman = createSprite(540, 580, 20, 20);
    pacman.shapeColor = "yellow";
    pacman.addImage("pacman", pacman_img)
    pacman.scale = 0.02;
    ghost1 = createSprite(310, 320, 20, 20);
    ghost1.addImage("orange", ghost1_img)
    ghost1.scale = 0.05;
    ghost2 = createSprite(280, 320, 20, 20);
    ghost2.addImage("red", ghost2_img);
    ghost2.scale = 0.05;
    ghost3 = createSprite(280, 290, 20, 20);
    ghost3.addImage("orange", ghost1_img)
    ghost3.scale = 0.05;
    ghost4 = createSprite(310, 290, 20, 20);
    ghost4.addImage("red", ghost2_img);
    ghost4.scale = 0.05;

    border1 = createSprite(5, 300, 10, 600);
    border1.shapeColor = "darkblue";
    border2 = createSprite(595, 300, 10, 600);
    border2.shapeColor = "darkblue";
    border3 = createSprite(300, 595, 580, 10);
    border3.shapeColor = "darkblue";
    border4 = createSprite(300, 5, 600, 10);
    border4.shapeColor = "darkblue"
    wall1 = createSprite(250, 300, 10, 90);
    wall1.shapeColor = "darkblue";
    wall2 = createSprite(295, 350, 100, 10);
    wall2.shapeColor = "darkblue";
    wall3 = createSprite(340, 300, 10, 90);
    wall3.shapeColor = "darkblue";
    //right bottom walls
    wall4 = createSprite(550, 550, 10, 10);
    wall4.shapeColor = "darkblue";
    wall5 = createSprite(510, 580, 10, 80);
    wall5.shapeColor = "darkblue";
    wall5 = createSprite(580, 510, 80, 10);
    wall5.shapeColor = "darkblue";
    wall6 = createSprite(510, 460, 10, 100);
    wall6.shapeColor = "darkblue";
    wall7 = createSprite(550, 415, 80, 10);
    wall7.shapeColor = "darkblue";
    wall8 = createSprite(550, 460, 10, 10);
    wall8.shapeColor = "darkblue";
    //right middle walls
    rm1 = createSprite(500, 350, 100, 10);
    rm1.shapeColor = "darkblue";
    rm2 = createSprite(455, 430, 10, 150);
    rm2.shapeColor = "darkblue";
    rm3 = createSprite(500, 250, 100, 10);
    rm3.shapeColor = "darkblue";
    rm4 = createSprite(455, 170, 10, 150);
    rm4.shapeColor = "darkblue";
    rm5 = createSprite(480, 300, 140, 10);
    rm5.shapeColor = "darkblue";
    rm6 = createSprite(410, 300, 10, 410);
    rm6.shapeColor = "darkblue";
    //right top walls
    wall9 = createSprite(550, 50, 10, 10);
    wall9.shapeColor = "darkblue";
    wall10 = createSprite(510, 20, 10, 80);
    wall10.shapeColor = "darkblue";
    wall11 = createSprite(580, 90, 80, 10);
    wall11.shapeColor = "darkblue";
    wall12 = createSprite(510, 140, 10, 100);
    wall12.shapeColor = "darkblue";
    wall13 = createSprite(550, 185, 80, 10);
    wall13.shapeColor = "darkblue";
    wall14 = createSprite(550, 140, 10, 10);
    wall14.shapeColor = "darkblue";
    //left bottom wall
    wall15 = createSprite(550, 550, 10, 10);
    wall15.shapeColor = "darkblue";
    wall16 = createSprite(510, 580, 10, 80);
    wall16.shapeColor = "darkblue";
    wall17 = createSprite(580, 510, 80, 10);
    wall17.shapeColor = "darkblue";
    wall18 = createSprite(510, 460, 10, 100);
    wall18.shapeColor = "darkblue";
    wall19 = createSprite(550, 415, 80, 10);
    wall19.shapeColor = "darkblue";
    wall20 = createSprite(550, 460, 10, 10);
    wall20.shapeColor = "darkblue";
}

function draw() {
    background("black");
    if (keyDown("up")) {
        pacman.y = pacman.y - 5
    }
    if (keyDown("down")) {
        pacman.y = pacman.y + 5
    }
    if (keyDown("left")) {
        pacman.x = pacman.x - 5
    }
    if (keyDown("right")) {
        pacman.x = pacman.x + 5
    }


    objectCollide(pacman);
    objectCollide(ghost1);
    objectCollide(ghost2);
    objectCollide(ghost3);
    objectCollide(ghost4);
    drawSprites();
}

function objectCollide(sprite) {
    sprite.collide(border1);
    sprite.collide(border2);
    sprite.collide(border3);
    sprite.collide(border4);
    sprite.collide(wall1);
    sprite.collide(wall2);
    sprite.collide(wall3);
    sprite.collide(wall4);
    sprite.collide(wall5);
    sprite.collide(wall6);
    sprite.collide(wall7);
    sprite.collide(wall8);
    sprite.collide(wall9);
    sprite.collide(wall10);
    sprite.collide(wall11);
    sprite.collide(wall12);
    sprite.collide(wall13);
    sprite.collide(wall14);
    sprite.collide(wall15);
    sprite.collide(wall16);
    sprite.collide(wall17);
    sprite.collide(wall18);
    sprite.collide(wall19);
    sprite.collide(wall20);
    sprite.collide(rm1);
    sprite.collide(rm2);
    sprite.collide(rm3);
    sprite.collide(rm4);
    sprite.collide(rm5);
    sprite.collide(rm6);
}