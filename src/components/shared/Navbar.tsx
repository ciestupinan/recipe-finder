import { Popover } from "radix-ui";
import { Button } from "../../../@/components/ui/button";
import Logo from "../../assets/images/logo.svg";
import { Link, NavLink, useNavigate } from "react-router";
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_RECIPES } from "../../constants";

const MENU_ITEMS = [
  { title: "Home", route: ROUTE_HOME },
  { title: "About", route: ROUTE_ABOUT },
  { title: "Recipes", route: ROUTE_RECIPES },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[var(--color-neutral-100)] border-b-1 border-[var(--color-neutral-300)] w-full flex justify-between lg:px-(--spacing-800) lg:py-(--spacing-250) p-(--spacing-400)">
        <div className="flex items-center">
          <Link to={ROUTE_HOME}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex justify-center items-center gap-[40px] hidden lg:flex">
          {MENU_ITEMS.map((item) => (
            <li key={item.title}>
              <h6>
                <NavLink to={item.route}>{item.title}</NavLink>
              </h6>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <div className="flex items-center">
            <Button
              onClick={() => {
                navigate(ROUTE_RECIPES);
              }}
            >
              Browse recipes
            </Button>
          </div>
        </div>
        <div className="lg:hidden sm:flex">
          <Popover.Root>
            <Popover.Trigger className="PopoverTrigger">
              <div className="flex bg-[var(--color-neutral-200)] rounded-md w-[40px] h-[40px] justify-center items-center">
                <img
                  className="flex w-[18px]"
                  src="src/assets/images/icon-hamburger-menu.svg"
                  alt="menu"
                />
              </div>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                className="PopoverContent"
                sideOffset={5}
                align="end"
              >
                <div className="flex flex-col bg-[var(--color-neutral-100)] rounded-md w-[325px] p-[var(--spacing-100)] border-1 border-[var(--color-neutral-300)] shadow-2xl">
                  <ul className="flex flex-col gap-[var(--spacing-150)]">
                    {MENU_ITEMS.map((item) => (
                      <li>
                        <h6>{item.title}</h6>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center mt-[var(--spacing-150)]">
                    <Button className="w-full">Browse recipes</Button>
                  </div>
                </div>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
    </>
  );
};

export default Navbar;
