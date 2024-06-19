"use server";

import { Recipe } from '@/lib/receptes';
import fs from 'fs';
import path from 'path';


const jsonFilePath = path.join(process.cwd(), 'data', 'receptes.json');

export async function readReceptes(): Promise<Recipe> {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
  const recipes: Recipe = JSON.parse(jsonData);
  return recipes;
}

export async function updateReceptes(updatedRecipes: Recipe): Promise<void> {
  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedRecipes), 'utf8');
}
 