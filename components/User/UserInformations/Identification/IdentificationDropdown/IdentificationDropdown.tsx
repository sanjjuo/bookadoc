import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const IdentificationDropdown = ({
  value,
  label,
  onChange,
  data,
}: IdentificationDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="select-field">
        {value || "Select ID Type"}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80">
        <DropdownMenuLabel className="!text-sm text-app-mainText">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.map((item, index) => (
          <DropdownMenuItem
            className="text-xs text-app-mainText"
            key={index}
            onClick={() => onChange(item.label)}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default IdentificationDropdown;
