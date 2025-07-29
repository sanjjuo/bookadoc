import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const DoctorDropdown = ({
  value,
  label,
  onChange,
  data,
}: DoctorDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="select-field">
        {value || "Select a Doctor"}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-96 h-80 scrollbar-hide">
        <DropdownMenuLabel className="!text-sm text-app-mainText">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.map((item, index) => (
          <DropdownMenuItem
            className="text-xs text-app-mainText flex items-center justify-between"
            key={index}
            onClick={() => onChange(item.name)}
          >
            <div className="flex items-center gap-2">
              <Image
                src={item.imageUrl}
                width={30}
                height={30}
                alt="doctor-image"
              />
              <span className="text-app-mainText font-medium">{item.name}</span>
            </div>
            <span className="text-app-mainText text-xs">
              {item.specialization}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DoctorDropdown;
