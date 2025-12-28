console.log("Grocery shopping list:");
console.log("It will be nice to have some fruit to eat.");
console.log("This looks like too much junk food.");
console.log("It might be nice to get a dessert.");
console.log("On second thought, maybe we should be more health conscious.");
let shoppingList = [ ];
function getShoppingListMsg(shoppingList) {
   return "Current Shopping List: " + shoppingList; 
}
shoppingList.push("Apples");
shoppingList.push("Grapes");
console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
shoppingList.unshift("Chocolate Cake");
shoppingList.pop();
shoppingList.shift();
console.log(getShoppingListMsg(shoppingList));