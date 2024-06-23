"use server";
import RecipeData from "@/components/RecipeData";
import { IngredientType, RecipeType, RecipesType } from "@/lib/receptes";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";

const jsonFilePath = "./data/receptes.json";

export async function actionReadRecepta(id: number) {
  const jsonData = await readFile(jsonFilePath, "utf8");

  const recipes = JSON.parse(jsonData);

  const recipe = recipes.receptes.find((recep: RecipeType) => recep.id === id);

  if (recipe) {
    return recipe;
  } else console.log("no hi ha recepta");
}

export async function actionReadReceptes() {
  const jsonData = await readFile(jsonFilePath, "utf8");
  const recipes = JSON.parse(jsonData);
  return recipes;
}

export async function actionUpdateReceptes(recipes : RecipesType, updatedRecipes: RecipeType) {
  //NO CAL TORNAR A LLEGIR TOT EL JSON, JA EL TENIM
  // No estava bé el Home
  /*
  const jsonData = fs.readFileSync(jsonFilePath, "utf8");
  console.log(JSON.stringify(updatedRecipes));
*/

  //Amb dues receptes el torno a llegir --> no crec que sigui l'opció òptima
  
  //TODO --> s'hauria de passar un objecte del tipus RecipesType enlloc de tornar a llegir
  //TODO --> mirar perquè al afegir ingredient, fa dos POST

  //const jsonData = await readFile(jsonFilePath, "utf8");
  //const recipes: RecipesType = JSON.parse(jsonData);
  const recipeIndex = updatedRecipes.id - 1;

  recipes.receptes[recipeIndex] = updatedRecipes;

  const updatedJson = JSON.stringify(recipes);
  await writeFile(jsonFilePath, updatedJson);
  revalidatePath("/");
}

export async function actionDeleteIngredient(id: Number, recipes: RecipeType) {
  const jsonData = await readFile(jsonFilePath, "utf8");
  const recipesAll: RecipesType = JSON.parse(jsonData);
  const recipeIndex = recipes.id - 1;

  const updatedJson = {
    ...recipes,
    ingredients: recipes.ingredients.filter(
      (ingredient) => ingredient.id !== id
    ),
  };

  recipesAll.receptes[recipeIndex] = updatedJson;

  await writeFile(jsonFilePath, JSON.stringify(recipesAll));
  revalidatePath("/");
}
