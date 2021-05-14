var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","10a445b9-17d4-408a-9b28-d8d33b943d12","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf","a1502e09-5ff2-4c6b-af99-713e73225edd","23f3957b-c8a5-4ce3-8c03-6bc3f1752453","88616c08-c219-4bf2-9ff0-134dffb699aa","512888d9-4776-488b-a83f-292eba009c13","9495d077-7d9c-45f7-a3b6-6a3274876bfd","5291f840-8778-4e37-96df-8804b4729192","fa53fe02-0bca-480c-a7dd-351e3c0b12b9","b00b75ee-d17d-44fb-8b03-bf59a366b467","8d1ee2a3-f1d9-4d5b-8edb-87bb4d0b79c2"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit1","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":12,"version":"iBy91iiC1YL5CyachPHcevnwiIKejsbS","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit2","sourceUrl":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":5,"version":"oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword","sourceUrl":null,"frameSize":{"x":100,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"IsGqq3T555ADXJ.x0xRIM0zLQm_KBPT_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":109},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"game over","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"a1502e09-5ff2-4c6b-af99-713e73225edd":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"23f3957b-c8a5-4ce3-8c03-6bc3f1752453":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/w1sZautXAomvGEP4kA4iBLaUJNnzFNl4/category_characters/alienBeige_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"w1sZautXAomvGEP4kA4iBLaUJNnzFNl4","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/w1sZautXAomvGEP4kA4iBLaUJNnzFNl4/category_characters/alienBeige_badge.png"},"88616c08-c219-4bf2-9ff0-134dffb699aa":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/2I28lytcqm1t.Vh_Xhie3F93hbLO6wER/category_characters/alienBlue_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"2I28lytcqm1t.Vh_Xhie3F93hbLO6wER","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2I28lytcqm1t.Vh_Xhie3F93hbLO6wER/category_characters/alienBlue_badge.png"},"512888d9-4776-488b-a83f-292eba009c13":{"name":"enemy4","sourceUrl":"assets/api/v1/animation-library/gamelab/mkU_9f.5u8XgZ1sSNegtcX63W0Fa74Zd/category_characters/alienPink_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"mkU_9f.5u8XgZ1sSNegtcX63W0Fa74Zd","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mkU_9f.5u8XgZ1sSNegtcX63W0Fa74Zd/category_characters/alienPink_badge.png"},"9495d077-7d9c-45f7-a3b6-6a3274876bfd":{"name":"enemy5","sourceUrl":"assets/api/v1/animation-library/gamelab/YCZ5ByKpl70tc6qH2D7JogcW9qAoA1HL/category_characters/alienYellow_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"YCZ5ByKpl70tc6qH2D7JogcW9qAoA1HL","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YCZ5ByKpl70tc6qH2D7JogcW9qAoA1HL/category_characters/alienYellow_badge.png"},"5291f840-8778-4e37-96df-8804b4729192":{"name":"scene","sourceUrl":"assets/v3/animations/kiqNGUz49p2Zyhgo26K-xK_JH2E8x8qng39MPZqeyMQ/5291f840-8778-4e37-96df-8804b4729192.png","frameSize":{"x":284,"y":177},"frameCount":1,"looping":true,"frameDelay":4,"version":"KxaHdhJkOgfHuWa8rBYPb99.3JyiLn7k","loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":177},"rootRelativePath":"assets/v3/animations/kiqNGUz49p2Zyhgo26K-xK_JH2E8x8qng39MPZqeyMQ/5291f840-8778-4e37-96df-8804b4729192.png"},"fa53fe02-0bca-480c-a7dd-351e3c0b12b9":{"name":"sword2","sourceUrl":"assets/api/v1/animation-library/gamelab/yQ7Xty7CyK90_AMrNHQRXYNCu_Vz3Bsc/category_tools/sword_gold.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"yQ7Xty7CyK90_AMrNHQRXYNCu_Vz3Bsc","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yQ7Xty7CyK90_AMrNHQRXYNCu_Vz3Bsc/category_tools/sword_gold.png"},"b00b75ee-d17d-44fb-8b03-bf59a366b467":{"name":"sword3","sourceUrl":"assets/api/v1/animation-library/gamelab/wko3OHkPgCOH.s81pv._i2zHFV02xZPr/category_generic_items/knife_blue.png","frameSize":{"x":92,"y":132},"frameCount":1,"looping":true,"frameDelay":2,"version":"wko3OHkPgCOH.s81pv._i2zHFV02xZPr","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":132},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wko3OHkPgCOH.s81pv._i2zHFV02xZPr/category_generic_items/knife_blue.png"},"8d1ee2a3-f1d9-4d5b-8edb-87bb4d0b79c2":{"name":"You Win","sourceUrl":null,"frameSize":{"x":800,"y":801},"frameCount":1,"looping":true,"frameDelay":12,"version":"DEhK3Ve07QYSBdN_hWxPz4nY7zx64Yqz","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":801},"rootRelativePath":"assets/8d1ee2a3-f1d9-4d5b-8edb-87bb4d0b79c2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Creating game states.
var INITIAL = 3;
var CHOOSE = 2;
var PLAY = 1;
var END = 0;
var gamestate = INITIAL;

//Creating the scene sprite for background.
var scene = createSprite(200,200,200,200);
//Giving animation to it.
scene.setAnimation("scene");
//Adjusting size.
scene.scale = 2.3;

//Creating groups to store sprites.
var fruitgroup = createGroup();
var enemygroup = createGroup();

//Creating the sword sprite.
var sword = createSprite(-100,200,10,10);
//Adjusting its size.
sword.scale = 0.65;
//Setting a collider radius.
sword.setCollider("rectangle",17,-20,35,90,40);

//Variable o store the score.
var score = 0;

//Variable to store the 
var choose = 0;

//Setting text font and text size.
textFont("cursive");
textSize(30);

//Playing the background music.
playSound("assets/category_background/synthesize.mp3",true);

function draw() {
  //Setting background color to white.
  background("white");
  
  //Making sword invisible.
  sword.visible = false;
  
  //Assigning functions when game state is INITIAL.
  if(gamestate === INITIAL) {
    //Changing game state to CHOOSE when 'Enter' is pressed.
    //Playing sound effect.
    if(keyDown("enter")) {
      gamestate = CHOOSE;
      playSound("assets/category_transition/game_whoosh_1.mp3");
    }
  }
  
  //Assigning functions when game state is CHOOSE.
  else if(gamestate === CHOOSE) {
    //Creating 5 bomb sprites.
    //Giving different animation to each of them.
    //Setting a lifetime for each one of them.
    //Changing the frame of each bomb sprite after every 10 frames.
    var bomb1 = createSprite(30,130,10,10);
    bomb1.setAnimation("enemy1");
    bomb1.lifetime = 10;
    if(World.frameCount % 10 === 0) {
      bomb1.nextFrame();
    }
    
    var bomb2 = createSprite(110,130,10,10);
    bomb2.setAnimation("enemy2");
    bomb2.lifetime = 10;
    if(World.frameCount % 10 === 0) {
      bomb2.nextFrame();
    }
    
    var bomb3 = createSprite(190,130,10,10);
    bomb3.setAnimation("enemy3");
    bomb3.lifetime = 10;
    if(World.frameCount % 10 === 0) {
      bomb3.nextFrame();
    }
    
    var bomb4 = createSprite(270,130,10,10);
    bomb4.setAnimation("enemy4");
    bomb4.lifetime = 10;
    if(World.frameCount % 10 === 0) {
      bomb4.nextFrame();
    }
    
    var bomb5 = createSprite(350,130,10,10);
    bomb5.setAnimation("enemy5");
    bomb5.lifetime = 10;
    if(World.frameCount % 10 === 0) {
      bomb5.nextFrame();
    }
    
    //Creating 3 Knife sprites.
    //Giving different animations to each one of them.
    //Setting a lifetime for each one of them.
    //Adjusting their size.
    var knife1 = createSprite(50,320,10,10);
    knife1.setAnimation("sword");
    knife1.lifetime = 10;
    knife1.scale = 0.65;
    
    var knife2 = createSprite(200,320,10,10);
    knife2.setAnimation("sword2");
    knife2.lifetime = 10;
    knife2.scale = 0.65;
    
    var knife3 = createSprite(350,320,10,10);
    knife3.setAnimation("sword3");
    knife3.lifetime = 10;
    knife3.scale = 0.65;
    
    //Changing the main sword's animation to knife1's animation when mouse is pressed over knife1.
    if(mousePressedOver(knife1)) {
      sword.setAnimation("sword");
      //Changing choose's value to 1.
      choose = 1;
      //Playing sound effect.
      playSound("assets/category_whoosh/animation_whoosh13.mp3");
      //Changing game state to 'start'.
      gamestate = "start";
    }
    
    //Changing the main sword's animation to knife2's animation when mouse is pressed over knife2.
    if(mousePressedOver(knife2)) {
      sword.setAnimation("sword2");
      //Changing choose's value to 1.
      choose = 2;
      //Playing sound effect.
      playSound("assets/category_whoosh/light_whoosh.mp3");
      //Changing game state to 'start'.
      gamestate = "start";
    }
    
    //Changing the main sword's animation to knife3's animation when mouse is pressed over knife3.
    if(mousePressedOver(knife3)) {
      sword.setAnimation("sword3");
      //Changing choose's value to 1.
      choose = 3;
      //Playing sound effect.
      playSound("assets/category_swish/thin_whoosh.mp3");
      //Changing game state to 'start'.
      gamestate = "start";
    }
  }
  
  //Assigning functions when game state is 'start'.
  else if(gamestate === "start") {
    //Assigning functions when Left mouse Button is pressed.
    if(mouseDown("leftButton")) {
      //Making the sword move with the mouse. 
      //Making sword's X and Y position equal to mouse's X and Y position. 
      sword.x = World.mouseX;
      sword.y = World.mouseY;
      //Making sword visible.
      sword.visible = true;
      
      //Creating a point sprite.
      var point1 = createSprite(sword.x,sword.y,5,5);
      //Setting its color to 'white'.
      point1.shapeColor = "white";
      //Setting a lifetime for it.
      point1.lifetime = 10;
      
      //Changing point1's and sword's depth so that point1 is created below sword.
      point1.depth = sword.depth;
      sword.depth = sword.depth + 1;
    }
    
    //Changing game state to PLAY when 'enter' is pressed.
    if(keyDown("enter")) {
      gamestate = PLAY;
      //Playing sound effect.
      playSound("assets/category_transition/game_whoosh_1.mp3");
    }
  }
  
  //Assigning functions when game state is PLAY.
  else if(gamestate === PLAY)  {
    //Assigning functions when Left mouse Button is pressed.
    if(mouseDown("leftButton")) {
      //Making the sword move with the mouse. 
      //Making sword's X and Y position equal to mouse's X and Y position. 
      sword.x = World.mouseX;
      sword.y = World.mouseY;
      //Making sword visible.
      sword.visible = true;
      
      //Creating a point sprite.
      var line2 = createSprite(sword.x,sword.y,5,5);
      //Setting its color to 'white'.
      line2.shapeColor = "white";
      //Setting a lifetime for it.
      line2.lifetime = 10;
      
      //Changing point1's and sword's depth so that point1 is created below sword.
      line2.depth = sword.depth;
      sword.depth = sword.depth + 1;
    }
    
    //Calling fruits and enemies functions. 
    fruits();
    enemies();
    
    //Assigning functions when fruitgroup touches the sword sprite, left mouse button is pressed and mouse is moving.
    if(fruitgroup.isTouching(sword) && mouseDown("leftButton") && mouseDidMove()) {
      //Destroying fruitgroup.
      fruitgroup.destroyEach();
      //Updating the score.
      score = score + 2;
      
      //Playing a different sound effect for each when choose's value is 1, 2 or 3.
      if(choose === 1) {
        playSound("assets/category_whoosh/animation_whoosh13.mp3");
      }
      else if(choose === 2) {
        playSound("assets/category_whoosh/light_whoosh.mp3");
      }
      else if(choose === 3) {
        playSound("assets/category_swish/thin_whoosh.mp3");
      }
    }
    
    //Assigning functions when enemygroup touches the sword sprite, left mouse button is pressed and mouse is moving.
    if(enemygroup.isTouching(sword) && mouseDown("leftButton") && mouseDidMove()) {
      //Changing game state to END.
      gamestate = END;
      //Destroying enemygroup.
      enemygroup.destroyEach();
      //Destroying fruitgroup.
      fruitgroup.destroyEach();
      
      //Playing sound effects.
      playSound("assets/category_male_voiceover/game_over_male.mp3");
      playSound("assets/category_transition/negative_game_over_whoosh.mp3");
    }
    
    //Changing game state to 'win' when score is equal to or greater than 50.
    if(score >= 50) {
      gamestate = "win";
      //Destroying enemygroup.
      enemygroup.destroyEach();
      //Destroying fruitgroup.
      fruitgroup.destroyEach();
      
      //Playing sound effects.
      playSound("assets/category_male_voiceover/you_win_male.mp3");
      playSound("assets/applause4.mp3");
    }
  }
  
  //Assigning functions when game state is END.
  else if(gamestate === END)  {
    //Stop playing the background music.
    stopSound("assets/category_background/synthesize.mp3",true);
    
    //Making the sword invisible.
    sword.visible = true;
    
    //Setting X velocity of enemygroup and fruitgroup to 0.
    enemygroup.setVelocityXEach(0);
    fruitgroup.setVelocityXEach(0);
    
    //Changing sword's animation to game over.
    sword.setAnimation("game over");
    //Adjusting its size.
    sword.scale = 1;
    //Re-positioning the sword sprite.
    sword.x = 200;
    sword.y = 200;
    
    //Changing game state to PLAY when key 'r' is pressed.
    if(keyDown("r")) {
      gamestate = PLAY;
      //Adjusting its size.
      sword.scale = 0.65;
      
      //Changing the animation of sword as per the value of choose.
      if(choose === 1) {
        sword.setAnimation("sword");
      }
      else if(choose === 2) {
        sword.setAnimation("sword2");
      }
      else if(choose === 3) {
        sword.setAnimation("sword3");
      }
      
      //Setting score as 0.
      score = 0;
      //Playing sound effect and background music.
      playSound("assets/category_transition/game_whoosh_1.mp3");
      playSound("assets/category_background/synthesize.mp3",true);
      
      //Stop playing two sound effects.
      stopSound("assets/category_male_voiceover/game_over_male.mp3");
      stopSound("assets/category_transition/negative_game_over_whoosh.mp3");
    }
    
    //Changing game state to CHOOSE when 'ctrl' key is pressed.
    if(keyDown("ctrl")) {
      gamestate = CHOOSE;
      //Adjusting its size.
      sword.scale = 0.65;
      //Setting score as 0.
      score = 0;
      //Playing sound effect and background music.
      playSound("assets/category_transition/game_whoosh_1.mp3");
      playSound("assets/category_background/synthesize.mp3",true);
      
      //Stop playing two sound effects.
      stopSound("assets/category_male_voiceover/game_over_male.mp3");
      stopSound("assets/category_transition/negative_game_over_whoosh.mp3");
    }
  }
  
  //Assigning functions when game state is 'win'.
  else if(gamestate === "win") {
    //Stop playing background music.
    stopSound("assets/category_background/synthesize.mp3",true);
    
    //Changing scene's animation.
    scene.setAnimation("You Win");
    //Adjusting its size.
    scene.scale = 0.5;
    
    //Setting X velocity of enemygroup and fruitgroup to 0.
    enemygroup.setVelocityXEach(0);
    fruitgroup.setVelocityXEach(0);
    
    //Changing game state to PLAY when key 'r' is pressed.
    if(keyDown("r")) {
      gamestate = PLAY;
      //Resetting scene's initial animation.
      scene.setAnimation("scene");
      //Adjusting its size.
      scene.scale = 2.3;
      //Setting score as 0.
      score = 0;
      //Playing sound effect and background music.
      playSound("assets/category_transition/game_whoosh_1.mp3");
      playSound("assets/category_background/synthesize.mp3",true);
      
      //Stop playing two sound effects.
      stopSound("assets/category_male_voiceover/you_win_male.mp3");
      stopSound("assets/applause4.mp3");
    }
    
    //Changing game state to CHOOSE when 'ctrl' key is pressed.
    if(keyDown("ctrl")) {
      gamestate = CHOOSE;
      //Resetting scene's initial animation.
      scene.setAnimation("scene");
      //Adjusting its size.
      scene.scale = 2.3;
      //Setting score as 0.
      score = 0;
      //Playing sound effect and background music.
      playSound("assets/category_transition/game_whoosh_1.mp3");
      playSound("assets/category_background/synthesize.mp3",true);
      
      //Stop playing two sound effects.
      stopSound("assets/category_male_voiceover/you_win_male.mp3");
      stopSound("assets/applause4.mp3");
    }
  }
  
  //Displaying the sprites.
  drawSprites();
  
  //Displaying score when game state is PLAY, END, 'start' or 'win'.
  if(gamestate === PLAY || gamestate === END || gamestate === "start" || gamestate === "win") {
    fill("yellow");
    text("Score: " + score,20,60);
  }
  
  //Displaying different text's in different game states.
  if(gamestate === INITIAL) {
    fill("white");
    text("Welcome to Fruit Ninja!",30,30);
    fill("yellow");
    textSize(23);
    text("You are a Martial Arts champion.",10,70);
    text("Your Master has given you a",10,95);
    text("challenge. You have to chop",10,120);
    text("different fruits with the help of",10,145);
    text("your knife and increase your score",10,170);
    text("by 2. To make the challenge harder,",10,195);
    text("your Master will be throwing bombs",10,220);
    text("in between with the fruits. If you",10,245);
    text("chop those bombs with your knife,",10,270);
    text("they would explode and you will lose.",10,295);
    text("You have to score at least 50",10,320);
    text("points to win.",10,345);
    text("Press 'Enter' to continue.",10,380);
  }
  
  else if(gamestate === CHOOSE) {
    fill("yellow");
    textSize(25);
    text("These are the bombs that your",10,50);
    text("Master shall be throwing:",10,80);
    text("Please choose your knife from",10,220);
    text("below:",10,250);
  }
  
  else if(gamestate === "start") {
    textSize(25);
    text("Press the left mouse button to",20,120);
    text("make your knife visible.",20,150);
    text("Use your mouse to move your",20,180);
    text("knife. You can try it now.",20,210);
    text("",20,240);
    text("Press 'Enter' to start the game.",10,280);
  }
  
  else if(gamestate === END) {
    fill("white");
    text("Press 'R' to restart.",50,300);
    text("or",180,330);
    text("Press 'ctrl' (control) to",25,360);
    text("change your knife.",60,390);
  }
  
  else if(gamestate === "win") {
    fill("black");
    textSize(25);
    textStyle(BOLD);
    text("Press 'R' to restart.",70,315);
    text("or",190,340);
    text("Press 'ctrl' (control) to change",10,365);
    text("your knife.",140,390);
  }
}

//Function for fruits.
function fruits() {
  //Creating the fruit sprite after every 80 frames.
  if(World.frameCount % 30 === 0) {
    var fruit = createSprite(randomNumber(50,340),410,10,10);
    //Adjusting its size.
    fruit.scale = 0.2;
    //Giving a lifetime to it.
    fruit.lifetime = 100;
    //Giving Velocity X to it.
    fruit.velocityY = -(8 + (score/6));
    
    //Random number for giving different animations to the fruit sprite.
    var r = randomNumber(1,4);
    fruit.setAnimation("fruit" + r);
    
    //Adding fruit sprite to the fruitgroup.
    fruitgroup.add(fruit);
    console.log(fruit.y);
  }
}  

//Function for enemies.
function enemies()  {
  //Creating the enemy sprite after every 80 frames.
  if (World.frameCount % 100 === 0) {
    var enemy = createSprite(randomNumber(100,300),410,10,10);
    //Giving Velocity X to it.    
    enemy.velocityY = -(9 + (score/10));
    //Giving a lifetime to it.
    enemy.lifetime = 100;
    //Setting a collider radius.
    enemy.setCollider("circle",0,0,20);
    
    //Random number for giving different animations to the enemy sprite.
    var a = randomNumber(1,5); 
    enemy.setAnimation("enemy" + a);
    
    //Adding enemy sprite to the enemygroup.
    enemygroup.add(enemy);
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
