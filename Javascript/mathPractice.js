// function mathPracticeRandom(number) {
//     // take in random input
//     var inputRandom = Math.ceil(Math.random(number) * 10);
//     console.log(inputRandom);
// }

// mathPracticeRandom(13);
// mathPracticeRandom(45);

function mathRandomInput(){
    var intRand = Math.floor(Math.random() * 10);
    var intRand2 = Math.ceil(Math.random() * 10);
    return [intRand, intRand2];
}

console.log(mathRandomInput());