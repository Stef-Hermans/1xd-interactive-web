/*
______ ________  ___
|  _  \  _  |  \/  |
| | | | | | | .  . |
| | | | | | | |\/| |
| |/ /\ \_/ / |  | |
|___/  \___/\_|  |_/
            
*/

// 1 - get an element by id
// select the second paragraph and figure out a way to make the backround color yellow
// hint: use the style property and .backgroundColor
// hint: use the querySelector or getElementById function

// 2 - select the element with id #paragraph3 and change the text to "Never gonna run around and desert you"
// hint: use the innerHTML property

// 3 - get multiple elements by class
// select all the span elements by their classname and log the result to your console, what type of object is it?
// next, loop over the elements and change the innerHTML to another emoji
// hint: use the querySelectorAll function, use the .forEach method (or a for loop), and the .innerHTML property

// 4 - change the CSS class
// select the element with the id "message" and change the css class to "error"
// hint: use the setAttribute function, or use the className property, or use the classList property

// render a ul with li elements

// 1 - Selecteer de tweede paragraaf en verander de achtergrondkleur naar geel
const secondParagraph = document.getElementById("paragraph2");
if (secondParagraph) {
  secondParagraph.style.backgroundColor = "yellow";
}

// 2 - Selecteer de paragraaf met id #paragraph3 en verander de tekst
const thirdParagraph = document.getElementById("paragraph3");
if (thirdParagraph) {
  thirdParagraph.innerHTML = "Never gonna run around and desert you";
}

// 3 - Selecteer alle span-elementen met de class "grabme" en verander hun innerHTML
const spanElements = document.querySelectorAll(".grabme");
console.log(spanElements); // Logt de NodeList naar de console

spanElements.forEach((span) => {
  span.innerHTML = "😎"; // Verandert naar een zonnebril emoji
});

// 4 - Verander de CSS-class van het element met id "message" naar "error"
const messageElement = document.getElementById("message");
if (messageElement) {
  messageElement.className = "error"; // Verandert de class naar "error"
}

// 5 - Maak een unordered list (ul) met list items (li) en voeg deze toe aan de body
const ulElement = document.createElement("ul");
const items = ["Item 1", "Item 2", "Item 3"];

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ulElement.appendChild(li);
});

document.body.appendChild(ulElement);
