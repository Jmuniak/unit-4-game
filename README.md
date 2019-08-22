# unit-4-game

---------
A simple guess the number type game. The Computer generate a random number between 20 and 120 while also generating a value between 1-12 for each of the 4 crystal button.
The game will end once the player's guesses correctly sum up to the winning number, or once they go over the winning number. When the game ends, it automatically restarts.

### Game Functions:
Step 1:
Generate a random number between 20 and 120.  - Line 6 JS file
Generate a random number for each crystal and pushes them into an array called CrystalValues. - Lines 17 -21 JS file.
The function getCrystalHandler adds the userTotal to whatever the value is of the crystalkey that was clicked and checks for a win/loss condition. - Lines 61-72 JS file.

Step 2:
Create an on click function for the crystal buttons that uses getCrystalHandler. - Lines 26-32 JS file.

Step 3:
Functions that run when the user wins or loses and a reset function that generates new numbers for all the crystals and the winning number. Tracks the count of wins/losses that the user has since they last refreshed.

