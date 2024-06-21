"use client";
import React from "react";
import type { Ingredient } from "@/lib/receptes";
import type { Recipe } from "@/lib/receptes";
import { actionDeleteIngredient } from "@/app/actions/receptes";


export default function Ingredient({ recipe}: { recipe: Recipe}) {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 p-6 w-80">
        {recipe.ingredients.map((i) => (
          <li
            key={i.id}
            className="flex flex-row justify-left items-center gap-3 "
          >
            <span className="px-2 min-w-20">
              {i.quantitat}
              {i.mesura}
            </span>
            <span>{i.nom}</span>
            <div className="flex-1"></div>
            <span
              onClick={() => actionDeleteIngredient(recipe, i.id)}
              className="hover:bg-red-500 hover:text-white hover:font-bold border w-6 h-6 rounded-full flex flex-col justify-center items-center"
            >
              &times;
            </span>
          </li>
        ))}
      </div>
    </>
  );
}
