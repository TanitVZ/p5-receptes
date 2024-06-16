import React from 'react'
import type { RecipeData } from '@/lib/receptes'

export default function RecipeData({recipes} : {recipes : RecipeData}) {
  return (
    <div>{recipes.titol}</div>
  )
}
