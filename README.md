# unit-4-game
Link to the live page hosted on GitHub 
* https://jmuniak.github.io/unit-4-game/


---------
A simple guess the number type game. The Computer generates a random number between 20 and 120 while also generating a value between 1-12 for each of the 4 crystal button.
The game will end once the player's guesses correctly sum up to the winning number, or once they go over the winning number. When the game ends, it automatically restarts.
---------


### Game Functions:
Step 1:
Generate a random number between 20 and 120. 
Generate a random number for each crystal and push them into an array called CrystalValues.
The function getCrystalHandler adds the variable "userTotal" to whatever the current value is of the crystal that was clicked and checks for a win/loss condition. 

Step 2:
The on click event function for the crystal buttons that uses the getCrystalHandler function.

Step 3:
Functions that run when the user wins or loses and a reset function that generates new numbers for all the crystals and the winning number. Tracks the count of wins/losses that the user has since they last refreshed.


## Built With
* VSCode
* HTML
* JavaScript
* jQuery
* Bootstrap for styling

