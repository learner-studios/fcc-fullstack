// Create an empty lunches variable and assign it to an array
let lunches = [];

function addLunchToEnd(lunches, stringLunch) {
    // Add the string to the end of the array
    lunches.push(stringLunch);
    console.log(`${stringLunch} added to the end of the lunch menu.`);
    return lunches;
}

function addLunchToStart(lunches, stringLunch) {
    // Add the string to the start of the array
    lunches.unshift(stringLunch);
    console.log(`${stringLunch} added to the start of the lunch menu.`);
    return lunches;
}

function removeLastLunch(lunches) {
    // Remove the last element from the array
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
    } else {
        let removedLunch = lunches.pop();
        console.log(`${removedLunch} removed from the end of the lunch menu.`);
    }
    return lunches;
}

function removeFirstLunch(lunches) {
    // Remove the first element from the array
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
    } else {
        let removedLunch = lunches.shift();
        console.log(`${removedLunch} removed from the start of the lunch menu.`);
    }
    return lunches;
}

function getRandomLunch(lunches) {
    // Select a random element from the array
    if (lunches.length === 0) {
        console.log("No lunches available.");
    } else {
        let randomIndex = Math.floor(Math.random() * lunches.length);
        console.log(`Randomly selected lunch: ${lunches[randomIndex]}`);
    }
}

function showLunchMenu(lunches) {
    // Display all lunch items or indicate menu is empty
    if (lunches.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${lunches.join(", ")}`);
    }
}

// Testing area:
addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi");
addLunchToEnd(lunches, "Pizza");
showLunchMenu(lunches);
getRandomLunch(lunches);
removeLastLunch(lunches);
showLunchMenu(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);


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
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);