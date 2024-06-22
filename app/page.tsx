import Ingredient from "@/components/Ingredient";
import RecipeData from "@/components/RecipeData";
import { actionReadReceptes } from "@/actions/receptes";
import Recipe from "@/components/Recipe";
import { RecipeType } from "@/lib/receptes";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const data = await actionReadReceptes();
  console.log(data)
  return (
    <main className="p-8">
      <div className="flex flex-col justify-center gap-4 p-6 w-80">
      <ul>
        {data.map((recep: RecipeType) => ( 
      <Recipe key={recep.id} recipes={recep}/>))}
      </ul>    
      </div>
    </main>
  );
}
