
var ground;
var wall_y = 4815;
var gameState = "start";
var y = 4990;
var time = 0;
var frame = 0;
var frame_Value = 0;
var score = 0;
var r = 50;
var level = 1;

function preload(){
    player_running_right = loadAnimation("png/Run__000.png","png/Run__001.png","png/Run__002.png","png/Run__003.png","png/Run__004.png","png/Run__005.png","png/Run__006.png","png/Run__007.png","png/Run__008.png","png/Run__009.png");
    player_running_left = loadAnimation("png/Run__010.png","png/Run__011.png","png/Run__012.png","png/Run__013.png","png/Run__014.png","png/Run__015.png","png/Run__016.png","png/Run__017.png","png/Run__018.png","png/Run__019.png");
    start_ScreenImg = loadImage("IMAGES/LOGO(RISE UP).jpg");
    start_ButtonImg = loadImage("IMAGES/START BUTTON.png");
    restartImg = loadImage("IMAGES/restart.png");
    pac1 = loadImage("ENEMY IMAGES/PAC1.png");
    pac2 = loadImage("ENEMY IMAGES/PAC2.png");
    pac3 = loadImage("ENEMY IMAGES/PAC3.jpg");

    ron_cryImg = loadAnimation("IMAGES/RON_CRY.gif");
    ron_happy = loadImage("IMAGES/STICKMAN HAPPY.jpg");

    skip_pwr_img = loadImage("IMAGES/SKIP_PWR.jpg");

    jumpSound = loadSound("RISE UP SOUNDS/350904__cabled-mess__jump-c-02.wav");
    deathSound = loadSound("RISE UP SOUNDS/Fail-sound-effect.mp3");
}

function setup(){
    var canvas = createCanvas(windowWidth - 10,windowHeight - 10);

    r = 0;
    g = 100;
    b = 255;

    start_Button = createSprite(550,5100);
    start_Button.addImage(start_ButtonImg);

    start_Screen = createSprite(720,4775);
    start_Screen.addImage(start_ScreenImg);
    start_Screen.scale = 0.63;
    
    restart = createSprite(690,6400);
    restart.addImage(restartImg);

    wall_left_grp = createGroup();
    wall_right_grp = createGroup();

    platform_grp = createGroup();

    player = createSprite(700,4960,20,20);
    player.addAnimation("running - right",player_running_right);
    player.addAnimation("running - left",player_running_left);
    player.addAnimation("player - crying",ron_cryImg);
    player.scale = 0.11;

    wall1_left = createSprite(407.5,4955,15,60);
    wall1_right = createSprite(992.5,4955,15,60);

    wall2_left = createSprite(407.5,4885,15,60);
    wall2_right = createSprite(992.5,4885,15,60);

    dummyPlat = createSprite(700,4990,600,10);

    level2 = createSprite(1100,3500,110,5);
    level3 = createSprite(1100,2000,110,5);
    level4 = createSprite(1100,500,110,5);

    enemy1 = createSprite(500,0,20,20);
    enemy2 = createSprite(500,0,20,20);
    enemy3 = createSprite(500,0,20,20);
    enemy4 = createSprite(500,0,20,20);
    enemy5 = createSprite(500,0,20,20);
    enemy6 = createSprite(500,0,20,20);
    enemy7 = createSprite(500,0,20,20);
    enemy8 = createSprite(500,0,20,20);
    enemy9 = createSprite(500,0,20,20);
    enemy10 = createSprite(500,0,20,20);
    enemy11 = createSprite(500,0,20,20);
    enemy12 = createSprite(500,0,20,20);
    enemy13 = createSprite(500,0,20,20);
    enemy14 = createSprite(500,0,20,20);
    enemy15 = createSprite(500,0,20,20);
    enemy16 = createSprite(500,0,20,20);
    enemy17 = createSprite(500,0,20,20);
    enemy18 = createSprite(500,0,20,20);
    enemy19 = createSprite(500,0,20,20);
    enemy20 = createSprite(500,0,20,20);
    
    inv_wall_left = createSprite(407.5,2500,15,5000);
    inv_wall_right = createSprite(992.5,2500,15,5000);

    know_theStory = createSprite(930,5100,260,130);
    continue_from_story = createSprite(700,5100,260,130);
    end_of_story = createSprite(950,6700,280,160);

    skip_pwr1 = createSprite(500,0,20,20);
    skip_pwr2 = createSprite(500,0,20,20);
    skip_pwr3 = createSprite(500,0,20,20);

    skip_pwr1.addImage(skip_pwr_img);
    skip_pwr2.addImage(skip_pwr_img);
    skip_pwr3.addImage(skip_pwr_img);
    
    skip_pwr1.scale = 0.02;
    skip_pwr2.scale = 0.02;
    skip_pwr3.scale = 0.02;

}

function draw(){
    background(r,g,b);

    camera.position.y = player.y;
    console.log(r);
    console.log(g);
    console.log(b);
    textSize(30);
    fill(random(0,255),random(0,255),random(0,255));

    know_theStory.shapeColor = "yellow";
    continue_from_story.shapeColor = "red";
    end_of_story.shapeColor = "blue";

    know_theStory.visible = false;
    continue_from_story.visible = false;
    end_of_story.visible = false;

    dummyPlat.depth = start_Screen.depth;
    start_Screen.depth += 1;
 
    timeLimit = 0;
    frame_Value = Math.round(frame);

    inv_wall_left.visible = false;
    inv_wall_right.visible = false;

    start_Button.visible = false;
    start_Screen.visible = false;

    wall1_left.visible = false;
    wall1_right.visible = false;

    wall2_left.visible = false;
    wall2_right.visible = false;
    wall_left_grp.setVisibleEach(false);
    wall_right_grp.setVisibleEach(false);

    platform_grp.setVisibleEach(false);
    dummyPlat.visible = false;

    player.visible = false;

    restart.visible = false;

    if(gameState === "start"){
        start_Screen.visible = true;
        start_Button.visible = true;

        wall1_left.visible = false;
        wall1_right.visible = false;

        wall2_left.visible = false;
        wall2_right.visible = false;

        know_theStory.visible = true;

        text("RISE UP",115,4800);
        text("RISE UP",1200,4800);

        if(mousePressedOver(start_Button)){
            gameState = "go";
            r = Math.round(random(0,2));
            console.log(r);
            if(r === 0){
                enemy1.addImage(pac1);
                enemy2.addImage(pac3); 
                enemy3.addImage(pac2);
                enemy4.addImage(pac1);
                enemy5.addImage(pac1);
                enemy6.addImage(pac2);
                enemy7.addImage(pac2);
                enemy8.addImage(pac3);
                enemy9.addImage(pac3);
                enemy10.addImage(pac1);
                enemy11.addImage(pac1);
                enemy12.addImage(pac1);
                enemy13.addImage(pac1);
                enemy14.addImage(pac2);
                enemy15.addImage(pac2);
                enemy16.addImage(pac2);
                enemy17.addImage(pac3);
                enemy18.addImage(pac3);
                enemy19.addImage(pac3);
                enemy20.addImage(pac2);

                
                enemy1.velocityX = random(3,5);
                enemy2.velocityX = random(3,5);
                enemy3.velocityX = random(3,5);
                enemy4.velocityX = random(3,5);
                enemy5.velocityX = random(3,5);
                enemy6.velocityX = random(3,5);
                enemy7.velocityX = random(3,5);
                enemy8.velocityX = random(3,5);
                enemy9.velocityX = random(3,5);
                enemy10.velocityX = random(3,5);
                enemy11.velocityX = random(3,5);
                enemy12.velocityX = random(3,5);
                enemy13.velocityX = random(3,5);
                enemy14.velocityX = random(3,5);
                enemy15.velocityX = random(3,5);
                enemy16.velocityX = random(3,5);
                enemy17.velocityX = random(3,5);
                enemy18.velocityX = random(3,5);
                enemy19.velocityX = random(3,5);
                enemy20.velocityX = random(3,5);

                skip_pwr1.velocityX = random(3,5);
                skip_pwr2.velocityX = random(3,5);
                skip_pwr3.velocityX = random(3,5);
                
            }
            else if(r === 1){
                enemy1.addImage(pac2);
                enemy2.addImage(pac1);
                enemy3.addImage(pac3);
                enemy4.addImage(pac3);
                enemy5.addImage(pac3);
                enemy6.addImage(pac1);
                enemy7.addImage(pac1);
                enemy8.addImage(pac2);
                enemy9.addImage(pac2);
                enemy10.addImage(pac1);
                enemy11.addImage(pac1);
                enemy12.addImage(pac1);
                enemy13.addImage(pac1);
                enemy14.addImage(pac2);
                enemy15.addImage(pac2);
                enemy16.addImage(pac2);
                enemy17.addImage(pac3);
                enemy18.addImage(pac3);
                enemy19.addImage(pac3);
                enemy20.addImage(pac3);
                
                enemy1.velocityX = random(-3,-5);
                enemy2.velocityX = random(-3,-5);
                enemy3.velocityX = random(-3,-5);
                enemy4.velocityX = random(-3,-5);
                enemy5.velocityX = random(-3,-5);
                enemy6.velocityX = random(-3,-5);
                enemy7.velocityX = random(-3,-5);
                enemy8.velocityX = random(-3,-5);
                enemy9.velocityX = random(-3,-5);
                enemy10.velocityX = random(-3,-5);
                enemy11.velocityX = random(-3,-5);
                enemy12.velocityX = random(-3,-5);
                enemy13.velocityX = random(-3,-5);
                enemy14.velocityX = random(-3,-5);
                enemy15.velocityX = random(-3,-5);
                enemy16.velocityX = random(-3,-5);
                enemy17.velocityX = random(-3,-5);
                enemy18.velocityX = random(-3,-5);
                enemy19.velocityX = random(-3,-5);
                enemy20.velocityX = random(-3,-5);

                skip_pwr1.velocityX = random(-3,-5);
                skip_pwr2.velocityX = random(-3,-5);
                skip_pwr3.velocityX = random(-3,-5);
            
            }
            else if(r === 2){
                enemy1.addImage(pac3);
                enemy2.addImage(pac2);
                enemy3.addImage(pac1);
                enemy4.addImage(pac2);
                enemy5.addImage(pac2);
                enemy6.addImage(pac3);
                enemy7.addImage(pac3);
                enemy8.addImage(pac1);
                enemy9.addImage(pac1)
                enemy10.addImage(pac3);
                enemy11.addImage(pac1);
                enemy12.addImage(pac1);
                enemy13.addImage(pac1);
                enemy14.addImage(pac2);
                enemy15.addImage(pac2);
                enemy16.addImage(pac2);
                enemy17.addImage(pac3);
                enemy18.addImage(pac3);
                enemy19.addImage(pac3);
                enemy20.addImage(pac1);
                
                enemy1.velocityX = random(3,5);
                enemy2.velocityX = random(3,5);
                enemy3.velocityX = random(3,5);
                enemy4.velocityX = random(3,5);
                enemy5.velocityX = random(3,5);
                enemy6.velocityX = random(3,5);
                enemy7.velocityX = random(3,5);
                enemy8.velocityX = random(3,5);
                enemy9.velocityX = random(3,5);
                enemy10.velocityX = random(3,5);
                enemy11.velocityX = random(3,5);
                enemy12.velocityX = random(3,5);
                enemy13.velocityX = random(3,5);
                enemy14.velocityX = random(3,5);
                enemy15.velocityX = random(3,5);
                enemy16.velocityX = random(3,5);
                enemy17.velocityX = random(3,5);
                enemy18.velocityX = random(3,5);
                enemy19.velocityX = random(3,5);
                enemy20.velocityX = random(3,5);
                
                skip_pwr1.velocityX = random(3,5);
                skip_pwr2.velocityX = random(3,5);
                skip_pwr3.velocityX = random(3,5);

            }

            enemy1.y = 5000 - 70 * (Math.round(random(10,20))) + 30;
            enemy2.y = 5000 - 70 * (Math.round(random(10,20))) + 30;
            enemy3.y = 5000 - 70 * (Math.round(random(10,20))) + 30;
            enemy4.y = 5000 - 70 * (Math.round(random(10,20))) + 30;
            enemy5.y = 5000 - 70 * (Math.round(random(20,30))) + 30;
            enemy6.y = 5000 - 70 * (Math.round(random(20,30))) + 30;
            enemy7.y = 5000 - 70 * (Math.round(random(20,30))) + 30;
            enemy8.y = 5000 - 70 * (Math.round(random(20,30))) + 30;
            enemy9.y = 5000 - 70 * (Math.round(random(30,40))) + 30;
            enemy10.y = 5000 - 70 * (Math.round(random(30,40))) + 30;
            enemy11.y = 5000 - 70 * (Math.round(random(30,40))) + 30;
            enemy12.y = 5000 - 70 * (Math.round(random(30,40))) + 30;
            enemy13.y = 5000 - 70 * (Math.round(random(40,50))) + 30;
            enemy14.y = 5000 - 70 * (Math.round(random(40,50))) + 30;
            enemy15.y = 5000 - 70 * (Math.round(random(40,50))) + 30;
            enemy16.y = 5000 - 70 * (Math.round(random(40,50))) + 30; 
            enemy17.y = 5000 - 70 * (Math.round(random(50,60))) + 30;
            enemy18.y = 5000 - 70 * (Math.round(random(50,60))) + 30;
            enemy19.y = 5000 - 70 * (Math.round(random(50,60))) + 30;
            enemy20.y = 5000 - 70 * (Math.round(random(50,60))) + 30;

            skip_pwr1.y = 5000 - 70 * (Math.round(random(10,70))) + 30;
            skip_pwr2.y = 5000 - 70 * (Math.round(random(10,70))) + 30;
            skip_pwr3.y = 5000 - 70 * (Math.round(random(10,70))) + 30;
           
        }

        if(mousePressedOver(know_theStory)){
            gameState = "story";
        }

    }
    else if(gameState === "go"){
        if(r === 0){
            player.velocityX = 7;

            enemy1.scale = 0.1;
            enemy2.scale = 0.1;
            enemy3.scale = 0.14;
            enemy4.scale = 0.1;
            enemy5.scale = 0.1;
            enemy6.scale = 0.14;
            enemy7.scale = 0.14;
            enemy8.scale = 0.1;
            enemy9.scale = 0.1;
            enemy10.scale = 0.1;
            enemy11.scale = 0.1;
            enemy12.scale = 0.1;
            enemy13.scale = 0.1;
            enemy14.scale = 0.14;
            enemy15.scale = 0.14;
            

        }
        else if(r === 1){
            player.velocityX = -7;
            
            enemy1.scale = 0.14;
            enemy2.scale = 0.1;
            enemy3.scale = 0.1;
            enemy4.scale = 0.1;
            enemy5.scale = 0.1; 
            enemy6.scale = 0.1;
            enemy7.scale = 0.1;
            enemy8.scale = 0.14;
            enemy9.scale = 0.14;
            enemy10.scale = 0.1;
            enemy11.scale = 0.1;
            enemy12.scale = 0.1;
            enemy13.scale = 0.1;
            enemy14.scale = 0.14;
            enemy15.scale = 0.14;
           

        }
        else if(r === 2){
            player.velocityX = 7;
            
            enemy1.scale = 0.1;
            enemy2.scale = 0.14;
            enemy3.scale = 0.1;
            enemy4.scale = 0.14;
            enemy5.scale = 0.14;
            enemy6.scale = 0.1;
            enemy7.scale = 0.1;
            enemy8.scale = 0.1;
            enemy9.scale = 0.1;
            enemy10.scale = 0.1;
            enemy11.scale = 0.1;
            enemy12.scale = 0.1;
            enemy13.scale = 0.1;
            enemy14.scale = 0.14;
            enemy15.scale = 0.14;
           

        }

        if(player.velocity != 0){
            gameState = "play";
        }

    }

    else if(gameState === "story"){

        continue_from_story.visible = true;

        textSize(27);
        fill("white");
        text("RON AND HIS FATHER LIVED TOGETHER PEACEFULLY",360,4580);
        text("ONE DAY AFTER RETURNING FROM WORK RON FOUND OUT THAT HIS FATHER WAS BRUTALLY MURDERED",50,4620);
        text("THE POLICE THOUGHT THAT RON WAS THE MURDERER AND SENT HIM TO THE TALLEST JAIL IN THE WORLD",30,4660);
        text("YOU ARE A SPECIAL AGENT AND YOU HAVE BEEN GIVEN THE TASK TO HELP RON BREAK OUT OF THE JAIL AND TO",5,4700);
        text("CATCH THE REAL MURDERER",500,4740);
        text("YOU NEED TO REACH THE TOP WITH RON",430,4780);
        text("ON THE WAY THERE ARE MANY GUARDS YOU'LL FIND, SO BE CAREFUL DON'T GET CAUGHT",150,4820);
        text("ALTHOUGH THERE ARE MANY GUARDS THERE ARE SOME POWERUPS WHICH WILL HELP YOU IN THE ESCAPE",20,4860);
        text("GOOD LOOK ON THE JOURNEY AGENT",450,4900);
        text("RON'S FATHER NEEDS JUSTICE",480,4940);

        if(mousePressedOver(continue_from_story)){
            gameState = "start";
        }
    }

    else if(gameState === "play"){

        if(player.y > 4000){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            }
        }

        else if(player.y < 4750 && player.y > 4500){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }

            if(b <= 255){
                b += 5;
            }
        }

        else if(player.y < 4250 && player.y > 4000){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            } 
        }

        else if(player.y < 3750 && player.y > 3500){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }

            if(b <= 255){
                b += 5;
            }
        }

        else if(player.y < 3250 && player.y > 3000){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            }  
        }

        else if(player.y < 3000 && player.y > 2750){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }

            if(b <= 255){
                b += 5;
            }   
        }

        else if(player.y < 2750 && player.y > 2500){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            }     
        }

        else if(player.y < 2500 && player.y > 2250){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }

            if(b <= 255){
                b += 5;
            }   
        }

        else if(player.y < 2250 && player.y > 2000){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            }   
        }

        else if(player.y < 2000 && player.y > 1750){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }

            if(b <= 255){
                b += 5;
            }   
        }

        else if(player.y < 1750 && player.y > 1500){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            }  
        }

        else if(player.y < 1500 && player.y > 1250){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }

            if(b <= 255){
                b += 5;
            }   
        }

        else if(player.y < 1250 && player.y > 1000){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            } 
        }

        else if(player.y < 1000 && player.y > 750){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }
            
            if(b <= 255){
                b += 5;
            }  
        }

        else if(player.y < 750 && player.y > 500){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            }
        }

        else if(player.y < 500 && player.y > 250){
            if(r >= 0){
                r -= 5;
            }

            if(g <= 255){
                g += 5;           
            }

            if(b <= 255){
                b += 5;
            } 
        }

        else if(player.y < 250 && player.y > 0){
            if(r <= 255){
                r += 5;
            }

            if(g >= 0){
                g -= 5;
            }

            if(b >= 0){
                b -= 5;
            }
        }

        wall1_left.visible = true;
        wall1_right.visible = true;

        wall2_left.visible = true;
        wall2_right.visible = true;
        wall_left_grp.setVisibleEach(true);
        wall_right_grp.setVisibleEach(true);

        platform_grp.setVisibleEach(true);
        dummyPlat.visible = true;
        
        player.visible = true;

        text("SCORE: " + score,100,camera.position.y - 150);
        text("LEVEL 2",1040,3490);
        text("LEVEL 3",1040,1990);
        text("LEVEL 4",1040,490);
        text("LEVEL: " + level,100,camera.position.y - 200);

        if(player.velocityX > 0){
            player.changeAnimation("running - right",player_running_right);
        }

        else if(player.velocityX < 0){
            player.changeAnimation("running - left",player_running_left);
        }
    
        if(player.y < 5000 && player.y > 3500){
            if(player.x > 407 && player.x < 993){
                level = 1;
            }
        }

        else if(player.y < 3500 && player.y > 2000){
            if(player.x > 407 && player.x < 993){
                level = 2;
            }
        }

        else if(player.y < 2000 && player.y > 500){
            if(player.x > 407 && player.x < 993){
                level = 3;
            }
        }

        else if(player.y < 500){
            if(player.x > 407 && player.x < 993){
                level = 4;
            }
        }

        player.bounceOff(wall1_left);
        player.bounceOff(wall1_right)
        player.bounceOff(wall2_left);
        player.bounceOff(wall2_right);

        player.bounceOff(wall_left_grp);
        player.bounceOff(wall_right_grp)


        if(player.y >= 5000){
            deathSound.play();
            gameState = "over";
        }

        if(player.x <= 407 || player.x >= 993){
            player.velocityY += 1;
        }

        if(player.velocityY >= 0){
            player.collide(platform_grp);
        }
        else{
            player.velocityY += 1;
        } 
        
        if(keyDown("space") && player.velocityY >= -1 && player.x > 435 && player.x < 965 ){
            jumpSound.play();
            frame += 1;
            time = timeLimit  - frame_Value;
            if(time >= 0){
                player.velocityY = -11;
                score += 1;
            }   
        }
        else if(keyWentUp("space")){
            frame = 0;
        }

        if(level === 1){
            if(player.velocityX > 0){
                player.velocityX = 7;
            }

            else{
                player.velocityX = -7;
            }
        }

        else if(level === 2){
            if(player.velocityX > 0){
                player.velocityX = 7;
            }

            else{
                player.velocityX = -7;
            }
        }

        else if(level === 3){
            if(player.velocityX > 0){
                player.velocityX = 7;
            }

            else{
                player.velocityX = -7;
            }
        }

        if(player.x === 407.5 || player.x === 992.5){
            text("PRESS 8");
            if(keyCode === 8){
                player.x = 500;
            }
        }

        if(player.isTouching(enemy1) || player.isTouching(enemy2) || player.isTouching(enemy3) || player.isTouching(enemy4) || player.isTouching(enemy5) || player.isTouching(enemy6) || player.isTouching(enemy7) || player.isTouching(enemy8) || player.isTouching(enemy9) || player.isTouching(enemy10) || player.isTouching(enemy11) || player.isTouching(enemy12) || player.isTouching(enemy13) || player.isTouching(enemy14) || player.isTouching(enemy15)){
            gameState = "over";
        }
        if(player.isTouching(skip_pwr1) || player.skip_pwr2 || player.isTouching(skip_pwr3)){
            player.y = player.y - 280;
            
        }

        if(player.y < 0){
            gameState = "win";
        }

    }
    else if(gameState === "win"){
        player.velocityX = 0;
        player.velocityY = 0;

        restart.visible = true;
        end_of_story.visible = true;

        text("YOU WIN",610,6250);
        text("YOU HAVE SUCCESSFULLY HELPED RON, WELL DONE",400,6280);

        player.x = 2000;
        player.y = 6600;

        player.scale = 0.3;

        restart.y = 6700;
        restart.x = 500;

        image(ron_happy,590,6300);

        if(mousePressedOver(restart)){
            gameState = "start";
            player.scale = 0.12;
            
            player.x = 700;
            player.y = 4960;
            score = 0;

        }

        if(mousePressedOver(end_of_story)){
            gameState = "endStory";
        }
    }

    else if(gameState === "endStory"){

        restart.visible = true;
        restart.x = 700;
        restart.y = 6800;

        fill("white");

        text("YOU SUCCESSFULLY HELPED RON BREAK OUT OF PRISON !!!",250,6350); 
        text("RON AND YOU SPENT HOURS INVESTIGATING AND HAVE FINALLY FOUND OUT THE REAL MURDERER",20,6400);
        text("YOU PRESENT YOUR STATEMENTS AND EVIDENCE TO THE COURT",230,6450);
        text("THE MURDERER IS HANGED TO DEATH BY THE COURT ACCORDING TO THE EVIDENCE YOU PROVIDED",5,6500); 
        text("THE STORY ENDS WHEN THE COPS APOLOGISE TO RON FOR SENDING HIM BEHIND THE BARS WITHOUT",0,6550);
        text("PROPER EVIDENCE",550,6600);
        text("WELL DONE AGENT, YOU ARE GETTING PROMOTED, CONGRATULATIONS !!!!!",170,6650); 
        
        if(mousePressedOver(restart)){
            gameState = "start";

            player.scale = 0.12;

            player.x = 700;
            player.y = 4960;

            score = 0;
        }
    }

    else if(gameState === "over"){

        player.changeAnimation("player - crying",ron_cryImg);
        player.velocityX = 0;
        player.velocityY = 0;

        restart.visible = true;

        text("YOU LOST",610,6250);
        text("RON STILL NEEDS YOU, YOU NEED TO HELP HIM",400,6280);

        player.x = 655;
        player.y = 6600;
        player.scale = 0.3;

        if(mousePressedOver(restart)){
            gameState = "start";
            player.scale = 0.12;
            
            player.x = 700;
            player.y = 4964;
            score = 0;

        }
    }

    rand_left = Math.round(random(0,5));
    rand_right = Math.round(random(0,5));

    if(enemy1.isTouching(inv_wall_left) || enemy1.isTouching(inv_wall_right)){
        enemy1.velocityX *= -1;
    }

    if(enemy2.isTouching(inv_wall_left) || enemy2.isTouching(inv_wall_right)){
        enemy2.velocityX *= -1;
    }

    if(enemy3.isTouching(inv_wall_left) || enemy3.isTouching(inv_wall_right)){
        enemy3.velocityX *= -1;
    }

    if(enemy4.isTouching(inv_wall_left) || enemy4.isTouching(inv_wall_right)){
        enemy4.velocityX *= -1;
    }

    if(enemy5.isTouching(inv_wall_left) || enemy5.isTouching(inv_wall_right)){
        enemy5.velocityX *= -1;
    }

    if(enemy6.isTouching(inv_wall_left) || enemy6.isTouching(inv_wall_right)){
        enemy6.velocityX *= -1;
    }

    if(enemy7.isTouching(inv_wall_left) || enemy7.isTouching(inv_wall_right)){
        enemy7.velocityX *= -1;
    }

    if(enemy8.isTouching(inv_wall_left) || enemy8.isTouching(inv_wall_right)){
        enemy8.velocityX *= -1;
    }

    if(enemy9.isTouching(inv_wall_left) || enemy9.isTouching(inv_wall_right)){
        enemy9.velocityX *= -1;
    }

    if(enemy10.isTouching(inv_wall_left) || enemy10.isTouching(inv_wall_right)){
        enemy10.velocityX *= -1;
    }

    if(enemy11.isTouching(inv_wall_left) || enemy11.isTouching(inv_wall_right)){
        enemy11.velocityX *= -1;
    }

    if(enemy12.isTouching(inv_wall_left) || enemy12.isTouching(inv_wall_right)){
        enemy12.velocityX *= -1;
    }

    if(enemy13.isTouching(inv_wall_left) || enemy13.isTouching(inv_wall_right)){
        enemy13.velocityX *= -1;
    }

    if(enemy14.isTouching(inv_wall_left) || enemy14.isTouching(inv_wall_right)){
        enemy14.velocityX *= -1;
    }

    if(enemy15.isTouching(inv_wall_left) || enemy15.isTouching(inv_wall_right)){
        enemy15.velocityX *= -1;
    }

    if(skip_pwr1.isTouching(inv_wall_left) || skip_pwr1.isTouching(inv_wall_right)){
        skip_pwr1.velocityX *= -1;
    }

    if(skip_pwr2.isTouching(inv_wall_left) || skip_pwr2.isTouching(inv_wall_right)){
        skip_pwr2.velocityX *= -1;
    }

    if(skip_pwr3.isTouching(inv_wall_left) || skip_pwr3.isTouching(inv_wall_right)){
        skip_pwr3.velocityX *= -1;
    }
    
    if(frameCount % 10 === 0){

        if(y > 20){
            y -= 70;
        }

        if(y >= 0){
            plat = createSprite(700,y,600,10); 
            plat.depth = start_Screen.depth;
            start_Screen.depth += 1;
            platform_grp.add(plat);
        }
        if(wall_y > 55){
            wall_y -= 70;     
        }

        if(player.y > 2500){
            if(rand_left === 1 || rand_left === 3 || rand_left === 4){
                closedW_left = createSprite(407.5,wall_y,15,60);
                wall_left_grp.add(closedW_left);
            }
            
            if(rand_right === 1 || rand_right === 3 || rand_right === 4){
                closedW_right = createSprite(992.5,wall_y,15,60);
                wall_right_grp.add(closedW_right);
            }
        }

        if(player.y < 2500){
            if(rand_left === 3 || rand_left === 4){
                closedW_left = createSprite(407.5,wall_y,15,60);
                wall_left_grp.add(closedW_left);
            }
            
            if(rand_right === 3 || rand_right === 4){
                closedW_right = createSprite(992.5,wall_y,15,60);
                wall_right_grp.add(closedW_right);
            }
        }
    }
    

    drawSprites();

    fill("yellow");
    text("SKIP",skip_pwr1.x - 30,skip_pwr1.y + 40);
    text("SKIP",skip_pwr2.x - 30,skip_pwr2.y + 40);
    text("SKIP",skip_pwr3.x - 30,skip_pwr3.y + 40);

    if(gameState === "start"){
        textSize(27);
        fill("red");
        text("KNOW THE STORY",807,5115);
    }

    if(gameState === "story"){
        textSize(26);
        fill("yellow");
        text("CONTINUE TO GAME",569,5115);
    }

    if(gameState === "win"){
        fill("red");
        text("END STORY",860,6700);
    }
};
