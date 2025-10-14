import { Button } from "../../@/components/ui/button";

const Homepage = () => {
  return (
    <div className="bg-[var(--color-neutral-100)] w-full flex flex-col justify-center text-center">
      <div className="mb-[var(--spacing-150)] mt-[var(--spacing-1000)]">
        <h1>Healthy meals, zero fuss</h1>
      </div>
      <div className="flex justify-center mb-[var(--spacing-500)]">
        <div className="w-[580px]">
          <h5>
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </h5>
        </div>
      </div>
      <div className="flex justify-center mb-[var(--spacing-1000)]">
        <Button className="w-fit">Start exploring</Button>
      </div>
      <div className="flex justify-center items-center mb-[var(--spacing-1200)]">
        <div className="w-[1192px] border-[12px] rounded-xl border-[var(--color-neutral-0)]">
          <img
            className="rounded-xl"
            src="src/assets/images/image-home-hero-large.webp"
          />
        </div>
      </div>
      <div className="mb-[var(--spacing-600)]">
        <h2>What you'll get</h2>
      </div>
      <div className="flex justify-center gap-[var(--spacing-400)] text-left mb-[var(--spacing-1200)]">
        <div className="flex flex-col w-[376px]">
          <div className="flex bg-[var(--color-neutral-0)] w-[60px] h-[60px] rounded-xl justify-center items-center mb-[var(--spacing-300)]">
            <img src="src/assets/images/icon-whole-food-recipes.svg" />
          </div>
          <h3 className="mb-[var(--spacing-150)]">Whole-food recipes</h3>
          <h5>Each dish uses everyday, unprocessed ingredients.</h5>
        </div>
        <div className="flex flex-col w-[376px]">
          <div className="flex bg-[var(--color-neutral-0)] w-[60px] h-[60px] rounded-xl justify-center items-center mb-[var(--spacing-300)]">
            <img src="src/assets/images/icon-minimum-fuss.svg" />
          </div>
          <h3 className="mb-[var(--spacing-150)]">Minimum fuss</h3>
          <h5>
            All recipes are designed to make eating healthy quick and easy.
          </h5>
        </div>
        <div className="flex flex-col w-[376px]">
          <div className="flex bg-[var(--color-neutral-0)] w-[60px] h-[60px] rounded-xl justify-center items-center mb-[var(--spacing-300)]">
            <img src="src/assets/images/icon-search-in-seconds.svg" />
          </div>
          <h3 className="mb-[var(--spacing-150)]">Search in seconds</h3>
          <h5>
            Filter by name or ingredient and jump straight to the recipe you
            need.
          </h5>
        </div>
      </div>
      <div className="flex justify-center mt-[var(--spacing-1200)] mb-[var(--spacing-1200)] text-left">
        <div className="flex w-[1192px] gap-[var(--spacing-600)]">
          <div className="flex flex-col justify-center">
            <h2>Built for real life</h2>
            <h5 className="mt-[var(--spacing-250)]">
              Cooking shouldn’t be complicated. These recipes come in under 30
              minutes of active time, fit busy schedules, and taste good enough
              to repeat.
            </h5>
            <h5 className="mt-[var(--spacing-250)]">
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </h5>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="src/assets/images/image-home-real-life-large.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
