const leftDoorButton = document.getElementById("left-door-button");
let leftDoorButtonState = "off";

leftDoorButton.addEventListener("click", function () {
    if (leftDoorButtonState == "off") {
        leftDoorButton.src = "images/left-door-button-on.png";
        leftDoorButtonState = "on";
    }
    else {
        leftDoorButton.src = "images/left-door-button-off.png";
        leftDoorButtonState = "off";
    }
});

const leftLightButton = document.getElementById("left-light-button");
let leftLightButtonState = "off";

leftLightButton.addEventListener("click", function(){
    if(leftLightButtonState == "off"){
        leftLightButton.src = "images/left-light-button-on.png";
        leftLightButtonState = "on";
    }
    else{
        leftLightButton.src = "images/left-light-button-off.png";
        leftLightButtonState = "off";
    }
});

const rightDoorButton = document.getElementById("right-door-button");
let rightDoorButtonState = "off";

rightDoorButton.addEventListener("click", function(){
    if (rightDoorButtonState == "off"){
        rightDoorButton.src = "images/right-door-button-on.png";
        rightDoorButtonState = "on";
    }
    else{
        rightDoorButton.src = "images/right-door-button-off.png";
        rightDoorButtonState = "off";
    }
});

const rightLightButton = document.getElementById("right-light-button");
let rightLightButtonState = "off";

rightLightButton.addEventListener("click", function(){
    if(rightLightButtonState == "off"){
        rightLightButton.src = "images/right-light-button-on.png";
        rightLightButtonState = "on"; 
    }
    else{
        rightLightButton.src = "images/right-light-button-off.png";
        rightLightButtonState = "off";
    }
});
