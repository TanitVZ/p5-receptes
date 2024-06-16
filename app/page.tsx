import RecipeData from "@/components/RecipeData";
import data from "@/receptes.json"

export default function Home() {
  return (
    <main className="p-8">
      <h1>Paella Valenciana</h1>
      <ul>
     <RecipeData recipes={data} />
      </ul>
    </main>
  );
}
