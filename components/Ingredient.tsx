"use client";
import React from "react";
import type { IngredientType, RecipesType } from "@/lib/receptes";
import type { RecipeType } from "@/lib/receptes";
import { actionDeleteIngredient } from "@/actions/receptes";

 
export default function Ingredient({ ingredient, recipes, recipeId}: { ingredient: IngredientType, recipes  : RecipesType, recipeId : number}) {

 
  return (
    <>
     
    
          <li
            key={ingredient.id}
            className="flex flex-row justify-left items-center gap-3 "
          >
            <span className="px-2 min-w-20">
              {ingredient.quantitat}
              {ingredient.mesura}
            </span>
            <span>{ingredient.nom}</span>
            <div className="flex-1"></div>
            <span
              onClick={() => actionDeleteIngredient(ingredient.id, recipes, recipeId)}
              className="hover:bg-red-500 hover:text-white hover:font-bold border w-6 h-6 rounded-full flex flex-col justify-center items-center"
            >
              &times;
            </span>
          </li>
   
    </>
  );
}
