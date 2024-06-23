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

export async function actionUpdateReceptes(
  recipes: RecipesType,
  updatedRecipes: RecipeType
) {
  const recipeIndex = updatedRecipes.id - 1;

  recipes.receptes[recipeIndex] = updatedRecipes;

  const updatedJson = JSON.stringify(recipes);
  await writeFile(jsonFilePath, updatedJson);
  revalidatePath("/");
}

export async function actionDeleteIngredient(
  id: Number,
  recipes: RecipesType,
  recipeId: number
) {
  const recipe = recipes.receptes[recipeId - 1];
  const updatedJson = {
    ...recipe,
    ingredients: recipe.ingredients.filter(
      (ingredient) => ingredient.id !== id
    ),
  };

  recipes.receptes[recipeId - 1] = updatedJson;

  await writeFile(jsonFilePath, JSON.stringify(recipes));
  revalidatePath("/");
}
