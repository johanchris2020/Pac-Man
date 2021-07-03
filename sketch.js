var ghost1, ghost2, ghost3, ghost4, ghost1_img, ghost2_img, ghost3_img, ghost4_img;
var pacman, pacman_img;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,
    wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19,
    wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,
    wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40,
    wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49;

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

    wall1 = createSprite(5, 300, 10, 600);
    wall1.shapeColor = "white";
    wall2 = createSprite(595, 300, 10, 600);
    wall2.shapeColor = "white";
    wall3 = createSprite(300, 600, 580, 10);
    wall3.shapeColor = "white";
    wall4 = createSprite(300, 600, 580, 10);
    wall4.shapeColor = "white";
    wall5 = createSprite(250, 300, 10, 90);
    wall5.shapeColor = "white";
    wall6 = createSprite(295, 350, 100, 10);
    wall6.shapeColor = "white";
    wall7 = createSprite(340, 300, 10, 90);
    wall7.shapeColor = "white";
    wall8 = createSprite(200, 305, 10, 100);
    wall8.shapeColor = "white";
    wall9 = createSprite(400, 305, 10, 100);
    wall9.shapeColor = "white";
    wall10 = createSprite(450, 310, 100, 10);
    wall10.shapeColor = "white";
    wall11 = createSprite(570, 310, 50, 10);
    wall11.shapeColor = "white";
    wall12 = createSprite(440, 360, 10, 100);
    wall12.shapeColor = "white";
    wall13 = createSprite(200, 400, 10, 100);
    wall13.shapeColor = "white";
    wall14 = createSprite(400, 450, 10, 100);
    wall14.shapeColor = "white";
    wall15 = createSprite(530, 260, 180, 10);
    wall15.shapeColor = "white";
    wall16 = createSprite(450, 200, 200, 10);
    wall16.shapeColor = "white";
    wall17 = createSprite(545, 150, 10, 100);
    wall17.shapeColor = "white";
    wall18 = createSprite(500, 110, 10, 100);
    wall18.shapeColor = "white";
    wall19 = createSprite(200, 300, 10, 100);
    wall19.shapeColor = "white";
    wall20 = createSprite(200, 200, 10, 100);
    wall20.shapeColor = "white";
    wall21 = createSprite(445, 155, 100, 10);
    wall21.shapeColor = "white";
    wall22 = createSprite(255, 445, 100, 10);
    wall22.shapeColor = "white";
    wall23 = createSprite(300, 200, 100, 10);
    wall23.shapeColor = "white";
    wall24 = createSprite(540, 550, 190, 10);
    wall24.shapeColor = "white";
    wall25 = createSprite(340, 550, 100, 10);
    wall25.shapeColor = "white";
    wall26 = createSprite(200, 180, 10, 100);
    wall26.shapeColor = "white";
    wall27 = createSprite(320, 405, 150, 10);
    wall27.shapeColor = "white";
    wall28 = createSprite(320, 405, 150, 10);
    wall28.shapeColor = "white";
    wall29 = createSprite(360, 500, 10, 100);
    wall29.shapeColor = "white";
    wall30 = createSprite(200, 500, 10, 100);
    wall30.shapeColor = "white";
    wall31 = createSprite(300, 145, 10, 100);
    wall31.shapeColor = "white";
    wall32 = createSprite(145, 200, 100, 10);
    wall32.shapeColor = "white";
    wall33 = createSprite(100, 100, 10, 100);
    wall33.shapeColor = "white";
    wall34 = createSprite(300, 100, 100, 10);
    wall34.shapeColor = "white";
    wall35 = createSprite(155, 100, 100, 10);
    wall35.shapeColor = "white";
    wall36 = createSprite(100, 250, 100, 10);
    wall36.shapeColor = "white";
    wall37 = createSprite(150, 290, 100, 10);
    wall37.shapeColor = "white";
    wall38 = createSprite(105, 345, 10, 100);
    wall38.shapeColor = "white";
    wall39 = createSprite(130, 330, 50, 10);
    wall39.shapeColor = "white";
    wall40 = createSprite(350, 100, 100, 10);
    wall40.shapeColor = "white";
    wall41 = createSprite(310, 500, 100, 10);
    wall41.shapeColor = "white";
    wall42 = createSprite(100, 430, 100, 10);
    wall42.shapeColor = "white";
    wall43 = createSprite(155, 500, 100, 10);
    wall43.shapeColor = "white";
    wall44 = createSprite(550, 500, 10, 100);
    wall44.shapeColor = "white";
    wall45 = createSprite(455, 495, 100, 10);
    wall45.shapeColor = "white";
    wall46 = createSprite(200, 550, 100, 10);
    wall46.shapeColor = "white";
    wall47 = createSprite(100, 100, 100, 10);
    wall47.shapeColor = "white";
    wall48 = createSprite(445, 65, 100, 10);
    wall48.shapeColor = "white";
    wall49 = createSprite(495, 405, 100, 10);
    wall49.shapeColor = "white";
}

function draw() {
    background("darkblue");
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
    sprite.collide(wall21);
    sprite.collide(wall22);
    sprite.collide(wall23);
    sprite.collide(wall24);
    sprite.collide(wall25);
    sprite.collide(wall26);
    sprite.collide(wall27);
    sprite.collide(wall28);
    sprite.collide(wall29);
    sprite.collide(wall30);
    sprite.collide(wall31);
    sprite.collide(wall32);
    pacman.collide(wall33);
    sprite.collide(wall34);
    sprite.collide(wall35);
    sprite.collide(wall36);
    sprite.collide(wall37);
    sprite.collide(wall38);
    sprite.collide(wall39);
    sprite.collide(wall40);
    sprite.collide(wall41);
    sprite.collide(wall42);
    sprite.collide(wall43);
    sprite.collide(wall44);
    sprite.collide(wall45);
    sprite.collide(wall46);
    sprite.collide(wall47);
    sprite.collide(wall48);
    sprite.collide(wall49);
}