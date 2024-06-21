import Ingredient from "@/components/Ingredient";
import RecipeData from "@/components/RecipeData";
import { actionReadReceptes } from "./actions/receptes";

export default async function Home() {
  const data = await actionReadReceptes();
  
  return (
    <main className="p-8">
       <RecipeData recipes={data} />
      <ul>
      <Ingredient recipe={data} />
      </ul>
    </main>
  );
}
