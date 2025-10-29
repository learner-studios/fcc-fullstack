// fortune teller app 

let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbor.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";
let selectedFortune;

//switch: 
// case: expression
// break;

/*function genNumber(c){
 return Math.floor(Math.random()*c);
}

let randomNumber = genNumber(5);
console.log(randomNumber);
   */

function genNumber(x){
    return Math.floor(Math.random()*x);
}

let randomNumber = genNumber(5);


switch (randomNumber){
    case 1:
        selectedFortune = fortune1;
        console.log(selectedFortune);
        break;
    case 2:
        selectedFortune = fortune2;
        console.log(selectedFortune);
        break;
    case 3:
        selectedFortune = fortune3;
        console.log(selectedFortune);
        break;
    case 4:
        selectedFortune = fortune4;
        console.log(selectedFortune);
        break;
    case 5:
        selectedFortune = fortune5;
        console.log(selectedFortune);
        break;
    default:
        selectedFortune = "Wrong day, try again";
        console.log(selectedFortune);
        break;
}