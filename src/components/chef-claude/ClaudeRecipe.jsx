function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Claude Recommends: </h2>
      <article className="suggested-recipe">{props.recipe}</article>
    </section>
  );
}
export default ClaudeRecipe;
