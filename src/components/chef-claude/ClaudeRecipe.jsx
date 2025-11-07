import ReactMarkdown from "react-markdown";
function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Claude Recommends: </h2>
      <article className="suggested-recipe" aria-live="polite">
        <ReactMarkdown>{props.recipe} </ReactMarkdown>
      </article>
    </section>
  );
}
export default ClaudeRecipe;
