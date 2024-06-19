import Ingredient from "@/components/Ingredient";
import RecipeData from "@/components/RecipeData";
import { readReceptes } from "./actions/receptes";

export default async function Home() {
  const data = await readReceptes();
  
  return (
    <main className="p-8">
       <RecipeData recipes={data} />
      <ul>
      <Ingredient recipe={data} />
      </ul>
    </main>
  );
}
