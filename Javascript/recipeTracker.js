let recipes = [];

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: "",
}

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42, 
    totalIngredients: null,
    difficultyLevel: "",
    
}

const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: "",
}

// need to practice accessing the objects
// let recipe1Name = recipe1.name;
// let recipe2CookingTime = recipe2.cookingTime;
// let recipe3Ingredients = recipe3.ingredients;

// console.log(recipe1Name);
// console.log(recipe2CookingTime);
// console.log(recipe3Ingredients);    

//need to push all three objects into the array
let recipesArray = recipes.push(recipe1, recipe2, recipe3);   
console.log(recipes);

//need to create a function with a single parameter takes an array with ingredients and returns the number of ingredients from the array passed to the function.

function getTotalIngredients (ingredients){
    let ingredientsArray = ingredients.length;
    return ingredientsArray;
}

function getDifficultyLevel(cookingTime){
    let cookingLevel = "";
    if (cookingTime <= 30){
        return cookingLevel = "easy";
    }
    else if (cookingTime <= 60){
        return cookingLevel = "medium";
    }
    else {
        return cookingLevel = "hard";
    }
}

console.log