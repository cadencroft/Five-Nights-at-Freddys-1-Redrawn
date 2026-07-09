const leftDoorButton = document.getElementById("left-door-button");
let leftDoorButtonState = "off";

leftDoorButton.addEventListener("click", function () {
    if (leftDoorButtonState == "off") {
        leftDoorButton.src = "images/left-door-button-on.png";
        leftDoorButtonState = "on";

        // document.getElementById("left-door").style.opacity = 1;
        document.getElementById("left-door").style.top = "158px";
    }
    else {
        leftDoorButton.src = "images/left-door-button-off.png";
        leftDoorButtonState = "off";

        // document.getElementById("left-door").style.opacity = 0;
        document.getElementById("left-door").style.top = "-354px";
    }
});

const leftLightButton = document.getElementById("left-light-button");
let leftLightButtonState = "off";

leftLightButton.addEventListener("click", function(){
    if(leftLightButtonState == "off"){
        leftLightButton.src = "images/left-light-button-on.png";
        leftLightButtonState = "on";

        document.getElementById("left-doorway").style.opacity = 1;
        document.getElementById("left-window").style.opacity = 1;
    }
    else{
        leftLightButton.src = "images/left-light-button-off.png";
        leftLightButtonState = "off";

        document.getElementById("left-doorway").style.opacity = 0;
        document.getElementById("left-window").style.opacity = 0;
    }
});

const rightDoorButton = document.getElementById("right-door-button");
let rightDoorButtonState = "off";

rightDoorButton.addEventListener("click", function(){
    if (rightDoorButtonState == "off"){
        rightDoorButton.src = "images/right-door-button-on.png";
        rightDoorButtonState = "on";

        // document.getElementById("right-door").style.opacity = 1;
        document.getElementById("right-door").style.top = "158px";
    }
    else{
        rightDoorButton.src = "images/right-door-button-off.png";
        rightDoorButtonState = "off";

        // document.getElementById("right-door").style.opacity = 0;
        document.getElementById("right-door").style.top = "-354px";
    }
});

const rightLightButton = document.getElementById("right-light-button");
let rightLightButtonState = "off";

rightLightButton.addEventListener("click", function(){
    if(rightLightButtonState == "off"){
        rightLightButton.src = "images/right-light-button-on.png";
        rightLightButtonState = "on"; 

        document.getElementById("right-doorway").style.opacity = 1;
        document.getElementById("right-window").style.opacity = 1;
    }
    else{
        rightLightButton.src = "images/right-light-button-off.png";
        rightLightButtonState = "off";

        document.getElementById("right-doorway").style.opacity = 0;
        document.getElementById("right-window").style.opacity = 0;
    }
});
