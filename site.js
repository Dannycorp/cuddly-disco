const recipes = [
  {
    name: "Mojito",
    ingredients: [
      "2 oz white rum",
      "1/2 oz lime juice",
      "1 tsp sugar",
      "6 mint leaves",
      "soda water"
    ],
    instructions: "In a shaker, muddle the mint leaves with the sugar and lime juice. Add the rum and shake with ice. Strain into a glass filled with ice and top with soda water. Garnish with a mint sprig.",
    picture: "mojito.jpg"
  },
  {
    name: "Margarita",
    ingredients: [
      "2 oz tequila",
      "1 oz lime juice",
      "1/2 oz Cointreau or triple sec"
    ],
    instructions: "Shake the ingredients with ice and strain into a salt-rimmed glass. Garnish with a lime wheel.",
    picture: "margarita.jpg"
  }
];

const recipeList = document.getElementById("recipe-list");

for (let recipe of recipes) {
  const recipeElement = document.createElement("div");
  recipeElement.classList.add("recipe");
  
  const recipeName = document.createElement("h2");
  recipeName.innerText = recipe.name;
  recipeElement.appendChild(recipeName);

  const picture = document.createElement("img");
  picture.src = recipe.picture;
  recipeElement.appendChild(picture);
  
  const ingredientsList = document.createElement("ul");
  for (let ingredient of recipe.ingredients) {
    const ingredientItem = document.createElement("li");
    ingredientItem.innerText = ingredient;
    ingredientsList.appendChild(ingredientItem);
  }
  recipeElement.appendChild(ingredientsList);
  
  const instructions = document.createElement("p");
  instructions.innerText = recipe.instructions;
  recipeElement.appendChild(instructions);
  
  recipeList.appendChild(recipeElement);
}


// const recipes = [
//     {
//       name: "Mojito",
//       ingredients: [
//         "2 oz white rum",
//         "1/2 oz lime juice",
//         "1 tsp sugar",
//         "6 mint leaves",
//         "soda water"
//       ],
//       instructions: "In a shaker, muddle the mint leaves with the sugar and lime juice. Add the rum and shake with ice. Strain into a glass filled with ice and top with soda water. Garnish with a mint sprig."
//     },
//     {
//       name: "Margarita",
//       ingredients: [
//         "2 oz tequila",
//         "1 oz lime juice",
//         "1/2 oz Cointreau or triple sec"
//       ],
//       instructions: "Shake the ingredients with ice and strain into a salt-rimmed glass. Garnish with a lime wheel."
//     }
//   ];
  
//   const recipeList = document.getElementById("recipe-list");
  
//   for (let recipe of recipes) {
//     const recipeElement = document.createElement("div");
//     recipeElement.classList.add("recipe");
    
//     const recipeName = document.createElement("h2");
//     recipeName.innerText = recipe.name;
//     recipeElement.appendChild(recipeName);
    
//     const ingredientsList = document.createElement("ul");
//     for (let ingredient of recipe.ingredients) {
//       const ingredientItem = document.createElement("li");
//       ingredientItem.innerText = ingredient;
//       ingredientsList.appendChild(ingredientItem);
//     }
//     recipeElement.appendChild(ingredientsList);
    
//     const instructions = document.createElement("p");
//     instructions.innerText = recipe.instructions;
//     recipeElement.appendChild(instructions);
    
//     recipeList.appendChild(recipeElement);
//   }
  