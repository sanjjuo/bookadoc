"use client";
import React from "react";
import { navLinks } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-row items-center justify-center md:justify-start h-[calc(100vh-20rem)] gap-5 lg:gap-10">
      {navLinks.map((item) => (
        <li
          key={item.id}
          className={cn(
            pathname === item.href
              ? "font-bold text-app-primary"
              : "text-app-mainText",
            "first-letter:uppercase text-sm lg:text-base"
          )}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
