import { useState } from "react";
import IngredientList from "./chef-claude/IngredientList";
import ClaudeRecipe from "./chef-claude/ClaudeRecipe";
import getRecipeFromIngredients from "../api/fetchRecipe";

function Main() {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("");

  async function fetchSuggestedRecipe() {
    const suggestedRecipe = await getRecipeFromIngredients(ingredients);
    setRecipe(suggestedRecipe);
  }

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredients} className="input-ingredient">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. lettuce"
          aria-label="add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          getRecipe={fetchSuggestedRecipe}
        />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
export default Main;
