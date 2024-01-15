# Interactive Light
## Description
In this project, you will fill in the blanks for two small projects involving buttons and interactivity on a website! There are two exercizes, and in both of them, you will try to turn on a light bulb by pressing or holding a certain button.

## Difficulty
Exercize 1: Easy-Medium
Exercize 2: Medium-Hard

## Prerequisites
1. Extremely Basic knowledge of Javascript
2. Basic knowledge of HTML Tags
## Setting up

Please go to the JSFiddle found here:
https://jsfiddle.net/XavierBurt/qs5e983d/

You will see a page that looks like this: 
![image](https://github.com/XavierBurt/Buttons/assets/97270148/ad46f8ea-e9ad-442e-a270-69fc0428080f)

It is **necessary** to press the fork button in the upper left corner in order to save.

## Exercize 1

Exercise 1 is simple, if you look at your setup on JSFiddle, you'll see a light bulb, you simply want to turn on that light bulb by pressing space.

I have prepared some code here to help. If you copy and paste the code found below into the Javascript block in JS Fiddle, and then fill in all of the places where there are "@"s correctly, you will be able to toggle the light bulb on and off by pressing space.
```
// Say we want the light bulb to light up whenever we click "space", to do this, we use something called an "Event Handler." The event handler is not tied to any one object, but the document itself. 
let lit = false;
document.addEventListener("@@@@", (e) => { // <-- REPLACE THE "@"s; Hint: What is the keystroke (keydown, keyup, keyuress) we want to "listen" for?
	const keyName = e.key;
  if (keyName == "@@@@") { // <-- REPLACE THE "@"s; Hint: What is the character we're trying to "listen" for?
  	if (lit === false) {
  		document.getElementById("@@@@").src = "https://static.vecteezy.com/system/resources/previews/008/320/990/original/illustration-graphic-of-light-bulbs-are-lit-vector.jpg"; // <--- REPLACE THE @s
      lit = true;
    } else {
    	document.getElementById("@@@@").src = "https://i.pinimg.com/736x/4a/b9/3f/4ab93f48c8f1708a615cc62ffc944962.jpg"; // <--- REPLACE THE @s; Hint: look in the html code, what is the id of the light bulb?
      lit = false;
    }
     //alert(`Key pressed ${keyName}`); // <---- You can use something like this to make a popup if it gets to this location.
  }
})
```

## BEFORE YOU START EXERCISE 2

Please save your work for exercise 1 and save the link somewhere. Your mentor might ask for this link at some point. Once you've saved, click the Fork button, and then you can move on to Exercise 2.

## Exercise 2

Exercise 2 is much harder than Exercise 1. The goal of this exercise is to turn on the light bulb only when you are holding the space button. Unfortunately the way we did the last exercise won't work for this goal.

The reason is as follows, what a browser ends up doing when you hold a key is actually not just trigger the 'keydown' event. Unfortunately, the browser actually "auto-repeats" between two events:
1. keydown
2. keypressed

Since the browser alternates between these two until you lift the key (at which point it triggers the 'keyup' event) <-- ((HINT HINT)), the 'keydown' event will be processed multiple times, alternating our light between on and off.

This issue of "auto-repeating" is actually even worse in "GTK" environments, but we shouldn't have to worry about that.

Your goal is to fix this issue, and make it so that the light bulb **only lights up when you hold space**
You should test any extreme cases, your light bulb shouldn't turn off even if you press another button while holding space.
