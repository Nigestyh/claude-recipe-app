import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.`;
const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN);

export async function handler(event) {
  try {
    const { ingredients } = JSON.parse(event.body);
    const ingredientsString = ingredients.join(", ");

    const response = await hf.chatCompletion({
      model: "google/gemma-2-2b-it",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipe: response.choices[0].message.content }),
    };
  } catch (err) {
    console.error("Error in generateRecipe:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message }),
    };
  }
}
