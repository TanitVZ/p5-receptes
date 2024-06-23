import Ingredient from "@/components/Ingredient";
import RecipeData from "@/components/RecipeData";
import { actionReadReceptes } from "@/actions/receptes";
import { IngredientType } from "@/lib/receptes";

//export const dynamic = "force-dynamic";
//export const revalidate = 0;

type PageProps = {
  params: {
    recipeId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { recipeId } = params;
  const receptesAll = await actionReadReceptes();

  const recepta = receptesAll.receptes[Number(recipeId) - 1];

  return (
    <main className="p-8">
      <RecipeData recipes={receptesAll} recipeId={Number(recipeId)} />
      <div className="flex flex-col justify-center gap-4 p-6 w-80">
        <ul>
          {recepta.ingredients.map((ingr: IngredientType) => (
            <Ingredient
              key={ingr.id}
              ingredient={ingr}
              recipes={receptesAll}
              recipeId={Number(recipeId)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
