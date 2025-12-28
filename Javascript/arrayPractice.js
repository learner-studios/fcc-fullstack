const arrayPractice = ["Jason", "Angie", "Audajha", "Jackson", "Urijah"];
const [wolf, coy, lion, tiger, platypus] = arrayPractice;
let newArrayPractice = [].concat(arrayPractice);
// these are some other methods to copy an array, newArrayPractice = [...arrayPractice]; or newArrayPractice = arrayPractice.slice();
let findArrayIncludes = arrayPractice.includes("Angie");

let copyArrayPractice = [...arrayPractice];
const practiceCopyArray = copyArrayPractice.slice(1,4);
const practiceIndexCopyArray = copyArrayPractice.indexOf("Jackson");
let practiceSplice = arrayPractice.splice(0, 1);
// let emptySplice = splice();
// console.log(emptySplice);

console.log(wolf);
console.log(practiceIndexCopyArray);
console.log(newArrayPractice.length);
console.log(newArrayPractice);
console.log(practiceSplice);
console.log(practiceCopyArray);
console.log(copyArrayPractice);
console.log(findArrayIncludes); 