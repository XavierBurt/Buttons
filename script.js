// Say we want the light bulb to light up whenever we click "space", to do this, we use something called an "Event Handler." The event handler is not tied to any one object, but the document itself. 
let lit = false;
document.addEventListener("1111", (e) => { // <-- REPLACE THE "1"s
  const keyName = e.key;
  if (keyName == "2222") { // <-- REPLACE THE "2"s
    if (lit === false) {
      document.getElementById("!!!!").src = "https://static.vecteezy.com/system/resources/previews/008/320/990/original/illustration-graphic-of-light-bulbs-are-lit-vector.jpg"; // <--- REPLACE THE "!"s
      lit = true;
    } else {
      document.getElementById("4444").src = "https://i.pinimg.com/736x/4a/b9/3f/4ab93f48c8f1708a615cc62ffc944962.jpg"; // <--- REPLACE THE 4s
      lit = false;
    }
     //alert(`Key pressed ${keyName}`); // <---- You can use something like this to make a popup if it gets to this location. This can be very useful for debugging when something is wrong.
  }
})