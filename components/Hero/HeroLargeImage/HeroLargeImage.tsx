"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroLargeImage = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#doctor-img",
      { opacity: 0, xPercent: 100 },
      { opacity: 1, xPercent: -10, duration: 1, ease: "power2.inOut" }
    );

    const docterImageTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-image-section",
        start: "top top",
        endTrigger: "#cards-section",
        end: "bottom 100%",
        scrub: true,
      },
    });
    docterImageTl.fromTo(
      "#doctor-img",
      { y: 0, scale: 1 },
      {
        y: 400,
        ease: "circ.inOut",
        scale: 0.9,
      }
    );
  }, []);

  return (
    <div id="hero-image-section">
      <div className="relative md:w-full md:h-[calc(100vh-5rem)] rounded-bl-full">
        <Image
          src="/images/doctor-room.jpg"
          fill
          quality={100}
          className="hidden md:block object-cover rounded-bl-[80%] rounded-br-[25%] rounded-tl-[30%]"
          alt="large-img"
        />
        <Image
          src="/images/doctor.png"
          id="doctor-img"
          width={700}
          height={400}
          quality={100}
          className="hidden md:block object-cover absolute inset-0 z-30"
          alt="doctor-img"
        />
      </div>
    </div>
  );
};

export default HeroLargeImage;
