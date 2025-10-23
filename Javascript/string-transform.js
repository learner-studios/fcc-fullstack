// practice lab working on the manipulation of strings

let originalString = "I love cats.";
let replacedString = originalString.replace("cat","dogs");

console.log("Original string:");
console.log(originalString);

//replaced method with the new variables in place
console.log("After using the replace() method:");
console.log(replacedString);

//next string method replacement 
let exampleSentence = "I love cats and cats are so much fun!";

console.log("Original sentence:");
console.log(exampleSentence);

// working with the other replace method 
let dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");

console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

//new string method
let learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

//repeat method for strings
let repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

let newSentence = "I " + repeatedLove + " learning.";
console.log(newSentence);