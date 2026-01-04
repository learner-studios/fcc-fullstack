//build a function to convert temperature from celcius to farenheit


function convertCtoF(tempNumb) {
let tempNumbConsole = (tempNumb * (9/5)) + 32;

return tempNumbConsole;
}

console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(0));
console.log(convertCtoF(20));
console.log(convertCtoF(30));