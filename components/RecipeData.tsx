"use client"

import React from 'react'
import type { Recipe } from '@/lib/receptes'
import { Input } from '@/components/ui/input'

import { Select,  SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function RecipeData({recipes} : {recipes : Recipe}) {
  return (
    <>
    <h1>{recipes.titol}</h1>
    <div>
      <label>Quantitat</label>
      <Input type="number" placeholder="quantitat"/>
      <label>Mesura</label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Sel·lecciona mesura"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Kg">Kg</SelectItem>
          <SelectItem value="l">l</SelectItem>
        </SelectContent>
      </Select>
      <label>Ingredient</label>
      <Input type="text" placeholder="ingredient"/>
    </div>
</>
  )
}
