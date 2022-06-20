// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to a string: 'Dane'.
// If name strictly equals 'Mary' then console log 'Hi, Mary!'.
// If name does not equal 'Mary' console log 'How do you do?'
// Because name equals 'Dane' then the console log will produce 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'secret' with no defined value.
// We make a variable called 'code' and set it to a number: 123.
// We check if 'code' strictly equals 123 then the undefined variable 'secret' will equal the string 'super'. 
// Also, code will multiply its value by two (which would equal a new value of '246').
// If code is greater than 250 then secret would equal the string 'duper'.
// Now to console log 'secret' which would produce 'super' since the value of code equals 246, which is less than 250, thus not triggering the second if statement's modification of 'secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a boolean variable: 'isStudent' which equals true.
// We create a variable called 'age' which equals 34.
// We create a variable called 'zip' which equals 55407.
// If isStudent strictly equals true and zip is greater than 80000 then console log 'You're a student on the West Coast!'.
// If the previous conditional returns false then we move down to the next option: 
// If isStudent strictly equals false and/or age is less than 30 then it would post to the console log: "What are your hobbies?" 
// Because this is an OR operator, then it would return false if both conditions are false. But if one or both of the conditions are true, then it would return as true and post the console log. (referenced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
// So, if the previous conditional returns false then we move down to the next option: 
// If isStudent strictly equals true then it would post a console log of 'Welcome to Prime!'
// If inStudent is false, and all previous conditionals were failed, then it would post 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX — colorOne is set to red — instructions say blue. 
// colorTwo is set to blue — instructions say red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX — the use of the OR operator would make it so that if one of these was true, but the other was false, it would still return as true. 
// The instructions are suggesting it would be &&, not ||, because it says it's checking if the temp is higher than 39 AND if time is greater or equal to 4 then the code would be run.
// Side note: I hope I am understanding || correctly.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// Fix — Instructions say we are checking if minAge is greater than or equal to age, but the variable is checking if it is lesser than or equal to age to return 'no entry'.
// minAge is equal to age though, so the console log would indeed post 'enter'. 
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

