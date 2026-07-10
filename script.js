//Test Bonnie and Chica appearances. This will be removed later
let testBonnieAppearance = "off";
let testChicaAppearance = "off";

document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() == "b") {
        if (testBonnieAppearance == "off") {
            testBonnieAppearance = "on";
        }
        else {
            testBonnieAppearance = "off";
        }
        console.log("Bonnie: ", testBonnieAppearance);
    }
    else if (event.key.toLowerCase() == "c") {
        if (testChicaAppearance == "off") {
            testChicaAppearance = "on";
        }
        else {
            testChicaAppearance = "off";
        }
        console.log("Chica: ", testChicaAppearance);
    }
});




// Door and Light Buttons
const leftDoorButton = document.getElementById("left-door-button");
let leftDoorButtonState = "off";

leftDoorButton.addEventListener("click", function () {
    if (leftDoorButtonState == "off") {
        leftDoorButton.src = "images/left-door-button-on.png";
        leftDoorButtonState = "on";

        document.getElementById("left-door").style.top = "158px";
    }
    else {
        leftDoorButton.src = "images/left-door-button-off.png";
        leftDoorButtonState = "off";

        document.getElementById("left-door").style.top = "-354px";
    }
});

const leftLightButton = document.getElementById("left-light-button");
let leftLightButtonState = "off";

leftLightButton.addEventListener("click", function () {
    if (leftLightButtonState == "off") {

        leftLightButton.src = "images/left-light-button-on.png";
        leftLightButtonState = "on";

        //This if statment is for the Bonnie test, it can be removed eventually
        if (testBonnieAppearance == "off") {
            document.getElementById("left-doorway-light").style.opacity = 1;
            document.getElementById("left-window-light").style.opacity = 1;
        }
        else {
            document.getElementById("left-doorway-bonnie").style.opacity = 1;   //REMOVE LATER
            document.getElementById("left-window-bonnie").style.opacity = 1;    //REMOVE LATER
        }
    }
    else {
        leftLightButton.src = "images/left-light-button-off.png";
        leftLightButtonState = "off";

        document.getElementById("left-doorway-light").style.opacity = 0;
        document.getElementById("left-window-light").style.opacity = 0;

        //This statment is for the Bonnie test, it can be removed eventually
        document.getElementById("left-doorway-bonnie").style.opacity = 0;   //REMOVE LATER
        document.getElementById("left-window-bonnie").style.opacity = 0;    //REMOVE LATER
    }
});

const rightDoorButton = document.getElementById("right-door-button");
let rightDoorButtonState = "off";

rightDoorButton.addEventListener("click", function () {
    if (rightDoorButtonState == "off") {
        rightDoorButton.src = "images/right-door-button-on.png";
        rightDoorButtonState = "on";

        // document.getElementById("right-door").style.opacity = 1;
        document.getElementById("right-door").style.top = "158px";
    }
    else {
        rightDoorButton.src = "images/right-door-button-off.png";
        rightDoorButtonState = "off";

        // document.getElementById("right-door").style.opacity = 0;
        document.getElementById("right-door").style.top = "-354px";
    }
});

const rightLightButton = document.getElementById("right-light-button");
let rightLightButtonState = "off";

rightLightButton.addEventListener("click", function () {
    if (rightLightButtonState == "off") {
        rightLightButton.src = "images/right-light-button-on.png";
        rightLightButtonState = "on";

        document.getElementById("right-doorway-light").style.opacity = 1;

        //This if statment is for the Bonnie test, it can be removed eventually
        if (testChicaAppearance == "off") {
            document.getElementById("right-window-light").style.opacity = 1;
        }
        else {
            document.getElementById("right-window-chica").style.opacity = 1;    //REMOVE LATER
        }
    }
    else {
        rightLightButton.src = "images/right-light-button-off.png";
        rightLightButtonState = "off";

        document.getElementById("right-doorway-light").style.opacity = 0;
        document.getElementById("right-window-light").style.opacity = 0;

        //This statment is for the Bonnie test, it can be removed eventually
        document.getElementById("right-window-chica").style.opacity = 0;    //REMOVE LATER
    }
});
