# Interactive Light
## Description
In this project, you will fill in the blanks for two small projects involving buttons and interactivity on a website! There are two exercizes, and in both of them, you will try to turn on a light bulb by pressing or holding a certain button.

## Difficulty
Warm Up: Easy

Exercize: Hard

## Prerequisites
1. Basic knowledge of Javascript
2. Basic knowledge of HTML Tags

## Setting up
open the replit, you will see an HTML file, a CSS file, and a Javascript file. You will not need to edit the HTML or CSS files at all, however you might need to look at HTML.

## Warm Up
Step 1: Go to the JavaScript file, You should see some Javascript code already there

Step 2: Fill in the blanks, you should see comments after some lines saying "<--- fill in" If you do it right, the code should work. 

The goal is to make a lightbulb light up by pressing space.

HINTS:

Where you see '1': What is the keystroke (keydown, keyup, keyuress) we want to "listen" for?

Where you see '2': What is the character we're trying to "listen" for?

Where you see '4': look in the html code, what is the id of the light bulb?

## BEFORE YOU START THE EXERCISE

Note that the work from the warm up will help you finish the exercize, you will adapt the code you were given. This will all be done in the javascript file still.

A list of all of the events can be found here: https://www.w3schools.com/jsref/dom_obj_event.asp

The ones you should be paying attention to are
keydown: Triggered when you press a key down

keypressed: Triggered when you press a key

keyup: Triggered when you let go of a key.

## Exercise

The goal of this exercise is to turn on the light bulb only when you are holding the space button. Unfortunately the way we did the last exercise won't work for this goal.

The reason is as follows, what a browser ends up doing when you hold a key is actually not just trigger the 'keydown' event. Unfortunately, the browser actually "auto-repeats" between two events:
1. keydown
2. keypressed

Since the browser alternates between these two until you lift the key (at which point it triggers the 'keyup' event) <-- ((HINT HINT)), the 'keydown' event will be processed multiple times, alternating our light between on and off.

This issue of "auto-repeating" is actually even worse in "GTK" environments, but we shouldn't have to worry about that.

Your goal is to fix this issue, and make it so that the light bulb **only lights up when you hold space**

to summarize, your basic steps should look like this:

1. We know we want the light to go on when the 'keydown' key is pressed, so we will use the same event listener we used in the warm up
   
2. Inside the event listener, create an if statement to check if the light is on, only turn on the light if the light isn't currently on. (You may need to repurpose the if statement from the warm up)
   
3. Now we just need to turn the light off when we let go of space, to do that create another event listener outside of the firt one.
   
4. inside of that event listener, all we have to do is make sure to both turn off the light and make sure we update the variable keeping track of the state of the light.

## STRETCH GOAL
You should test any extreme cases
Ex: your light bulb shouldn't turn off even if you press another button while holding space.
