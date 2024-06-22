"use server";
import RecipeData from "@/components/RecipeData";
import { IngredientType, RecipeType } from "@/lib/receptes";
import fs from "fs";
import { revalidatePath } from "next/cache";
import path from "path";

const jsonFilePath = "./data/receptes.json";

export async function actionReadRecepta(id: number) {
  const jsonData = fs.readFileSync(jsonFilePath, "utf8");

  const recipes = JSON.parse(jsonData);
  const recipe = recipes.find((recep: RecipeType) => recep.id === id);

  if (recipe) return recipe;
  else console.log("no hi ha recepta");
}

export async function actionReadReceptes() {
  const jsonData = fs.readFileSync(jsonFilePath, "utf8");
  const recipes = JSON.parse(jsonData);
  return recipes;
}
 
export async function actionUpdateReceptes(updatedRecipes: RecipeType) {

  //NO CAL TORNAR A LLEGIR TOT EL JSON, JA EL TENIM 
  // No estava bé el Home
  /*
  const jsonData = fs.readFileSync(jsonFilePath, "utf8");
  console.log(JSON.stringify(updatedRecipes));
*/
  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedRecipes), "utf8");
  revalidatePath("/");
}

export async function actionDeleteIngredient(id: Number, recipes: RecipeType) {
  const updatedJson = {
    ...recipes,
    ingredients: recipes.ingredients.filter(
      (ingredient) => ingredient.id !== id
    ),
  };
  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedJson), "utf8");
  revalidatePath("/");
}
