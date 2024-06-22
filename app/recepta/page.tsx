import Ingredient from "@/components/Ingredient";
import RecipeData from "@/components/RecipeData";
import { actionReadReceptes } from "@/actions/receptes";
import { IngredientType } from "@/lib/receptes";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const data = await actionReadReceptes();
  
  return ( 
    <main className="p-8">
       <RecipeData recipes={data} />
       <div className="flex flex-col justify-center gap-4 p-6 w-80">
      <ul>
        {data.ingredients.map((ingr: IngredientType) => ( 
      <Ingredient key={ingr.id} ingredient={ingr} recipes={data}/>))}
      </ul>
      </div>
    </main>
  );
}
