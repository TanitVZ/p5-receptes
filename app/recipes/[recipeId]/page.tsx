import Ingredient from "@/components/Ingredient";
import RecipeData from "@/components/RecipeData";
import { actionReadRecepta, actionReadReceptes } from "@/actions/receptes";
import { IngredientType } from "@/lib/receptes";

//export const dynamic = "force-dynamic";
//export const revalidate = 0;

type PageProps = {
    params: {
        recipeId: string;
    };
  };


export default async function Page({ params }: PageProps){

  const { recipeId } = params;
  const data = await actionReadRecepta(Number(recipeId));
  //console.log(data)
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
