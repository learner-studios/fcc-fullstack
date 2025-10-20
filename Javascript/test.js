console.log("Hello there");

let variedTest = "!";

console.log(variedTest.charCodeAt(0));

let stringChar = String.fromCharCode(66);
console.log(stringChar);

// working with substrings
let sentenceTest = "Go go Power-Rangers!";
let sentenceExam = sentenceTest.includes("go"); //the method needs to recursively name the variable that was stated earlier or it won't work.  The method is also case-sensitive.
console.log(sentenceExam);

// working with the slice method
let messageWord = "Go Mariners, All In!";
let wordSlice = messageWord.slice(0, 11); //the method can be used for inputting negative numbers (starting from the end and working backwards), or you can also put in one number and it'll start from that spot and go all the way till the end.
console.log(wordSlice + "!"); 


// practicing with String Formatting methods

let pileOfWords = "Welcome to Springfield, home of Simpsons!";
//toUpperCase

let upperWords = pileOfWords.toUpperCase();


//toLowerCase
let lowerWords = pileOfWords.toLowerCase();

console.log(upperWords);
console.log(lowerWords);

//trim -- gets rid of white space in the beginning and end of a variable, two others below are for specific beginning or end editing of the same thing.
let pileOfWordsBlank = "      Can You Hear Me Now!      ";
let wordsFullTrim = pileOfWordsBlank.trim();

//trimStart
let wordsBeginningTrim = pileOfWordsBlank.trimStart();

//trimEnd
let wordsEndTrim = pileOfWordsBlank.trimEnd();

console.log(wordsFullTrim);
console.log(wordsBeginningTrim);
console.log(wordsEndTrim);

//replace method
// let pileOfWordsReplace = pileOfWords.replace("Springfield", singleWordSoup); // same with the previous method it's also case-sensitive
// console.log(pileOfWordsReplace);

//repeat method
let singleWord1 = "Rickity ";
let singleWord2 = "Wrecked ";
let singleWord3 = "Son";

let singleWordSoup = singleWord1.repeat(2);
let singleWordSoupBowl = singleWordSoup.concat(singleWord2, singleWord3); 
// let pileOfWordsReplace
let pileOfWordsReplace = pileOfWords.replace("Simpsons", singleWordSoupBowl)
console.log(pileOfWordsReplace);


