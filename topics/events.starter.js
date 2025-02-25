/*
 _____                _       
|  ___|              | |      
| |____   _____ _ __ | |_ ___ 
|  __\ \ / / _ \ '_ \| __/ __|
| |___\ V /  __/ | | | |_\__ \
\____/ \_/ \___|_| |_|\__|___/
                                                           
*/

// 1 — Click on the button and show an alert()
// hint: first select the button, then add an event listener to it

// 2 — Hover over the square (#zone1) and change its background color

// 3 — Click on the link to display the hidden Message
// hint: first see how the message is hidden, then do the opposite
// hint2: prevent the default behavior of the link by using .preventDefault()

// 4 — Similar to question number 2, this time use event bubbling to change the background color of the squares in #bubbleZone
// hint: with event bubbling you can select the parent element and listen for events on its children to avoid adding multiple event listeners

// 5 — Bonus: use mouseout to change the background color back to the original one on the squares in question 2 or 4

document.addEventListener("DOMContentLoaded", function () {
  // 1 — Click on the button and show an alert()
  const button = document.querySelector("#btn1");
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });

  // 2 — Hover over the square (#zone1) and change its background color
  const zone1 = document.querySelector("#zone1");
  zone1.addEventListener("mouseover", function () {
    zone1.style.backgroundColor = "lightblue";
  });

  // 5 — Bonus: use mouseout to change the background color back
  zone1.addEventListener("mouseout", function () {
    zone1.style.backgroundColor = "";
  });

  // 3 — Click on the link to display the hidden Message
  const link = document.querySelector(".show3");
  const message = document.querySelector(".hiddenMessage");

  link.addEventListener("click", function (event) {
    event.preventDefault(); // Voorkom dat de link wordt gevolgd
    message.style.display = "block"; // Toon het verborgen bericht
  });

  // 4 — Event bubbling to change the background color of squares in #bubbleZone
  const bubbleZone = document.querySelector("#bubbleZone");

  bubbleZone.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("zone")) {
      event.target.style.backgroundColor = "lightgreen";
    }
  });

  // Bonus: Reset background color on mouseout
  bubbleZone.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("zone")) {
      event.target.style.backgroundColor = "";
    }
  });
});
