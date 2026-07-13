# Five Nights at Freddy's 1: Redrawn - Development Log

This project, *Five Nights at Freddy's 1: Redrawn*, is a fan-made recreation by Caden Croft created for educational and portfolio purposes. The original *Five Nights at Freddy's* was created by Scott Cawthon. All original gameplay concepts and characters belong to him.

## **Project Description**
The player takes the role of a night guard working at Freddy Fazbear's Pizza. At first the job seems simple, but it is soon revealed that Freddy's is not as safe as it first seemed. Keep your eyes peeled and your e

## **Development Overview**
*Five Nights at Freddy's 1: Redrawn* is a personal project that was inspired by Scott Cawthon's *Five Nights at Freddy's*. I, Caden Croft, took inspiration from Scott's game and recreated everything myself. I used Procreate to draw all of the images and sprites, and I coded it in HTML, CSS, and JavaScript using VSCode. 

I decided to create this project to accomplish a few goals. First of all, I wanted to become familiar with the process of making a game. I knew this project wouldn't make me an expert at game development, but rather it would teach me how to develop a strategy for creating the game, to design and draw the background images and sprites, to code in HTML, CSS, and JavaScript, to keep my code organized neatly while being efficient, to document my progress throughout development, and to test and fix bugs.

I am a Software Engineering and Data Science Mathematics student at IUP, and I am trying to further build a porfolio of my creations and learn more about the different areas of my field. I have never made a game before and I have very little experience with using HTMl, CSS, and JavaScript, so this project will allow me to gain a basic understanding in these areas. I chose to recreate *Five Night's at Freddys* instead of creating my own original game so that I could focus more on the development process of a game, and not get stuck on the design process of creating a game completely from scratch.

## **Technologies Used**
- HTML
- CSS
- JavaScript
- Procreate
- Visual Studio Code
- Git / GitHub

## **Current Progress**
- [x] Office background is in place
- [x] Door and light buttons are in place
- [x] Door and light buttons are fully funcitonal and control the doors and lights


## **Development Milestones**


## **Problems and Solutions**

### Button Sprite Hitbox Overlap 7/9/25
**Problem**: All the buttons were imported into the project while being on their own full sized 1280 x 720 canvases. Although the backgrounds were transparent, their hitboxes were the size of the entire canvas, so they overlapped each other and only the top button layer could receive a click event. 

**Solution:** I went back into Procreate and cropped the canvas around every sprite so that their hitboxes only included the sprite, which would guarentee no overlapping.

### Door Animation Clipping Through Wall 7/9/25
**Problem:** The door sliding up animation goes in front of the wall and isnt hidden "inside the wall".

**Solution:** I cut out the piece of the background wall directly above the door and overlayed it in front of the door layer, that way when the door moves upward, it is "in the wall".

### Monitor Animation Blocking and Allowing Clicks 7/12/25
**Problem:** The monitor animation starts with a fully transparent frame. This frame technically overlaps the buttons so the player cannot click the buttons, when they should be able to. Then, when the monitor is flipped up, the monitor needs to block clicks from passing through it.

**Solution:** I usedse CSS to switch pointer-events to "none" when the monitor was up, in order to block clicks from passing through the monitor. When the monitor went down and it was the transparent frame, i changed pointer-events to "all" to allow clicks to go through that layer.

### Montor Button Overlapping Monitor Animation 7/12/25
**Problem:** When the monitor is flipped upward, the animation must go ontop of the monitor button, but when it is finished, the monitor button must reappear on top of the monitor so that the player can close it.

**Solution:** The z-index controls layering. I gave the monitor button a z-index of 10 and the monitor animation a z-index of 20 so it will be overtop of the monitor button. Then after the monitor aniamation stops, the monitor button gets a z-index of 30 so it reappears ontop. Then when the monitor is closed, the monitor button's z-index is reset back to 10.

## **Needs Fixed / Changed**
- [ ] Bonnie and Chica's appearance in the office are controlled by "b" and "c" instead of game logic
- [ ] Screen needs resized and properly scaled for any device
