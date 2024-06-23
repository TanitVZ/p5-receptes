"use client";

import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import type { RecipeType, IngredientType, RecipesType } from "@/lib/receptes";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  actionReadRecepta,
  actionReadReceptes,
  actionUpdateReceptes,
} from "@/actions/receptes";
import error from "next/error";

const initialIngredient: IngredientType = {
  id: 0,
  quantitat: "",
  mesura: "",
  nom: "",
};

export default function RecipeData({
  recipes,
  recipeId: recipeId,
}: {
  recipes: RecipesType;
  recipeId: number;
}) {
  const recipe = recipes.receptes[recipeId - 1];
  const [ingredient, setIngredient] =
    useState<IngredientType>(initialIngredient);
  const [json, setJson] = useState<RecipeType>(recipe);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const getNextIngredientId = () => {
    if (json) {
      const maxId = json.ingredients.reduce(
        (max, ingredient) => (ingredient.id > max ? ingredient.id : max),
        0
      );
      return maxId + 1;
    }

    return 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    formRef.current?.reset();

    e.preventDefault();

    if (json) {
      const newIngredient: IngredientType = {
        ...ingredient,
        id: getNextIngredientId(),
      };

      if (newIngredient.nom !== "" && newIngredient.quantitat !== "") {
        const updatedJson = {
          ...recipe,
          ingredients: [...recipe.ingredients, newIngredient],
        };

        setJson(updatedJson);
        setIngredient(initialIngredient);

        await actionUpdateReceptes(recipes, updatedJson);
      } else {
        setError("Ha d'informar 'ingredient i la quantitat");
      }
    }
  };

  const addQuantitat: ChangeEventHandler<HTMLInputElement> = (e) => {
    //TODO controlar el formulari amb Zod
    if (!isNaN(Number(e.target.value)))
      setIngredient((prev) => ({ ...prev, quantitat: e.target.value }));
  };

  const addNom: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIngredient((prev) => ({ ...prev, nom: e.target.value }));
  };

  const addMesura = (v: string) =>
    setIngredient((prev) => ({ ...prev, mesura: v }));

  return (
    <>
      <h1>{recipe.titol}</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4">
          <div className="w-20">
            <label>Quantitat</label>
            <Input
              type="string"
              name="quantitat"
              value={ingredient.quantitat}
              onChange={addQuantitat}
            />
          </div>
          <div className="w-20">
            <label>Mesura</label>
            <Select
              name="mesura"
              value={ingredient.mesura}
              onValueChange={addMesura}
            >
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Kg">Kg</SelectItem>
                <SelectItem value="g">g</SelectItem>
                <SelectItem value="l">l</SelectItem>
                <SelectItem value="ml">ml</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-4">
            <label>Ingredient</label>
            <Input
              type="text"
              name="nom"
              value={ingredient.nom}
              onChange={addNom}
              placeholder="ingredient"
            />
          </div>
          <div className="pt-6">
            <Button type="submit">Afegeix ingredient</Button>
          </div>
        </div>
        <div>
          {error && (
            <p className="p-2 mt-4 bg-red-500 text-white rounded-lg shadow-md">
              {error}
            </p>
          )}
        </div>
      </form>
    </>
  );
}
