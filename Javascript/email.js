// create a function with an email argument
// let email;

// function maskEmail(email) {
//     if (email.indexOf(0) <= email.indexOf(-1))
//     {
//         return email.repeat("*", -1);
//     }
//     else
//     {
//         return console.log("Try again!");
//     }
// }

// maskEmail("doej2546@gmail.com");

let email;

function maskEmail(email){
    if(email.indexOf(0) && email.length != "@")
    {
        return email.slice(1,email.length);
        return email.replace(1,"*");
    }
    else {
        return "Sorry try again";
    }
    // for (let index = 0; index >= email.length; index++) {
    //     const element = email[index];
    //   return email.slice(0); 
    // }
    // return email.slice(0, n-1);
}

maskEmail("doej2546@gmail.com");