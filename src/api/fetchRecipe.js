async function getRecipeFromIngredients(ingredientsArr) {
  const response = await fetch("/.netlify/functions/generateRecipe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsArr }),
  });

  const data = await response.json();
  return data.recipe;
}

export default getRecipeFromIngredients;
