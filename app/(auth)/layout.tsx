"use client";
import Copyright from "@/components/Auth/Copyright";
import Headings from "@/components/Auth/Headings";
import LargeImage from "@/components/Auth/LargeImage";
import SmallImages from "@/components/Auth/SmallImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    gsap.fromTo(
      "#left-side",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      "#right-side",
      { opacity: 0, xPercent: 100 },
      { opacity: 1, xPercent: 0, duration: 0.6, ease: "power1.inOut" }
    );
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div id="left-side">
        <div className="relative">
          <div className="flex flex-col items-center justify-center h-screen w-[500px] mx-auto">
            <Headings />
            <div className="mt-5">{children}</div>
            <Copyright />
          </div>
          <SmallImages />
        </div>
      </div>
      <div id="right-side">
        <LargeImage />
      </div>
    </div>
  );
};

export default AuthLayout;
