"use client";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/appointment-successful"];
  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );
  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <div className="appPadding">{children}</div>
    </div>
  );
};

export default HomeLayout;
