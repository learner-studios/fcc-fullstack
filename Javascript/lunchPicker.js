//create and empty lunches variable and assign it to an array
let lunches = [];
//mdn Array;
//mdn 
// create a few functions to start lunch with, with lunch with, and remove lunch with

function addLunchToStart(lunches, stringLunch) {
    // add the string to start of the array (hint use unshift
    lunches.unshift(stringLunch);
    return `${stringLunch} added to the start of the lunch menu.` + lunches;
    
}

function addLunchToEnd(lunches, stringLunch) {
    // add the string to the end of the array (hint: use push
        lunches.push(stringLunch);
        return `${stringLunch} added to the end of the lunch menu.`+ lunches;
}

function removeLastLunch(lunches, stringLunch) {
    // remove the last lunch from the array (hint: use pop)
        let emptyArrayCheck = lunches.length;
        if (emptyArrayCheck === 0){
            return "No lunches to remove.";
        }
        else {
                lunches.pop(stringLunch);
        return `${stringLunch} removed from the end of the lunch menu.` + lunches;
        }
}

function removeFirstLunch(lunches, stringLunch) {
    // remove the first element from the array (using shift method)
        let emptyArrayCheck = lunches.length
        if (emptyArrayCheck === 0){
            return "No lunches to remove.";
        }
        else {
        lunches.shift(stringLunch);
        return `${stringLunch} removed from the start of the lunch menu.` + lunches;
}

// now we need to create a random function that will pick the lunches from the arrays  and plop them back into one of the other functions

function getRandomLunch(lunches){
    // select a random element from the array (hint: use Math.random)
    let lunchesRandom = Math.random(lunches);
    let emptyArrayCheck = lunches.length;
    if (emptyArrayCheck === 0){
        return "No lunches available.";
    }
    else {
        return `Randomly selected lunch: ${lunchesRandom}` ;
    }
}

// lastly need to create a function that will display the lunches in this time the console but also the lunch menu

function showLunchMenu(lunches){ 
    // tying this all together display all the lunch items in the array first check if it's empty, if it isn't then display the appropriate messages.

    let lunchesLengthCheck = lunches.length;
    if (lunchesLengthCheck ===0){
        return "The menu is empty.";
    }
    else {
        return `Menu items: ${lunches.join(",")}`;
    }
}


// Testing area: 
addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");
addLunchToStart(lunches, "Sushi");
addLunchToStart(["Burger", "Sushi"], "Pizza");
removeLastLunch ();
removeLastLunch(["Stew", "Soup", "Toast"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);
removeFirstLunch();
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);
getRandomLunch();
showLunchMenu();
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]); }
