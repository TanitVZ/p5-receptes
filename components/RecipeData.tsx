"use client"

import React, { ChangeEventHandler, useState } from 'react'
import type { Recipe , Ingredient} from '@/lib/receptes'
import { Input } from '@/components/ui/input'

import { Select,  SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const initialIngredient = {
  id : 0, 
  quantitat : 0,
  mesura : "",
  nom : ""
}

export default function RecipeData({recipes} : {recipes : Recipe}) {

  const [ingredient, setIngredient] = useState<Ingredient>(initialIngredient);
  
  const addJsonIngredient = (i:Ingredient) => () => {
    console.log(`Quantitat: ${i.quantitat} Mesura:${i.mesura} Ingredient:${i.nom}`)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const addQuantitat: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIngredient((prev) => ({...prev, quantitat : Number(e.target.value)}))
  }


  const addNom: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIngredient((prev) => ({...prev, nom : e.target.value}))
  }

  const addMesura = (v: string) => setIngredient((prev) => ({ ...prev, mesura: v }))


  return (
    <>
    <h1>{recipes.titol}</h1>
    <form onSubmit={handleSubmit}>
    <div>
      <label>Quantitat</label>
      <Input type="number"  name="ingredientQuantitat" onChange={addQuantitat}/>
      <label>Mesura</label>
      <Select name="mesura"   onValueChange={addMesura}
      >
        <SelectTrigger>
          <SelectValue placeholder="Sel·lecciona mesura"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Kg">Kg</SelectItem>
          <SelectItem value="l">l</SelectItem>
        </SelectContent>
      </Select>
      <label>Ingredient</label>
      <Input type="text" name="ingredientNom" onChange={addNom} placeholder="ingredient"/>
    </div>
    <Button onClick={addJsonIngredient(ingredient)}>Afegeix ingredient</Button>
    </form>
</>
  )
}
