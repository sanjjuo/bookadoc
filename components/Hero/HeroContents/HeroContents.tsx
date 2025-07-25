"use client";
import React from "react";
import HeroIcons from "../HeroIcons/HeroIcons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroContents = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#hero-title",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "back.inOut" }
    );
  }, []);
  return (
    <div className="flex flex-col items-start justify-center h-[calc(100vh-5rem)] max-w-xl appWidth">
      <h1
        id="hero-title"
        className="first-letter:uppercase text-6xl font-bold text-app-mainText mb-2"
      >
        professional family health care
      </h1>
      <p className="text-app-subText">Your healthcare management system</p>
      <HeroIcons />
    </div>
  );
};

export default HeroContents;
