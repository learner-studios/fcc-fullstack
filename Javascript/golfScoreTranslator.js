//create a function that converts the par and strokes to there nickname
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// 1. create a function named golfScore
function golfScore(par, strokes) {

    // 2. function should return a string
    
    // 3. if stroke is 1 if stroke is 1
    if (strokes == 1) {
        return "Hole-in-one!";
    }
else if ( strokes <= par -2) {
    return "Eagle";
}
else if (strokes == par - 1) {
    return "Birdie";
}
else if (strokes == par) {
    return "Par";
}
else if (strokes == par + 1) {
    return "Bogey";
}
else if (strokes == par +2) {
    return "Double Bogey";
}
else if (strokes >= par +3) {
    return "Go Home!";
}
else {
    return "Please try again!";
}
}