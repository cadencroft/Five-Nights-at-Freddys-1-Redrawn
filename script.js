// ====================================================================================
// ASSET LOADING
// ====================================================================================

const assets = {
    leftDoorButton: {
        on:     "images/left-door-button-on.png",
        off:    "images/left-door-button-off.png"
    },

    leftLightButton: {
        on:     "images/left-light-button-on.png",
        off:    "images/left-light-button-off.png"
    },

    rightDoorButton: {
        on:     "images/right-door-button-on.png",
        off:    "images/right-door-button-off.png"
    },

    rightLightButton: {
        on:     "images/right-light-button-on.png",
        off:    "images/right-light-button-off.png"
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

function preLoadMonitorFrames(){
    assets.monitorFrames.forEach(function(path){
        const img = new Image();
        img.src = path;

    })
};

preLoadMonitorFrames();

// ====================================================================================
// GAME STATE VARIABLES
// ====================================================================================

const gameState = {

    leftDoorState:          "open",
    rightDoorState:         "open",

    leftLightState:         "off",
    rightLightState:        "off",

    testBonnieAppearance:   "off",    //REMOVE LATER AND REPLACE WITH bonnieLocation
    testChicaAppearance:    "off",      //REMOVE LATER AND REPLACE WITH chicaLocation

    monitorStatus:          "down",
    currentCamera:          "1a"
}

// ====================================================================================
// HTML ELEMENT REFERENCES
// ====================================================================================

const elements = {
    leftDoorButton:     document.getElementById("left-door-button"),
    leftLightButton:    document.getElementById("left-light-button"),
    leftDoor:           document.getElementById("left-door"),
    leftDoorwayLight:   document.getElementById("left-doorway-light"),
    leftWindowLight:    document.getElementById("left-window-light"),
    leftDoorwayBonnie:  document.getElementById("left-doorway-bonnie"),
    leftWindowBonnie:   document.getElementById("left-window-bonnie"),

    rightDoorButton:    document.getElementById("right-door-button"),
    rightLightButton:   document.getElementById("right-light-button"),
    rightDoor:          document.getElementById("right-door"),
    rightDoorwayLight:  document.getElementById("right-doorway-light"),
    rightWindowLight:   document.getElementById("right-window-light"),
    rightWindowChica:   document.getElementById("right-window-chica"),

    monitorButton:      document.getElementById("monitor-button"),
    monitor:            document.getElementById("monitor"),
    cameraMap:          document.getElementById("camera-map"),
    cameraButtonsDiv:   document.getElementById("camera-buttons-div"),
    cam1aButton:        document.getElementById("cam-1a-button"),
    cam1bButton:        document.getElementById("cam-1b-button"),
    cam1cButton:        document.getElementById("cam-1c-button"),
    cam2aButton:        document.getElementById("cam-2a-button"),
    cam2bButton:        document.getElementById("cam-2b-button"),
    cam3Button:         document.getElementById("cam-3-button"),
    cam4aButton:        document.getElementById("cam-4a-button"),
    cam4bButton:        document.getElementById("cam-4b-button"),
    cam5Button:         document.getElementById("cam-5-button"),
    cam6Button:         document.getElementById("cam-6-button"),
    cam7Button:         document.getElementById("cam-7-button"),
    cameraBackground:   document.getElementById("camera-background")
}

// ====================================================================================
// EVENT LISTENERS
// ====================================================================================

document.addEventListener("keydown", handleKeyboardInput);

elements.leftDoorButton.addEventListener("click", toggleLeftDoor);
elements.leftLightButton.addEventListener("click", toggleLeftLight);

elements.rightDoorButton.addEventListener("click", toggleRightDoor);
elements.rightLightButton.addEventListener("click", toggleRightLight);

elements.monitorButton.addEventListener("mouseenter", toggleMonitor)

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

// ====================================================================================
// MAIN GAME FUNCTIONS
// ====================================================================================

function handleKeyboardInput(event){
    if      (event.key.toLowerCase() == "b") {

        toggleTestBonnieAppearance();
    }
    else if (event.key.toLowerCase() == "c") {

        toggleTestChicaAppearance();
    }
};

function toggleLeftDoor(){
    if (gameState.leftDoorState == "open") {

            closeDoor("left");
            
        }
        else {

            openDoor("left");
            
        }
};

function toggleLeftLight(){
    if (gameState.leftLightState == "off") {

        turnLightOn("left");
        
    }
    else {

        turnLightOff("left");
        
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

function toggleRightLight(){
    if (gameState.rightLightState == "off") {

        turnLightOn("right");

    }
    else {

        turnLightOff("right");
        
    }
};

function toggleMonitor(){
    if (gameState.monitorStatus == "down") {

        flipMonitorUp();

    }
    else {
        
        flipMonitorDown();
    }
};

function switchCamera(newCamera){

    console.log(newCamera);     //REMOVE LATER

    // Turn current camera button off
    setCameraButton(gameState.currentCamera, "off");
    
    // Turn new camera button on
    setCameraButton(newCamera, "on")

    // Update the current camera
    gameState.currentCamera = newCamera;

    //Change to new camera's image
    setCameraBackground(newCamera);
};


// ====================================================================================
// HELPER FUNCTIONS
// ====================================================================================

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
}

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
}

function turnLightOff(side){

    if(side == "left"){
        elements.leftLightButton.src = assets.leftLightButton.off;
        gameState.leftLightState = "off";

        elements.leftDoorwayLight.style.opacity = 0;
        elements.leftWindowLight.style.opacity = 0;

        //This statment is for the Bonnie test, it can be removed eventually
        elements.leftDoorwayBonnie.style.opacity = 0;   //REMOVE LATER
        elements.leftWindowBonnie.style.opacity = 0;    //REMOVE LATER
    }
    else{
        elements.rightLightButton.src = assets.rightLightButton.off;
        gameState.rightLightState = "off";

        elements.rightDoorwayLight.style.opacity = 0;
        elements.rightWindowLight.style.opacity = 0;

        //This statment is for the Bonnie test, it can be removed eventually
        elements.rightWindowChica.style.opacity = 0;    //REMOVE LATER
    }
};

function turnLightOn(side){

    if(side == "left"){
        elements.leftLightButton.src = assets.leftLightButton.on;
        gameState.leftLightState = "on";

        //This if statment is for the Bonnie test, it can be removed eventually
        if (gameState.testBonnieAppearance == "off") {
            elements.leftDoorwayLight.style.opacity = 1;
            elements.leftWindowLight.style.opacity = 1;
        }
        else {
            elements.leftDoorwayBonnie.style.opacity = 1;   //REMOVE LATER
            elements.leftWindowBonnie.style.opacity = 1;    //REMOVE LATER
        }
    }
    else{
        elements.rightLightButton.src = assets.rightLightButton.on;
        gameState.rightLightState = "on";

        elements.rightDoorwayLight.style.opacity = 1;

        //This if statment is for the Bonnie test, it can be removed eventually
        if (gameState.testChicaAppearance == "off") {
            elements.rightWindowLight.style.opacity = 1;
        }
        else {
            elements.rightWindowChica.style.opacity = 1;    //REMOVE LATER
        }
    }

};

function flipMonitorUp(){

    //Force door lights off
    turnLightOff("left");
    turnLightOff("right");

    elements.monitor.style.pointerEvents = "all";
    let monitorFrame = 1;

    let monitorSequence = setInterval(function () {
        elements.monitor.src = assets.monitorFrames[monitorFrame];

        monitorFrame++;

        if (monitorFrame > 9) {
            clearInterval(monitorSequence);
            gameState.monitorStatus = "up";
            elements.monitorButton.style.zIndex = 30;
            elements.cameraMap.style.opacity = 1;
            elements.cameraButtonsDiv.style.opacity = 1;

            elements.cameraBackground.style.opacity = 0.4
        }

    }, 40);

};

function flipMonitorDown(){

    let monitorFrame = 8;
    elements.monitorButton.style.zIndex = 10;
    elements.cameraMap.style.opacity = 0;
    elements.cameraButtonsDiv.style.opacity = 0;
    elements.cameraBackground.style.opacity = 0;

    let monitorSequence = setInterval(function () {
        elements.monitor.src = assets.monitorFrames[monitorFrame];

        monitorFrame--;

        if (monitorFrame < 0) {
            clearInterval(monitorSequence);
            gameState.monitorStatus = "down";
            elements.monitor.style.pointerEvents = "none";
        }
    }, 40);
};



function setCameraButton(camera, state){
    //Changes the path of the respective camera button using string manipulation
    if(state == "on"){
        elements[`cam${camera}Button`].src = `images/monitor/cam-${camera}-button-on.png`;
    }
    else{
        elements[`cam${camera}Button`].src = `images/monitor/cam-${camera}-button-off.png`;
    }
}

function setCameraBackground(camera){
    elements.cameraBackground.src = `images/monitor/cam-${camera}.png`;

};

//TEMPORARY FUNCTION - REMOVE LATER
function toggleTestBonnieAppearance(){
    if (gameState.testBonnieAppearance == "off") {
        gameState.testBonnieAppearance = "on";
    }
    else {
        gameState.testBonnieAppearance = "off";
    }
    console.log("Bonnie: ", gameState.testBonnieAppearance);    
}

//TEMPORARY FUNCTION - REMOVE LATER
function toggleTestChicaAppearance(){
    if (gameState.testChicaAppearance == "off") {
        gameState.testChicaAppearance = "on";
    }
    else {
        gameState.testChicaAppearance = "off";
    }
    console.log("Chica: ", gameState.testChicaAppearance);
}