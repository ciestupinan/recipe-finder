import { Button } from "../@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-[var(--color-neutral-100)] w-full pl-[60px] pr-[60px] pt-[20px] pb-[20px]">
      <div className="flex justify-center gap-[40px]">
      <div>Home</div>
      <div>About</div>
      <div>Recipes</div></div>
    </div>
  );
};

export default Navbar;
