import { Button } from "../../@/components/ui/button";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const menuItems = [
    { title: "Home" },
    { title: "About" },
    { title: "Recipes" },
  ];

  return (
    <div className="bg-[var(--color-neutral-100)] border-b-1 border-[var(--color-neutral-300)] w-full flex justify-between pl-[60px] pr-[60px] pt-[20px] pb-[20px]">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex justify-center items-center gap-[40px]">
        {menuItems.map((item) => (
          <li>
            <h6>{item.title}</h6>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <Button>Browse recipes</Button>
      </div>
    </div>
  );
};

export default Navbar;
