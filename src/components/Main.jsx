function Main() {
  return (
    <main>
      <form className="input-ingredient">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. lettuce"
          aria-label="add ingredient"
        />
        <button> + Add ingredient</button>
      </form>
    </main>
  );
}
export default Main;
