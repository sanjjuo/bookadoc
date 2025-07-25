"use client";
import React from "react";
import { navLinks } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-10">
      {navLinks.map((item) => (
        <li
          key={item.id}
          className={cn(
            pathname === item.href
              ? "font-bold text-app-primary"
              : "text-app-mainText",
            "first-letter:uppercase "
          )}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
