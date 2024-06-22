"use client";

import { RecipeType } from "@/lib/receptes";
import { cn } from "@/lib/utils";
import Link from "next/link";

import React from "react";

export default function Recipe({ recipes: recipe }: { recipes: RecipeType }) {
  const path = `./receptes/${recipe.id}`;

  return (
    <Link
      key={recipe.id}
      href={path}
      className={cn(
        "block p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
        "hover:bg-blue-50"
      )}
    >
      <div className="flex flex-col items-start">
        <h2>{recipe.titol}</h2>
      </div>
    </Link>
  );
}
