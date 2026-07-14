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

    monitorStatus:          "down"


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
    monitor:            document.getElementById("monitor")
    
}

// ====================================================================================
// EVENT LISTENERS
// ====================================================================================

elements.leftDoorButton.addEventListener("click", toggleLeftDoor);
elements.leftLightButton.addEventListener("click", toggleLeftLight);

elements.rightDoorButton.addEventListener("click", toggleRightDoor);
elements.rightLightButton.addEventListener("click", toggleRightLight);

document.addEventListener("keydown", handleKeyboardInput);

elements.monitorButton.addEventListener("mouseenter", toggleMonitor)

// ====================================================================================
// GAME FUNCTIONS
// ====================================================================================

function toggleLeftDoor(){
    if (gameState.leftDoorState == "open") {
            elements.leftDoorButton.src = assets.leftDoorButton.on;
            gameState.leftDoorState = "closed";

            elements.leftDoor.style.top = "158px";
        }
        else {
            elements.leftDoorButton.src = assets.leftDoorButton.off;
            gameState.leftDoorState = "open";

            elements.leftDoor.style.top = "-354px";
        }
}

function toggleLeftLight(){
    if (gameState.leftLightState == "off") {
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
    else {
        elements.leftLightButton.src = assets.leftLightButton.off;
        gameState.leftLightState = "off";

        elements.leftDoorwayLight.style.opacity = 0;
        elements.leftWindowLight.style.opacity = 0;

        //This statment is for the Bonnie test, it can be removed eventually
        elements.leftDoorwayBonnie.style.opacity = 0;   //REMOVE LATER
        elements.leftWindowBonnie.style.opacity = 0;    //REMOVE LATER
    }
}

function toggleRightDoor(){
    if (gameState.rightDoorState == "open") {
        elements.rightDoorButton.src = assets.rightDoorButton.on;
        gameState.rightDoorState = "closed";

        elements.rightDoor.style.top = "158px";
    }
    else {
        elements.rightDoorButton.src = assets.rightDoorButton.off;
        gameState.rightDoorState = "open";

        elements.rightDoor.style.top = "-354px";
    }
}

function toggleRightLight(){
    if (gameState.rightLightState == "off") {
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
    else {
        elements.rightLightButton.src = assets.rightLightButton.off;
        gameState.rightLightState = "off";

        elements.rightDoorwayLight.style.opacity = 0;
        elements.rightWindowLight.style.opacity = 0;

        //This statment is for the Bonnie test, it can be removed eventually
        elements.rightWindowChica.style.opacity = 0;    //REMOVE LATER
    }
}

function handleKeyboardInput(event){
    if (event.key.toLowerCase() == "b") {
        if (gameState.testBonnieAppearance == "off") {
            gameState.testBonnieAppearance = "on";
        }
        else {
            gameState.testBonnieAppearance = "off";
        }
        console.log("Bonnie: ", gameState.testBonnieAppearance);    //REMOVE LATER
    }
    else if (event.key.toLowerCase() == "c") {
        if (gameState.testChicaAppearance == "off") {
            gameState.testChicaAppearance = "on";
        }
        else {
            gameState.testChicaAppearance = "off";
        }
        console.log("Chica: ", gameState.testChicaAppearance);      //REMOVE LATER
    }
}

function toggleMonitor(){
    // Monitor up sequence
    if (gameState.monitorStatus == "down") {
        elements.monitor.style.pointerEvents = "all";
        let monitorFrame = 1;

        let monitorSequence = setInterval(function () {
            elements.monitor.src = assets.monitorFrames[monitorFrame];

            monitorFrame++;

            if (monitorFrame > 9) {
                clearInterval(monitorSequence);
                gameState.monitorStatus = "up";
                elements.monitorButton.style.zIndex = 30;
            }

        }, 40);

    }

    // Monitor down sequence
    else {

        let monitorFrame = 8;
        elements.monitorButton.style.zIndex = 10;

        let monitorSequence = setInterval(function () {
            elements.monitor.src = assets.monitorFrames[monitorFrame]

            monitorFrame--;

            if (monitorFrame < 0) {
                clearInterval(monitorSequence);
                gameState.monitorStatus = "down";
                elements.monitor.style.pointerEvents = "none";
            }
        }, 40);
    }
}
