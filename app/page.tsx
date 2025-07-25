"use client";
import LogoIcon from "@/components/svg/LogoIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const WelcomeAppLogoPage = () => {
  const router = useRouter();

  useGSAP(() => {
    const letterTimeline = gsap.timeline({
      onComplete: () => router.push("/home"),
    });

    letterTimeline
      .fromTo(
        "#logo-icon",
        { xPercent: -500 },
        { xPercent: 0, duration: 1.5, ease: "bounce.inOut" }
      )
      .fromTo(
        "#b",
        { opacity: 0, xPercent: 100 },
        { opacity: 1, xPercent: 0, duration: 0.29, ease: "power1.inOut" }
      )
      .fromTo("#o1", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.1 })
      .fromTo(
        "#o2",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.13 }
      )
      .fromTo(
        "#k",
        { opacity: 0, rotate: 180 },
        { opacity: 1, rotate: 0, duration: 0.15 }
      )
      .fromTo("#a", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.17 })
      .fromTo(
        "#d",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.19 }
      )
      .fromTo(
        "#o3",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.19 }
      )
      .fromTo(
        "#c",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.19 }
      );
  });

  return (
    <div className="bg-app-primary h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
      <div className="flex justify-center items-center">
        <ul className="flex items-center justify-center gap-2 text-[220px] font-bold relative">
          <li id="logo-icon" className="relative">
            <LogoIcon className="w-44 h-44 fill-app-lightPrimary" />
          </li>
          <li id="b">b</li>
          <li id="o1">o</li>
          <li id="o2">o</li>
          <li id="k">k</li>
          <li id="a">a</li>
          <li id="d">d</li>
          <li id="o3">o</li>
          <li id="c">c</li>
        </ul>
      </div>
      <p className="text-lg mt-10">
        &copy; {new Date().getFullYear()} bookadoc & CO.LLC
      </p>
    </div>
  );
};

export default WelcomeAppLogoPage;
