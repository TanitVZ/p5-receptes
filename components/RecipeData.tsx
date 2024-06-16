import React from 'react'
import type { Recipe } from '@/lib/receptes'

export default function RecipeData({recipes} : {recipes : Recipe}) {
  return (
    <h1>{recipes.titol}</h1>
  )
}
