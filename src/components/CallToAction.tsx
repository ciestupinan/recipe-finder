import { Button } from "../../@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-[var(--color-neutral-100)] w-full flex flex-col justify-center text-center">
      <div className="flex justify-center">
        <div className="flex bg-[var(--color-neutral-200)] w-[1192px] pt-[var(--spacing-1200)] pb-[var(--spacing-1200)] rounded-xl relative justify-center overflow-hidden z-8">
          <img
            className="absolute -bottom-14 -left-14 z-5"
            src="src/assets/images/pattern-fork.svg"
            alt="fork"
          />
          <img
            className="absolute top-5 -right-20 z-5"
            src="src/assets/images/pattern-knife.svg"
            alt="knife"
          />
          <div className="flex flex-col">
            <h2 className="mb-[var(--spacing-150)]">Ready to cook smarter?</h2>
            <h5 className="mb-[var(--spacing-500)]">
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </h5>
            <div className="flex justify-center">
              <Button className="w-fit">Browse recipes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
