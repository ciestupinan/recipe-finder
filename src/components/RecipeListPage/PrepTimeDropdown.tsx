import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu";

const PrepTimeDropdown = () => {
  const [prepChecked, setPrepChecked] = useState<number[]>([]);

  return (
    <div className="flex w-full px-[var(--spacing-1600)]">
      <DropdownMenu>
        <DropdownMenuTrigger>
          Max Prep Time
          <img
            src="src/assets/images/icon-chevron-down.svg"
            alt="Chevron Down"
            className="ml-[var(--spacing-075)]"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={prepChecked.includes(0)}
            onCheckedChange={() => {
              if (prepChecked.includes(0)) {
                const filtered = prepChecked.filter((x) => x !== 0);
                setPrepChecked([...filtered]);
              } else {
                setPrepChecked((prev) => [...prev, 0]);
              }
            }}
          >
            0 minutes
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={prepChecked.includes(5)}
            onCheckedChange={() => {
              if (prepChecked.includes(5)) {
                const filtered = prepChecked.filter((x) => x !== 5);
                setPrepChecked([...filtered]);
              } else {
                setPrepChecked((prev) => [...prev, 5]);
              }
            }}
          >
            5 minutes
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={prepChecked.includes(10)}
            onCheckedChange={() => {
              if (prepChecked.includes(10)) {
                const filtered = prepChecked.filter((x) => x !== 10);
                setPrepChecked([...filtered]);
              } else {
                setPrepChecked((prev) => [...prev, 10]);
              }
            }}
          >
            10 minutes
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PrepTimeDropdown;
