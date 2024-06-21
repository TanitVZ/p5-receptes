"use server";

import { Ingredient, Recipe } from "@/lib/receptes";
import fs from "fs";
import { revalidatePath } from "next/cache";
import path from "path";

const jsonFilePath = "./data/receptes.json";

export async function actionReadReceptes() {
  const jsonData = fs.readFileSync(jsonFilePath, "utf8");
  const recipes: Recipe = JSON.parse(jsonData);
  return recipes;
}

export async function actionUpdateReceptes(updatedRecipes: Recipe) {
  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedRecipes), "utf8");
  revalidatePath("/");
}

export async function actionDeleteIngredient(recipes: Recipe , id : number) {
  const updatedJson = {...recipes, ingredients: recipes.ingredients.filter( ingredient => ingredient.id !== id)}
  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedJson), "utf8");
  revalidatePath("/");
  
}

