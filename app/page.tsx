import Ingredient from "@/components/Ingredient";
import RecipeData from "@/components/RecipeData";
import data from "@/public/receptes.json"

export default function Home() {
  return (
    <main className="p-8">
       <RecipeData recipes={data} />
      <ul>
      <Ingredient recipe={data} />
      </ul>
    </main>
  );
}
