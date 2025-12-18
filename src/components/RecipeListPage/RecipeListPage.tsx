import { recipes } from "../../assets/recipeData";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import RecipeCard from "./RecipeCard";

const RecipeListPage = () => {

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-wrap px-[var(--spacing-1600)] gap-[var(--spacing-400)]">
      {recipes?.map(r => (
        <RecipeCard recipe={r} key={r.id}/>
      ))}
      </div>
      <Footer />
    </>
  );
};

export default RecipeListPage;
