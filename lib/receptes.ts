

export type RecipeData = {
    id: number,
    titol: string,
    ingredients: Ingredient[]
}

type Ingredient = {
    id : number, 
    quantitat : string,
    mesura? : string,
    nom : string
}



