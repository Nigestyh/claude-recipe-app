import { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([]);
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
        <button> + Add ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
}
export default Main;
