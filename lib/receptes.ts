

export type RecipeType = {
    id: number,
    titol: string,
    ingredients: IngredientType[]
}

export type IngredientType = {
    id : number, 
    quantitat : string,
    mesura? : string,
    nom : string
}



