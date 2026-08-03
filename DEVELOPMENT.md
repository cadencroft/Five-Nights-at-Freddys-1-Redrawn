# Five Nights at Freddy's 1: Redrawn - Development Log

This project, *Five Nights at Freddy's 1: Redrawn*, is a fan-made recreation by Caden Croft created for educational and portfolio purposes. The original *Five Nights at Freddy's* was created by Scott Cawthon. All original gameplay concepts and characters belong to him.

## **Game Description**
The player takes on the role of a night guard working at Freddy Fazbear's Pizza. At first, the job seems simple, but it soon becomes clear that Freddy's is not as safe as it first seemed. In this recreation of the classic *Five Nights at Freddy's*, the player has to make it through five nights on high alert in order to survive. Shut the doors, watch the cameras, do whatever it takes to not let *them* in. Just don't forget about the power...

## **Project Overview**
*Five Nights at Freddy's 1: Redrawn* is a personal project inspired by Scott Cawthon's *Five Nights at Freddy's*. Every visual asset in this project was redrawn from scratch in Procreate, and the game was recreated using HTML, CSS, and JavaScript in Visual Studio Code. 

I decided to create this project to accomplish a few goals. First of all, I wanted to become familiar with the process of making a game. I knew this project wouldn't make me an expert at game development, but rather it would teach me how to develop a strategy for creating the game, to design and draw the background images and sprites, to code in HTML, CSS, and JavaScript, to keep my code organized neatly while being efficient, to document my progress throughout development, and to test and fix bugs.

I am a Software Engineering and Data Science Mathematics student at IUP, and I am trying to further build a portfolio of my creations and learn more about the different areas of my field. I have never made a game before and I have very little experience with using HTML, CSS, and JavaScript, so this project will allow me to gain a basic understanding in these areas. I chose to recreate *Five Nights at Freddys* instead of creating my own original game so that I could focus more on the development process of a game, and not get stuck on the design process of creating a game completely from scratch.

## **Technologies Used**
- HTML
- CSS
- JavaScript
- Procreate
- Visual Studio Code
- Git / GitHub

## **Current Progress**
- [x] Office background is in place
- [x] Door and light buttons are in place and control their respective doors and lights
- [x] Door animations implemented
- [x] Temporary Bonnie and Chica office appearance for testing
- [x] Monitor flips up and down
- [x] When the monitor is up, the camera UI appear
- [x] The camera buttons are in place and will change the camera image


## **Development Milestones**

### 7/9/26
- Added office background image.
- Added left and right door buttons with on/off sprites.
- Added left and right light buttons with on/off sprites.
- Added functionality to make left and right door and light buttons change appearance when pressed.
- Added left and right doorway and window light sprites.
- Added functionality to make left and right doorway and window lights turn on when their respective buttons are pressed.
- Added left and right door sprites.
- Added functionality to make left and right doors slide open and closed when their respective button is pressed.

### 7/10/26
- Added Bonnie and Chica doorway/window sprites. 
- Added temporary keyboard controls for Bonnie and Chica's appearance for testing purposes (to be removed later).

### 7/13/26
- Added the monitor button UI to the bottom of the screen.
- Added the monitor animation frames.
- Added functionality to make the monitor raise and lower when the mouse hovers over the monitor button.
- Added this `DEVELOPMENT.md` file to document progress and changes.

### 7/14/26
- Completely refactored `script.js`.
- Organized the code into logical sections (assets, game state, HTML elements, event listeners, and game functions).
- Reduced code duplication by moving event listener logic into functions.
- Added an `assets` object for storing image paths, a `gameState` object for storing global game state variables, and an `elements` object for storing HTML element references.
- Added an asset preloading system for the monitor animation frames to fix bugged animation on GitHub Pages.
- Added camera buttons with on/off sprites to the monitor screen.
- Added functionality to make camera buttons change appearance when pressed.
- Added camera map UI to the monitor screen.
- Added temporary camera images so that the camera buttons can be tested.
- Added functionality to make the camera buttons change to their respective camera image.
- Added `turnOffLight`, `turnOnLight`, `closeDoor`, `openDoor`, `setCameraButton`, and `setCameraBackground` helper functions and refactored code within their parent functions `toggleLeftDoor`, `toggleLeftLight`, `toggleRightDoor`, `toggleRightLight`, and `switchCamera` for efficiency.
- Added functionality to force left and right doorway lights off whenever the monitor is raised. 
- Added `flipMonitorUp `, `flipMonitorDown`, `toggleTestBonnieAppearance` and `toggleTestChicaAppearance` and refactored code within their parent functions `toggleMonitor` and `handleKeyboardInput` for efficiency.

### 7/27/26
- Organized the door and button sprites into `doors-buttons` folder, and the office background into `background` folder.
- Refactored `setCameraButton` to be simpler.

### 7/28/26
- Refactored `index.html` and `style.css` to separate game world elements and ui elements by adding a `viewport` -> `game-world` div branch, and a `user-interface` div branch.
- Added a hitbox for the monitor button and switched event listeners from the montor button image to the hitbox. This allows for the monitor button sprite to turn invisible and visible without affecting the event listener.
- Added a system to hide the monitor button sprite while the cursor is hovering over the monitor button hitbox, and for the button sprite to reappear once the cursor leaves the hitbox. Includes changes to `toggleMonitor`, `flipMonitorUp`, and `flipMonitorDown` and also includes new functions `mouseLeaveMonitorButtonHitboxEvent`, `makeMonitorButtonHidden`, and `makeMonitorButtonVisible`.
- Added comments to show what the possible states are for the `gameState` variables.

### 7/30/26
- Added title screen background along with "Play" and "Options" buttons.
- Added functionality to make the Play and Options button scale up when hovered.
- Added functionality to make the Play button transition into the office scene with a fade to black transition.
- Added "Night X" text that displays the current night during the fade to black transition.
- Added fade in effect when the game is opened.
- Replaced `office-background.png` with a new version that fixed a visual error.

### 7/31/26
- Refactored `script.js` to better organize functions by moving functions from "main" and "helper" categories to instead by organized by purpose, such as "initialization", "doors", "lights", etc.
- Refactored `pressPlay` into functions `fadeToBlack`, `hideTitleScreen`, `showNightText`, `hideNightText`, `startGame` to improve organization and readability
- Function `startGame` acts as the start to the game and uses `fadeFromBlack` and `showGameWorld`.
- Functions `fadeToBlack` and `fadeFromBlack` now have a parameter to specify how many seconds the fade lasts.
- Function `loadIn` now preloads the assets using `preLoadAssets` function, along with fading in from black.
- Added `showTitleScreen` function.
- Refactored `startGame` to call `initializeNight` which calls `initializeDoors`, `initializeLights`, `initializeMonitor`, and `initializeCamera`, which set the state of all the game elements to default while bypassing other things such as sound effects.
- Refactored `style.css` to better organize CSS rules by category of their ids.
- Changed comments to utilize the Better Comments extension.
- Added debug tool to reload the page when "r" is pressed.
- Refactored `flipMonitorUp` and `flipMonitorDown` to call helper functions `playMonitorUpAnimation` and `playMonitorDownAnimation` respectively, so that the monitor animations can be reused elsewhere (such as for the Night Select and Option menus). `PlayMonitorUpAniamtion` also accepts the `showCameraUI` function, which will run after the animation is finished.

### 8/2/26
- Refactored `index.html` to separate elements into propery hierarchical categories. `montior-ui` is now outside of `game-world` and now consists of `monitor-animation`, `monitor-screen`, `monitor-button` and `monitor-button-hitbox`. `monitor-screen`now consists of `camera-ui` which consists all the elements for the camera system, and it can be scaled to hold other ui, such as the night select menu.
- Refactored `style.css` to rework all Z-indexes to be more logical and properly structured (see z-index map).
- Modified `script.js` to be compatible with changes stated above.
- Added HTML elements for the night select screen.
- Positioned night select elements in CSS.
- Refactored `script.js` to better handle switching screens. There is now a function `switchToScreen(newScreen)` that includes generic functions `hideScreen(currentScreen)` and `showScreen(newScreen)`. These generic functions replace the repetitive functions `showTitleScreen`, `hideTitleScreen`, `showGameWorld`, `hideGameWorld`, etc. A dictionary called `screens` hold each of the possible screens.
- Added functionality to make the Play button transition to the night select screen using a monitor up animation, and a back button.
- Added functionality to make the Options button transition to the options menu using a monitor up animation, and a back button. 
- Added functionaltiy to transition into the game when the desired night is selected. Each eventListener directs to `selectNight(night)`, which sets the current night and then runs `startGame()`, which plays the fade in/out animation, displays the selected night text, initializes the game, and switches to the gameWorld.
- The current selected night now displays depending on what the user selects.
- Added a highest night unlocked functionality that keeps track of the highest night that the player has reached. In the night select menu, only the unlocked nights will be white and clickable. The other locked nights won't be able to be clicked and will be grayed out.
- Added temporary function to change the highest night reached using 1-5 keys for debugging.
- Added local storage saving and loading functionality. When the game loads, it checks to see if there is local storage and if so, it loads in the `highestNightReached` variable. Temporarily, "s" saves the current `highestNightReached` to local storage, which will later be replaced by saving the game when a night is complete. Temporarily, "x" resets the current `highestNightReached` to local storage, which will later be replaced by a "Reset Game Data" button in the options menu.
- Added camera outline visual when camera monitor is up as well as while the select night and options menus are up.
- Added red recording light to the camera UI.
- Added the "12:00 AM" text during the night fade in screen and functions `showTimeText` and `hidetimeText`.
- Moved all text images into the /text folder.

## **Problems and Solutions**

### Button Sprite Hitbox Overlap 7/9/26
**Problem**: All the buttons were imported into the project while being on their own full sized 1280 x 720 canvases. Although the backgrounds were transparent, their hitboxes were the size of the entire canvas, so they overlapped each other and only the top button layer could receive a click event. 

**Solution:** I went back into Procreate and cropped the canvas around every sprite so that their hitboxes only included the sprite, which would guarentee no overlapping.

### Door Animation Clipping Through Wall 7/9/26
**Problem:** The door sliding up animation goes in front of the wall and isn't hidden "inside the wall".

**Solution:** I cut out the piece of the background wall directly above the door and overlayed it in front of the door layer, that way when the door moves upward, it is "in the wall".

### Monitor Animation Blocking and Allowing Clicks 7/12/26
**Problem:** The monitor animation starts with a fully transparent frame. This frame technically overlaps the buttons so the player cannot click the buttons, when they should be able to. Then, when the monitor is flipped up, the monitor needs to block clicks from passing through it.

**Solution:** I used CSS to switch pointer-events to "all" when the monitor was up, in order to block clicks from passing through the monitor. When the monitor went down and it was the transparent frame, I changed pointer-events to "none" to allow clicks to go through that layer.

### Montor Button Overlapping Monitor Animation 7/12/26
**Problem:** When the monitor is flipped upward, the animation must go ontop of the monitor button, but when it is finished, the monitor button must reappear on top of the monitor so that the player can close it.

**Solution:** The z-index controls layering. I gave the monitor button a z-index of 10 and the monitor animation a z-index of 20 so it will be overtop of the monitor button. Then after the monitor aniamation stops, the monitor button gets a z-index of 30 so it reappears ontop. Then when the monitor is closed, the monitor button's z-index is reset back to 10.

### Monitor Animation Bugged On GitHub Pages 7/14/26
**Problem:** When I use the live server, the monitor animation works perfectly fine. However when I push to GitHub and go on pages, it skips from the first frame to the last frame. In Inspect Elements > Network it shows almost all of the frames as status: (canceled).

**Solution:** The reason for the the animation being different is that GitHub Pages had to request the images, while live server already had them. When GitHub pages would fetch an image, it would get interupted by the next frame's request so that is what caused them to be (canceled). To fix this, I added a preloading function, which goes through each frame and preloads them into an Image object so that when its time to do the animation, the frames do not need to be retrieved.

### Monitor Button Glitchy and Too Sensitive 7/28/26
**Problem:** When the mouse hovers over the monitor button, the animation starts playing which covers the mouse button. Then after the animation, the z-index of the mouse button is increased to overlay it overtop of the monitor interface. If the player keeps their mouse on the button during this time, it will activate the button and close the monitor prematurely.

**Solution:** I added a hitbox around the button to act as the input instead of the actual button sprite. I then switch the monitor open/close functionality from the sprite to the hitbox, and made it so when the cursor hovers over the hitbox, it activates the animation and hides the button sprite. Furthermore, the button sprite will only reappear once the cursor leaves the hitbox. This fixes the issue of if the player leaves the mouse over the button sprite after the animation finishes.

### Camera UI Appears Before Monitor Animation Finishes 7/21/26
**Problem:** When the `flipMonitorUp` function is run, it would call the `playMonitorAnimationUp` function and then the next line call `showCameraUI`. However, the camera UI would appear before the animation was finished.

**Solution:** I used a callback function, which means that I passed the `showCameraUI` function into the `playMonitorAnimationUp` function so it will run it after the animation is done. This also allows me to pass in other functions to make other UI appear after the animation finishes (such as a Night Select menu or Options menu).

### ADD THE MONITOR BUG STUFF


## **Needs Fixed / Changed**
- [ ] Bonnie and Chica's appearance in the office are controlled by "b" and "c" instead of game logic
- [ ] Screen needs resized and properly scaled for any device
- [x] Monitor flip animation needs to work properly on GitHub Pages
- [ ] Replace temporary camera images with real ones
- [ ] Add the "You" text in the camera map
