//  ====================================================================================
//* ASSET LOADING
//  ====================================================================================

const assets = {
    leftDoorButton: {
        on:     "images/doors-buttons/left-door-button-on.png",
        off:    "images/doors-buttons/left-door-button-off.png"
    },

    leftLightButton: {
        on:     "images/doors-buttons/left-light-button-on.png",
        off:    "images/doors-buttons/left-light-button-off.png"
    },

    rightDoorButton: {
        on:     "images/doors-buttons/right-door-button-on.png",
        off:    "images/doors-buttons/right-door-button-off.png"
    },

    rightLightButton: {
        on:     "images/doors-buttons/right-light-button-on.png",
        off:    "images/doors-buttons/right-light-button-off.png"
    },

    monitorFrames: [
        "images/monitor/monitor-frame0.png",
        "images/monitor/monitor-frame1.png",
        "images/monitor/monitor-frame2.png",
        "images/monitor/monitor-frame3.png",
        "images/monitor/monitor-frame4.png",
        "images/monitor/monitor-frame5.png",
        "images/monitor/monitor-frame6.png",
        "images/monitor/monitor-frame7.png",
        "images/monitor/monitor-frame8.png",
        "images/monitor/monitor-frame9.png"
    ]
};

// ====================================================================================
// * GAME STATE VARIABLES
// ====================================================================================

const gameState = {

    currentScreen:                  "title",        // title | nightSelect | options | game | gameOver
    currentNight:                   "1",            // 1 | 2 | 3 | 4 | 5

    leftDoorState:                  "open",         // open | closed
    rightDoorState:                 "open",         // open | closed

    leftLightState:                 "off",          // off | on
    rightLightState:                "off",          // off | on

    testBonnieAppearance:           "off",          // off | on     //TODO REMOVE LATER
    testChicaAppearance:            "off",          // off | on     //TODO REMOVE LATER 

    monitorStatus:                  "down",         // down | up
    monitorAnimationState:          "finished",     // finished | inProgress
    mouseInMonitorButtonHitbox:     "no",           // no | yes

    currentCamera:                  "1a"            // 1a | 1b | 1c | 2a | 2b | 3 | 4a | 4b | 5 | 6 | 7
}

//  ====================================================================================
//* HTML ELEMENT REFERENCES
//  ====================================================================================

const elements = {

    fadeBlackScreen:        document.getElementById("fade-black-screen"),

    nightText:              document.getElementById("night-text"),

    titleScreen:            document.getElementById("title-screen"),
    playButton:             document.getElementById("play-button"),
    optionsButton:          document.getElementById("options-button"),

    nightSelectScreen:      document.getElementById("night-select-screen"),
    nightSelectNight1Text:  document.getElementById("night-select-night-1-text"),
    nightSelectNight2Text:  document.getElementById("night-select-night-2-text"),
    nightSelectNight3Text:  document.getElementById("night-select-night-3-text"),
    nightSelectNight4Text:  document.getElementById("night-select-night-4-text"),
    nightSelectNight5Text:  document.getElementById("night-select-night-5-text"),
    nightSelectBackText:    document.getElementById("night-select-back-text"),

    gameWorld:              document.getElementById("game-world"),
    leftDoorButton:         document.getElementById("left-door-button"),
    leftLightButton:        document.getElementById("left-light-button"),
    leftDoor:               document.getElementById("left-door"),
    leftDoorwayLight:       document.getElementById("left-doorway-light"),
    leftWindowLight:        document.getElementById("left-window-light"),
    leftDoorwayBonnie:      document.getElementById("left-doorway-bonnie"),
    leftWindowBonnie:       document.getElementById("left-window-bonnie"),

    rightDoorButton:        document.getElementById("right-door-button"),
    rightLightButton:       document.getElementById("right-light-button"),
    rightDoor:              document.getElementById("right-door"),
    rightDoorwayLight:      document.getElementById("right-doorway-light"),
    rightWindowLight:       document.getElementById("right-window-light"),
    rightWindowChica:       document.getElementById("right-window-chica"),

    monitorUI:              document.getElementById("monitor-ui"),
    monitorButton:          document.getElementById("monitor-button"),
    monitorButtonHitbox:    document.getElementById("monitor-button-hitbox"),
    monitorAnimation:       document.getElementById("monitor-animation"),
    
    cameraUI:               document.getElementById("camera-ui"),
    cameraMap:              document.getElementById("camera-map"),
    cameraButtonsDiv:       document.getElementById("camera-buttons-div"),
    cam1aButton:            document.getElementById("cam-1a-button"),
    cam1bButton:            document.getElementById("cam-1b-button"),
    cam1cButton:            document.getElementById("cam-1c-button"),
    cam2aButton:            document.getElementById("cam-2a-button"),
    cam2bButton:            document.getElementById("cam-2b-button"),
    cam3Button:             document.getElementById("cam-3-button"),
    cam4aButton:            document.getElementById("cam-4a-button"),
    cam4bButton:            document.getElementById("cam-4b-button"),
    cam5Button:             document.getElementById("cam-5-button"),
    cam6Button:             document.getElementById("cam-6-button"),
    cam7Button:             document.getElementById("cam-7-button"),
    cameraBackground:       document.getElementById("camera-background")
}

//  ====================================================================================
//* ELEMENT DICTIONARIES
//  ====================================================================================

const screens = {
    title:                  elements.titleScreen,
    nightSelect:            elements.nightSelectScreen
}

//  ====================================================================================
//* EVENT LISTENERS
//  ====================================================================================

window.addEventListener("load", loadIn);
document.addEventListener("keydown", handleKeyboardInput);

elements.playButton.addEventListener("click", pressPlay);
elements.optionsButton.addEventListener("click", pressOptions);

elements.nightSelectNight1Text.addEventListener("click", pressNight1);
elements.nightSelectNight2Text.addEventListener("click", pressNight2);
elements.nightSelectNight3Text.addEventListener("click", pressNight3);
elements.nightSelectNight4Text.addEventListener("click", pressNight4);
elements.nightSelectNight5Text.addEventListener("click", pressNight5);
elements.nightSelectBackText.addEventListener("click", pressBack);


elements.leftDoorButton.addEventListener("click", toggleLeftDoor);
elements.leftLightButton.addEventListener("click", toggleLeftLight);

elements.rightDoorButton.addEventListener("click", toggleRightDoor);
elements.rightLightButton.addEventListener("click", toggleRightLight);

elements.monitorButtonHitbox.addEventListener("mouseenter", toggleMonitor);
elements.monitorButtonHitbox.addEventListener("mouseleave", mouseLeaveMonitorButtonHitboxEvent)

elements.cam1aButton.addEventListener("click", () => switchCamera("1a"));
elements.cam1bButton.addEventListener("click", () => switchCamera("1b"));
elements.cam1cButton.addEventListener("click", () => switchCamera("1c"));
elements.cam2aButton.addEventListener("click", () => switchCamera("2a"));
elements.cam2bButton.addEventListener("click", () => switchCamera("2b"));
elements.cam3Button.addEventListener("click",  () => switchCamera("3"));
elements.cam4aButton.addEventListener("click", () => switchCamera("4a"));
elements.cam4bButton.addEventListener("click", () => switchCamera("4b"));
elements.cam5Button.addEventListener("click",  () => switchCamera("5"));
elements.cam6Button.addEventListener("click",  () => switchCamera("6"));
elements.cam7Button.addEventListener("click",  () => switchCamera("7"));

//  ====================================================================================
//* BOOTING & PRE-LOADING
//  ====================================================================================

function loadIn(){

    preLoadAssets();
    
    console.log("Load");
    setTimeout(() => fadeFromBlack(3), 100);
};

function preLoadAssets(){
    preLoadMonitorFrames();
};

function preLoadMonitorFrames(){
    assets.monitorFrames.forEach(function(path){
        const img = new Image();
        img.src = path;

    })
};

//  ====================================================================================
//* SCREEN MANAGEMENT
//  ====================================================================================


function switchToScreen(newScreen){
    hideScreen(gameState.currentScreen);
    showScreen(newScreen);

    gameState.currentScreen = newScreen;
}

function showScreen(newScreen){

    console.log("Showing Screen: ", newScreen)

    screens[newScreen].style.opacity = 1;
    screens[newScreen].style.pointerEvents = "auto";

    
};

function hideScreen(oldScreen){

    console.log("Hiding Screen: ", oldScreen)

    screens[oldScreen].style.opacity = 0;
    screens[oldScreen].style.pointerEvents = "none";

};



//  ====================================================================================
//* TITLE SCREEN
//  ====================================================================================

function pressPlay(){
    console.log("Play Pressed");

    playMonitorUpAnimation(() => switchToScreen("nightSelect"));
    

    // fadeToBlack(2);
    
    // setTimeout(hideTitleScreen, 2000); //Removed this function (Use switchToScreen() instead)

    // setTimeout(showNightText, 3000);

    // setTimeout(hideNightText, 6000);

    // setTimeout(startGame, 7000);
};

function fadeToBlack(seconds){
    elements.fadeBlackScreen.style.transition = `opacity ${seconds}s`;
    elements.fadeBlackScreen.style.opacity = 1; //2s transition
    elements.fadeBlackScreen.style.pointerEvents = "auto";
};

function fadeFromBlack(seconds){
    elements.fadeBlackScreen.style.transition = `opacity ${seconds}s`;
    elements.fadeBlackScreen.style.opacity = 0;
    elements.fadeBlackScreen.style.pointerEvents = "none";
};

function showNightText(){
    elements.nightText.style.opacity = 1;
};

function hideNightText(){
    elements.nightText.style.opacity = 0;
};

function pressOptions(){
    console.log("Options Pressed");
    // TODO LATER
};

//  ====================================================================================
//* NIGHT SELECT SCREEN
//  ====================================================================================


function pressNight1(){
    console.log("Night 1 pressed");
}

function pressNight2(){
    console.log("Night 2 pressed");
}

function pressNight3(){
    console.log("Night 3 pressed");
}

function pressNight4(){
    console.log("Night 4 pressed");
}

function pressNight5(){
    console.log("Night 5 pressed");
}

function pressBack(){
    console.log("Back pressed");

    playMonitorDownAnimation(switchToScreen("title"));
}


//  ====================================================================================
//* GAME
//  ====================================================================================

function startGame(){

    initializeNight();
    
    showGameWorld();  //Removed this method. (Use switchToScreen() instead)

    fadeFromBlack(7);

};

function initializeNight(){

    initializeDoors();

    initializeLights();

    initializeMonitor();

    initializeCamera();

};

//  ====================================================================================
//* DOORS
//  ====================================================================================

function toggleLeftDoor(){
    if (gameState.leftDoorState == "open") {

        closeDoor("left");
        
    }
    else {

        openDoor("left");
        
    }
};

function toggleRightDoor(){
    if (gameState.rightDoorState == "open") {

        closeDoor("right");
        
    }
    else {

        openDoor("right");
        
    }
};

function closeDoor(side){
    if(side == "left"){
        elements.leftDoorButton.src = assets.leftDoorButton.on;
        gameState.leftDoorState = "closed";

        elements.leftDoor.style.top = "158px";
    }
    else{
        elements.rightDoorButton.src = assets.rightDoorButton.on;
        gameState.rightDoorState = "closed";

        elements.rightDoor.style.top = "158px";

    }
};

function openDoor(side){
    if(side == "left"){
        elements.leftDoorButton.src = assets.leftDoorButton.off;
        gameState.leftDoorState = "open";

        elements.leftDoor.style.top = "-354px";
    }
    else{
        elements.rightDoorButton.src = assets.rightDoorButton.off;
        gameState.rightDoorState = "open";

        elements.rightDoor.style.top = "-354px";
    }
};

function initializeDoors(){
    openDoor("left");
    openDoor("right");
};

//  ====================================================================================
//* LIGHTS
//  ====================================================================================

function toggleLeftLight(){
    if (gameState.leftLightState == "off") {

        turnLightOn("left");
        
    }
    else {

        turnLightOff("left");
        
    }
};

function toggleRightLight(){
    if (gameState.rightLightState == "off") {

        turnLightOn("right");

    }
    else {

        turnLightOff("right");
        
    }
};

function turnLightOff(side){

    if(side == "left"){
        elements.leftLightButton.src = assets.leftLightButton.off;
        gameState.leftLightState = "off";

        elements.leftDoorwayLight.style.opacity = 0;
        elements.leftWindowLight.style.opacity = 0;

        // TODO This statment is for the Bonnie test, it can be removed eventually
        elements.leftDoorwayBonnie.style.opacity = 0;   //REMOVE LATER
        elements.leftWindowBonnie.style.opacity = 0;    //REMOVE LATER
    }
    else{
        elements.rightLightButton.src = assets.rightLightButton.off;
        gameState.rightLightState = "off";

        elements.rightDoorwayLight.style.opacity = 0;
        elements.rightWindowLight.style.opacity = 0;

        // TODO This statment is for the Chica test, it can be removed eventually
        elements.rightWindowChica.style.opacity = 0;    //REMOVE LATER
    }
};

function turnLightOn(side){

    if(side == "left"){
        elements.leftLightButton.src = assets.leftLightButton.on;
        gameState.leftLightState = "on";

        //TODO This if statment is for the Bonnie test, it can be removed eventually
        if (gameState.testBonnieAppearance == "off") {
            elements.leftDoorwayLight.style.opacity = 1;
            elements.leftWindowLight.style.opacity = 1;
        }
        else {
            elements.leftDoorwayBonnie.style.opacity = 1;   //TODO REMOVE LATER
            elements.leftWindowBonnie.style.opacity = 1;    //TODO REMOVE LATER
        }
    }
    else{
        elements.rightLightButton.src = assets.rightLightButton.on;
        gameState.rightLightState = "on";

        elements.rightDoorwayLight.style.opacity = 1;

        //TODO This if statment is for the Chica test, it can be removed eventually
        if (gameState.testChicaAppearance == "off") {
            elements.rightWindowLight.style.opacity = 1;
        }
        else {
            elements.rightWindowChica.style.opacity = 1;    //TODO REMOVE LATER
        }
    }

};

function initializeLights(){
    turnLightOff("left");
    turnLightOff("right");
};

//  ====================================================================================
//* MONITOR
//  ====================================================================================

function toggleMonitor(){

    gameState.mouseInMonitorButtonHitbox = "yes";

    if (gameState.monitorAnimationState == "inProgress") return;

    makeMonitorButtonHidden();

    if (gameState.monitorStatus == "down") {

        flipMonitorUp();

    }
    else {
        
        flipMonitorDown();
    }
};

function makeMonitorButtonHidden(){
    elements.monitorButton.style.opacity = 0;
};

function makeMonitorButtonVisible(){
    elements.monitorButton.style.opacity = 1;
    elements.monitorButtonHitbox.style.pointerEvents = "auto";
};

function flipMonitorUp(){

    //Force door lights off
    turnLightOff("left");
    turnLightOff("right");

    // showCameraUI is sent as a callback to play when the animation is finished
    playMonitorUpAnimation(showCameraUI);

};

function playMonitorUpAnimation(callback){

    gameState.monitorAnimationState = "inProgress";

    let monitorFrame = 1;

    let monitorSequence = setInterval(function () {
        elements.monitorAnimation.src = assets.monitorFrames[monitorFrame];

        monitorFrame++;

        if (monitorFrame > 9) {

            clearInterval(monitorSequence);

            gameState.monitorAnimationState = "finished";
            gameState.monitorStatus = "up";
  
            // Runs the function that was passed in after the animation finishes 
            if(callback){
                callback();
            }
        }
    }, 40);
};

function flipMonitorDown(){
    
    hideCameraUI()

    playMonitorDownAnimation();
    
};

function playMonitorDownAnimation(callback){
    
    gameState.monitorAnimationState = "inProgress";

    let monitorFrame = 8;
    
    let monitorSequence = setInterval(function () {
        elements.monitorAnimation.src = assets.monitorFrames[monitorFrame];

        monitorFrame--;

        if (monitorFrame < 0) {
            clearInterval(monitorSequence);

            gameState.monitorAnimationState = "finished";
            gameState.monitorStatus = "down";

            if(gameState.currentScreen == "game" && gameState.mouseInMonitorButtonHitbox == "no"){
                makeMonitorButtonVisible();
            }

            if(callback){
                callback();
            }
        }
    }, 40);
};

function mouseLeaveMonitorButtonHitboxEvent(){
    gameState.mouseInMonitorButtonHitbox = "no";

    if (gameState.monitorAnimationState == "finished"){
        makeMonitorButtonVisible();
    }

};

function initializeMonitor(){
    gameState.monitorStatus = "down";
    gameState.monitorAnimationState = "finished";
    gameState.mouseInMonitorButtonHitbox = "no";

    elements.monitorAnimation.src = assets.monitorFrames[0];

    elements.cameraMap.style.opacity = 0;
    elements.cameraButtonsDiv.style.opacity = 0;
    elements.cameraBackground.style.opacity = 0;

    makeMonitorButtonVisible();
};

//  ====================================================================================
//* CAMERAS
//  ====================================================================================

function showCameraUI(){
    elements.cameraUI.style.pointerEvents = "auto";

    elements.cameraMap.style.opacity = 1;
    elements.cameraButtonsDiv.style.opacity = 1;
    elements.cameraBackground.style.opacity = 0.4;  
    
    if(gameState.mouseInMonitorButtonHitbox == "no"){
        makeMonitorButtonVisible();
    }  
};

function hideCameraUI(){
    elements.cameraUI.style.pointerEvents = "none";

    elements.cameraMap.style.opacity = 0;
    elements.cameraButtonsDiv.style.opacity = 0;
    elements.cameraBackground.style.opacity = 0;
};

function switchCamera(newCamera){

    console.log(newCamera);     // TODO REMOVE LATER

    // Turn current camera button off
    setCameraButton(gameState.currentCamera, "off");
    
    // Update the current camera
    gameState.currentCamera = newCamera;

    // Turn new camera button on
    setCameraButton(gameState.currentCamera, "on")

    //Change to new camera's image
    setCameraBackground(gameState.currentCamera);
};

function setCameraButton(camera, state){
    //Changes the path of the respective camera button using string manipulation
    elements[`cam${camera}Button`].src = `images/monitor/cam-${camera}-button-${state}.png`;

}

function setCameraBackground(camera){
    elements.cameraBackground.src = `images/monitor/cam-${camera}.png`;

};

function initializeCamera(){

    const startingCamera = "1a";

    setCameraButton(gameState.currentCamera, "off");

    gameState.currentCamera = startingCamera;

    setCameraButton(gameState.currentCamera, "on");

    setCameraBackground(gameState.currentCamera);
};

//  ====================================================================================
//* DEBUGGING / TEMPORARY FUNCTIONS
//  ====================================================================================

function handleKeyboardInput(event){
    if      (event.key.toLowerCase() == "b") {

        toggleTestBonnieAppearance();
    }
    else if (event.key.toLowerCase() == "c") {

        toggleTestChicaAppearance();
    }

    else if (event.key.toLowerCase() == "r"){
        location.reload();
    }
};

function toggleTestBonnieAppearance(){
    if (gameState.testBonnieAppearance == "off") {
        gameState.testBonnieAppearance = "on";
    }
    else {
        gameState.testBonnieAppearance = "off";
    }
    console.log("Bonnie: ", gameState.testBonnieAppearance);    
}

function toggleTestChicaAppearance(){
    if (gameState.testChicaAppearance == "off") {
        gameState.testChicaAppearance = "on";
    }
    else {
        gameState.testChicaAppearance = "off";
    }
    console.log("Chica: ", gameState.testChicaAppearance);
}