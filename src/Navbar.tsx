import { Button } from "../@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-[var(--color-neutral-100)] w-full flex justify-between pl-[60px] pr-[60px] pt-[20px] pb-[20px]">
      <div className="flex items-center">Healthy Recipe Finder</div>
      <div className="flex justify-center items-center gap-[40px]">
        <div>Home</div>
        <div>About</div>
        <div>Recipes</div>
      </div>
      <div className="flex items-center">
        <Button>Browse recipes</Button>
      </div>
    </div>
  );
};

export default Navbar;
