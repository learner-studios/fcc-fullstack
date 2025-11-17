let fccSentence =  "freeCodeCamp is a great place to learn web development.";
let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log("Here are some examples of the includes() method:");

let fccString = `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCampe is in the sentence.`;
let hasJavaScript = fccSentence.includes("JavaScript");
let hasLowercaseFCC = fccSentence.includes("freecodecamp");
let platform = message.slice(11, 23);
let message = "welcome to freeCodeCamp!";
let greetingWord = message.slice(0,7);
let endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);
console.log(`The first word is "${greetingWord}".`);
console.log("Here are some examples of the slice() method:");

console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`)
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`)
console.log(fccSentence);
console.log(`The word "${platform}" was sliced from the message.`);
console.log("Workshop complete! You now know how to use includes() and slice().");