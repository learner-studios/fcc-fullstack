// Test cases for golfScoreTranslator.js

// Copy the function here for testing (since original file doesn't export it)
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else if (strokes >= par + 3) {
        return "Go Home!";
    } else {
        return "Please try again!";
    }
}

// Test cases
console.log("Test 1: Hole-in-one -", golfScore(4, 1) === "Hole-in-one!" ? "PASS" : "FAIL");
console.log("Test 2: Eagle -", golfScore(4, 2) === "Eagle" ? "PASS" : "FAIL");
console.log("Test 3: Birdie -", golfScore(4, 3) === "Birdie" ? "PASS" : "FAIL");
console.log("Test 4: Par -", golfScore(4, 4) === "Par" ? "PASS" : "FAIL");
console.log("Test 5: Bogey -", golfScore(4, 5) === "Bogey" ? "PASS" : "FAIL");
console.log("Test 6: Double Bogey -", golfScore(4, 6) === "Double Bogey" ? "PASS" : "FAIL");
console.log("Test 7: Go Home -", golfScore(4, 7) === "Go Home!" ? "PASS" : "FAIL");
console.log("Test 8: Go Home (more strokes) -", golfScore(4, 10) === "Go Home!" ? "PASS" : "FAIL");

// Edge cases
console.log("Test 9: Eagle with lower par -", golfScore(5, 2) === "Eagle" ? "PASS" : "FAIL");
console.log("Test 10: Birdie with different par -", golfScore(3, 2) === "Birdie" ? "PASS" : "FAIL");

// Note: The function doesn't validate for non-positive strokes, so 0 or negative return "Eagle"
console.log("Test 11: Zero strokes (returns Eagle) -", golfScore(4, 0) === "Eagle" ? "PASS" : "FAIL");
console.log("Test 12: Negative strokes (returns Eagle) -", golfScore(4, -1) === "Eagle" ? "PASS" : "FAIL");