function IngredientList(props) {
  const ingredientList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <>
      <section className="ingredient-section">
        <h2>Ingredients on hand:</h2>
        <ul>{ingredientList}</ul>
      </section>

      {props.ingredients.length > 3 && (
        <section className="recipe-prompt">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.toggleRecipe} className="get-recipe-button">
            Get a recipe
          </button>
        </section>
      )}
    </>
  );
}
export default IngredientList;
