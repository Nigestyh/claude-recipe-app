import { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([
    "lamb",
    "tomato",
    "bread",
    "cheese",
  ]);
  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

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
        <section className="ingredient-section">
          <h2>Ingredients on hand:</h2>
          <ul>{ingredientList}</ul>
        </section>
      )}

      {ingredients.length > 3 && (
        <section className="recipe-prompt">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="get-recipe-button">Get a recipe</button>
        </section>
      )}
    </main>
  );
}
export default Main;
