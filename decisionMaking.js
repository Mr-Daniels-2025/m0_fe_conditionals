

// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
/* Line 12 has an if statement with the condition that it is checking if doorChoice is stricty equal.
Line 13 has an if the condition is true, then bearClothing will have a string value of "hat".
Line 14 to 15 has an if condition is false, it will execute the else statement which will cause the variable bearClothing value to be "scarf".
Line 16 is simply a closing tag. It shows that it is the end of the if statement. */

// 2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing has a new value assigned to it.

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//blearClothing would be equal to the assigned value of scarf.

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// Line 25 shows that I have an "if" statement with a condition to check if the variable bearChoice is strictly equal to "1".
// Line 26 will log only if the if condition boolean is true.
// Line 27 and 28 shows that if the previous condition is false, then the if statement will transition to the next code block and check if the conditions are true. I can see that line 27 is checking if the condition boolean is true. And if it is true, the statement will run or execute*/
// Line 31. If  all conditions are false, then the else statement will execute and only if all the other conditions are false.


// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The final result would be "you run as fast as you can into the next room. It's full of snakes!"

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
///* The final result would be observing "You see a bear putting on a hat. It looks like that hat is too small for the bear, do you..."
1. Offer your own to the bear?
2. Point it out to the bear?
3. Dash to the next room?
You let the bear know it is too small then back away */

// 7. What is your favorite ending?
// You stay with the bear and become it's best friend.
