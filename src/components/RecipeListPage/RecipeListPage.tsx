
import { recipes } from "../../assets/recipeData";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import RecipeCard from "./RecipeCard";
import PrepTimeDropdown from "./PrepTimeDropdown";

const RecipeListPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-[var(--spacing-1000)] flex justify-center gap-[var(--spacing-800)] text-center">
        <div className="flex flex-col w-[824px] justify-center items-center mb-[var(--spacing-800)]">
          <h2 className="mb-[var(--spacing-150)]">
            Explore our simple, healthy recipes
          </h2>
          <h5>
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </h5>
        </div>
      </div>
      <PrepTimeDropdown />
      <div className="flex w-full px-[var(--spacing-1600)]">
        <div className="flex w-full flex-wrap gap-[var(--spacing-400)]">
          {recipes?.map((r) => (
            <RecipeCard recipe={r} key={r.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeListPage;
