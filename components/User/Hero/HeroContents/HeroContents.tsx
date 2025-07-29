"use client";
import { Button } from "@/components/ui/button";
import { useUserDetails } from "@/hooks/useUserDetails";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import HeroIcons from "../HeroIcons/HeroIcons";

const HeroContents = () => {
  const userExits = useUserDetails();
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
      {userExits?.isUserExits ? (
        <Link href="/user-information">
          <Button className="rounded-full h-12 px-5 bg-app-primary hover:bg-app-lightPrimary mt-10">
            Let us know more about yourself
          </Button>
        </Link>
      ) : (
        <Link
          href="/login"
          className="text-app-primary text-sm font-medium mt-5 flex items-center gap-1"
        >
          Let’s get to know you — log in to continue{" "}
          <ChevronsRight className="w-5 h-5 animate-pulse" />
        </Link>
      )}
    </div>
  );
};

export default HeroContents;
