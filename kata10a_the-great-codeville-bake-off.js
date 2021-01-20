const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let combinedIngredients = bakeryA.concat(bakeryB), array = [];
  for (const recipe of recipes) {
    for (let i = 0; i < combinedIngredients.length; i++) {
      // This nested loop will check for all the ingredients that match the ingredients of combined ingredients.
      if (combinedIngredients[i] === recipe.ingredients[0] || combinedIngredients[i] === recipe.ingredients[1]) {
        array.push(combinedIngredients[i]);
      }
    }
    // Before we restart with our next object in our recipes array, we decide
    // wether the current object's ingredients are included in the array we pushed the
    // ingredients into.
    if (array.includes(recipe.ingredients[0]) && array.includes(recipe.ingredients[1])) {
      // The moment this statement is true it will return us the recipe.name
      return recipe.name;
    }
  }
  return "We don't have the ingredients necessary for any of the recipes given";
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));