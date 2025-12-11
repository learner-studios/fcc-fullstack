// need to grab the users name in a variable as the input, and then if they put in a single lowercase name change the first letter to uppercase and output the result. 

var userInputName = "jonathan";

//create first letter slice to take out of the name
// so the first one since we don't put in an end parameter it will grab everything from the starting position to the end of the string, the second variable will only grab the first letter.
var userInputNameTest = userInputName.slice(1,userInputName.length);
var userInputNameSlice = userInputName.slice(0,1);

//change the first letter to uppercase

var userInputNameCapitalize = userInputNameSlice.toUpperCase();

//this is a test to account for user input that is different from 100% lowercase simply take the NameTest variable and convert it all to lowercase.

var userInputNameTestCorrect = userInputNameTest.toLowerCase();
//output the result to the console.
//test output the variable userInputNameSlice 
// console.log(userInputNameSlice);
// console.log(userInputNameTest);
// // console.log(`Hello :welcome to the world of the program`);
console.log(`Hello ${userInputNameCapitalize+userInputNameTestCorrect}, welcome to the world of the program!`);