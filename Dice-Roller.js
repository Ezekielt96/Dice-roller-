/* Ezekiel D Towner 
Author: Ezekiel D Towner -->
<!---CPSC 24700 Web & Distributed Programming-->
<!--Programming Assignment 4-->
<!--Dice Roller -->
*/


///allows the user to press the enter key to execute random dice 



//grabs the dice ID
var input = document.getElementById("dice");
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("dice").click();
    }
  });
  
var input = document.getElementById("dice2");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("dice2").click();
    }
  });

  
var input = document.getElementById("dice3");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("dice3").click();
    }
  });
  
  
var input = document.getElementById("dice4");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("dice4").click();
    }
  });

  
var input = document.getElementById("dice5");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("dice5").click();
    }
  });
  
  

  
var input = document.getElementById("dice");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("dice").click();
    }
  });
  
  
  


  //Random functions to roll dice 
  // I made 5 functions for 5 dice in a game of Yahtzee 

function RollSixSidedDice() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
}
function RollSixSidedDice2() {
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
}
function RollSixSidedDice3() {
    document.getElementById("dice3").value = Math.floor(Math.random()*6) + 1;
}
function RollSixSidedDice4() {
    document.getElementById("dice4").value = Math.floor(Math.random()*6) + 1;
}
function RollSixSidedDice5() {
    document.getElementById("dice5").value = Math.floor(Math.random()*6) + 1;
}
function RollSixSidedDice6() {
    document.getElementById("dice6").value = Math.floor(Math.random()*6) + 1;
}
