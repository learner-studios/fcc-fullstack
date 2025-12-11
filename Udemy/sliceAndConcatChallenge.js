// so in this case the challenge is to use the slice method to cut out a string down to only 140 characters

// 1. create a variable called 'input' and set it equal to a long string (over 140 characters)
let tweetInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// 2. now use the slice method to cut off the string at the designated amount;
const tweetSlice = tweetInput.slice(0, 140);

// optional task is to find the length of tweetSlice
var tweetLengthCount = tweetSlice.length;
// 3. now we need to output the results.
console.log(`"${tweetSlice}"`);
console.log(`The length of the tweet currently is: ${tweetLengthCount} characters long.`);