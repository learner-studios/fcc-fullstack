// let user_input;

// //define a function as booWho

// function typeConvert (user_input){
// return console.log(typeof user_input);
// }

// function booWho (typeConvert){
//     if (typeConvert = Boolean){
//         return console.log("True");
//     }
//     else{
//         return console.log("False");
//     }
// }

// // typeConvert(1);
// typeConvert("something I'm writing");

// // typeConvert("something to say");
// // typeConvert(1);

// booWho(typeConvert)

// let show_result = typeConvert(true);

// function booWho(show_result){
//     if (show_result = "boolean"){
//         return "True";
//     } 
//     else{
//         return "False";
//     }
// }


// console.log(show_result);
// booWho();

function booWhoo(x){
    let userInput = typeof x;
    if (userInput === "boolean"){
        return console.log("True");
    }
    else{
        return console.log("False");
    }
}

booWhoo(1);
booWhoo(true);
booWhoo("true");
