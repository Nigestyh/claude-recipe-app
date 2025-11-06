import { useState } from "react";
import IngredientList from "./chef-claude/IngredientList";
import ClaudeRecipe from "./chef-claude/ClaudeRecipe";

function Main() {
  const [ingredients, setIngredients] = useState([]);

  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
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
          toggleRecipe={toggleRecipeShown}
        />
      )}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
export default Main;
