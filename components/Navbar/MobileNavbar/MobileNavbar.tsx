"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import NavLinks from "../NavLinks/NavLinks";
import AuthBtns from "../AuthBtns/AuthBtns";
import { useUserDetails } from "@/hooks/useUserDetails";

const MobileNavbar = () => {
  const userDetails = useUserDetails();
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight className="w-6 h-6 stroke-app-mainText" />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-0">
        <SheetHeader className="p-5">
          <SheetTitle className="text-app-mainText">MENU</SheetTitle>
        </SheetHeader>
        <div className="flex-1">
          <NavLinks />
        </div>
        <div className="flex items-center gap-2 h-20 bg-app-bgCards p-5">
          <AuthBtns />
          <span className="text-app-mainText capitalize font-bold">
            {userDetails?.loggedInUsername}
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
