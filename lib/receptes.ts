

export type Recipe = {
    id: number,
    titol: string,
    ingredients: Ingredient[]
}

export type Ingredient = {
    id : number, 
    quantitat : number,
    mesura? : string,
    nom : string
}



