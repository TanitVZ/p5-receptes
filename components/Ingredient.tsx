"use client"
import React from "react";
import type { Ingredient } from "@/lib/receptes";
import type { Recipe } from "@/lib/receptes";

export default function Ingredient({ recipe }: { recipe: Recipe }) {
  return (
    <>
      <div className="flex flex-col justify-center gap-4">
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
          </li>
        ))}
      </div>
    </>
  );
}
