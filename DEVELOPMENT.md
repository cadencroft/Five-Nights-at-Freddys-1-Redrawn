# Five Nights at Freddy's 1: Redrawn - Development Log

This project, *Five Nights at Freddy's 1: Redrawn*, is a fan-made recreation by Caden Croft created for educational and portfolio purposes. The original *Five Nights at Freddy's* was created by Scott Cawthon. All original gameplay concepts and characters belong to him.

## **Game Description**
The player takes on the role of a night guard working at Freddy Fazbear's Pizza. At first, the job seems simple, but it soon becomes clear that Freddy's is not as safe as it first seemed. In this recreation of the classic *Five Nights at Freddy's*, the player has to make it through five nights on high alert in order to survive. Shut the doors, watch the cameras, do whatever it takes to not let *them* in. Just don't forget about the power...

## **Project Overview**
*Five Nights at Freddy's 1: Redrawn* is a personal project inspired by Scott Cawthon's *Five Nights at Freddy's*. Every visual asset in this project was redrawn from scratch in Procreate, and the game is being recreated using HTML, CSS, and JavaScript in Visual Studio Code. 

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

### Monitor Animation Different With Github Pages
**Problem:** When I use the live server, the monitor animation works perfectly fine. However when I push to GitHub and go on pages, it skips from the first frame to the last frame. In Inspect Elements > Network it shows almost all of the frames as status: (canceled).

**Solution:** TBD

## **Needs Fixed / Changed**
- [ ] Bonnie and Chica's appearance in the office are controlled by "b" and "c" instead of game logic
- [ ] Screen needs resized and properly scaled for any device
- [ ] Monitor flip animation needs to work properly on GitHub Pages. 
