"use client";

import React, { ChangeEventHandler, useEffect, useState } from "react";
import type { Recipe, Ingredient } from "@/lib/receptes";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const initialIngredient: Ingredient = {
  id: 0,
  quantitat: "",
  mesura: "",
  nom: "",
};
 


export default function RecipeData({ recipes }: { recipes: Recipe }) {
  const [ingredient, setIngredient] = useState<Ingredient>(initialIngredient);
  const [json, setJson] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch("/receptes.json")
      .then((response) => response.json())
      .then((json: Recipe) => setJson(json))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  const addJsonIngredient = (i: Ingredient) => () => {
    console.log(
      `Id: ${i.id} Quantitat: ${i.quantitat} Mesura:${i.mesura} Ingredient:${i.nom}`
    );

      
    if (json) {
     
      const newIngredient: Ingredient = {
        ...ingredient,
        id: getNextIngredientId(),
      };
      console.log(newIngredient.id, newIngredient.nom)
    const updatedJson = {...json, ingredients:[...json.ingredients, newIngredient]

    };
    setJson(updatedJson)
    setIngredient(initialIngredient);
 
  } 
  };

  const getNextIngredientId = () => {
    if(json) {

      const maxId = json.ingredients.reduce((max, ingredient) => (ingredient.id > max ? ingredient.id : max), 0);
    return maxId + 1
    }
    
    return 0;
    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
  }
  const addQuantitat: ChangeEventHandler<HTMLInputElement> = (e) => {
    //setIngredient((prev) => ({ ...prev, quantitat: Number(e.target.value) }));
    setIngredient((prev) => ({ ...prev, quantitat: e.target.value }));
  };

  const addNom: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIngredient((prev) => ({ ...prev, nom: e.target.value }));
  };

  const addMesura = (v: string) =>
    setIngredient((prev) => ({ ...prev, mesura: v }));



  return (
    <>
      <h1>{recipes.titol}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Quantitat</label>
          <Input
            type="string"
            name="quantitat"
            value={ingredient.quantitat}
            onChange={addQuantitat}
          />
          <label>Mesura</label>
          <Select
            name="mesura"
            value={ingredient.mesura}
            onValueChange={addMesura}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sel·lecciona mesura" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kg">Kg</SelectItem>
              <SelectItem value="l">l</SelectItem>
            </SelectContent>
          </Select>
          <label>Ingredient</label>
          <Input
            type="text"
            name="nom"
            value={ingredient.nom}
            onChange={addNom}
            placeholder="ingredient"
          />
        </div>
        <Button onClick={addJsonIngredient(ingredient)}>
          Afegeix ingredient
        </Button>
      </form>
      <pre>{JSON.stringify(json, null, 2)}</pre> 
    </>
  );
}
