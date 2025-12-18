import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu";

const COOKTIMES = [0, 5, 10, 15, 20];

const CookTimeDropdown = () => {
  const [cookChecked, setCookChecked] = useState<number[]>([]);

  return (
    <div className="flex w-full px-[var(--spacing-1600)]">
      <DropdownMenu>
        <DropdownMenuTrigger>
          Max Cook Time
          <img
            src="src/assets/images/icon-chevron-down.svg"
            alt="Chevron Down"
            className="ml-[var(--spacing-075)]"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {COOKTIMES.map((c) => (
            <DropdownMenuCheckboxItem
              checked={cookChecked.includes(c)}
              onCheckedChange={() => {
                if (cookChecked.includes(c)) {
                  const filtered = cookChecked.filter((x) => x !== c);
                  setCookChecked([...filtered]);
                } else {
                  setCookChecked((prev) => [...prev, c]);
                }
              }}
            >
              {c} minutes
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CookTimeDropdown;
