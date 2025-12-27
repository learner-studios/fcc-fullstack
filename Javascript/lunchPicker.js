//create and empty lunches variable and assign it to an array
let lunches = [];
// create a few functions to start lunch with, with lunch with, and remove lunch with

function addLunchToStart(lunches, emptyString) {
    // add the string to start of the array (hint use unshift
    lunches.unshift(emptyString);
    console.log(`${emptyString} added to the start of the lunch menu.`);
    return lunches;
}

function addLunchToEnd(lunches, emptyString) {
    // add the string to the end of the array (hint: use push
    lunches.push(emptyString);
    console.log(`${emptyString} added to the end of the lunch menu.`);
    return lunches;
}

function removeLastLunch(lunches) {
    // remove the last lunch from the array (hint: use pop)
    if (lunches.length === 0){
        console.log("No lunches to remove.");
    }
    else {
        let goneLunch = lunches.pop();
        console.log(`${goneLunch} removed from the end of the lunch menu.`);
        return lunches;
    }
}

function removeFirstLunch(lunches) {
    // remove the first element from the array (using shift method)
    if (lunches.length === 0){
        console.log("No lunches to remove.");
    }
    else {
        let goneLunch = lunches.shift();
        console.log(`${goneLunch} removed from the start of the lunch menu.`);
        return lunches;
    }
}
// now we need to create a random function that will pick the lunches from the arrays  and plop them back into one of the other functions

function getRandomLunch(lunches){
    // select a random element from the array (hint: use Math.random)
    if(lunches.length === 0){
        console.log("No lunches available.");   
    }
    else {
        let indexChoice = Math.floor(Math.random() * lunches.length);
        console.log(`Randomly selected lunch: ${lunches[indexChoice]}`);
    }
}

// lastly need to create a function that will display the lunches in this time the console but also the lunch menu

function showLunchMenu(lunches){ 
    // tying this all together display all the lunch items in the array first check if it's empty, if it isn't then display the appropriate messages.

    if (lunches.length === 0){
        console.log("The menu is empty.");
    }
    else {
        console.log(`Menu items: ${lunches.join(", ")}`);
}
}


// Testing area: 

showLunchMenu(lunches);
addLunchToEnd(lunches, "Tacos");
addLunchToEnd(lunches, "Pizza");
addLunchToStart(lunches, "Sushi");
removeLastLunch(lunches);
removeFirstLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);