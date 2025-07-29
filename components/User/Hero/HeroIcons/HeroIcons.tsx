"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { heroIcons } from "./data";

const HeroIcons = () => {
  const iconListRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const icons = gsap.utils.toArray(".hero-icon");

    gsap.fromTo(
      icons,
      { opacity: 0, xPercent: -1500 },
      {
        opacity: 1,
        xPercent: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "bounce.Out(1.7)",
      }
    );
  }, []);

  return (
    <ul ref={iconListRef} className="flex items-center gap-3 mt-5">
      {heroIcons.map((item) => (
        <li
          key={item.id}
          className="hero-icon bg-app-lightPrimary/50 rounded-full w-16 h-16 p-2 flex items-center justify-center hover:scale-105 duration-500"
        >
          {item.icon}
        </li>
      ))}
    </ul>
  );
};

export default HeroIcons;
