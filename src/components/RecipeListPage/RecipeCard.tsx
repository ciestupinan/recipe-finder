import { Button } from "../../../@/components/ui/button";
import type { Recipe } from "../../assets/recipeData";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <div className="w-[376px] bg-[var(--color-white)] p-[8px] rounded-md">
      <img
        className="rounded-md w-[360px] mb-[var(--spacing-200)]"
        src={recipe.img.small}
      />
      <h5 className="line-clamp-1 mb-[var(--spacing-125)]">{recipe.title}</h5>
      <p className="line-clamp-2 mb-[var(--spacing-200)]">
        {recipe.description}
      </p>
      <div className="flex gap-[var(--spacing-200)] mb-[var(--spacing-100)]">
        <div className="flex">
          <img
            className="mr-[var(--spacing-075)]"
            src="src/assets/images/icon-servings.svg"
            alt="Servings"
          />
          <p>Servings: {recipe.servings}</p>
        </div>
        <div className="flex">
          <img
            className="mr-[var(--spacing-075)]"
            src="src/assets/images/icon-prep-time.svg"
            alt="Prep Time"
          />
          <p>
            Prep: {recipe.prepTime} {recipe.prepTime > 1 ? "mins" : "min"}
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          className="mr-[var(--spacing-075)]"
          src="src/assets/images/icon-cook-time.svg"
          alt="Cook Time"
        />
        <p>
          Cook: {recipe.cookTime} {recipe.cookTime > 1 ? "mins" : "min"}
        </p>
      </div>
      <Button className="mt-[var(--spacing-200)] w-full rounded-full">
        View Recipe
      </Button>
    </div>
  );
};

export default RecipeCard;
