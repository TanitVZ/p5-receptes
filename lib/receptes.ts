

export type Recipe = {
    id: number,
    titol: string,
    ingredients: Ingredient[]
}

export type Ingredient = {
    id : number, 
    quantitat : string,
    mesura? : string,
    nom : string
}



