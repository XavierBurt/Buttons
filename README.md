# Buttons
## Description
In this project, you will fill in the blanks for two small projects involving buttons and interactivity on a website! There are two excersizes, and in both of them, you will try to turn on a light bulb by pressing or holding a certain button.

## Difficulty
Excersize 1: Easy-Medium
Excersize 2: Medium-Hard

## Setting up

Please go to the JSFiddle found here:
https://jsfiddle.net/XavierBurt/qs5e983d/

You will see a page that looks like this: 
![image](https://github.com/XavierBurt/Buttons/assets/97270148/ad46f8ea-e9ad-442e-a270-69fc0428080f)

It is **necessary** to press the fork button in the upper left corner in order to save.

## Excersize 1

Excersize 1 is simple, if you look at your setup on JSFiddle, you'll see a light bulb, you simply want to turn on that light bulb by pressing space.

I have prepared some code here to help. If you copy and paste the code found below into the Javascript block in JS Fiddle, and then fill in the 

// Say we want the light bulb to light up whenever we click "space", to do this, we use something called an "Event Handler." The event handler is not tied to any one object, but the document itself. 
let lit = false;
document.addEventListener("$$\color{red}____$$", (e) => { // <-- FILL IN THE "@"s; Hint: What is the keystroke (keydown, keyup, keyuress) we want to "listen" for?
	const keyName = e.key;
  if (keyName == "@@@@") { // <-- FILL IN HERE; Hint: What is the character we're trying to "listen" for?
  	if (lit === false) {
  		document.getElementById("button").src = "https://static.vecteezy.com/system/resources/previews/008/320/990/original/illustration-graphic-of-light-bulbs-are-lit-vector.jpg";
      lit = true;
    } else {
    	document.getElementById("button").src = "https://i.pinimg.com/736x/4a/b9/3f/4ab93f48c8f1708a615cc62ffc944962.jpg";
      lit = false;
    }
     //alert(`Key pressed ${keyName}`); // <---- You can use something like this to make a popup if it gets to this location.
  }
})
