import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const SmallImages = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".medical-image-icon",
      { opacity: 0, scale: 0, rotate: 6 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power1.inOut",
        rotate: 12,
      }
    ).fromTo(
      ".medical-image-icon",
      { rotate: 12 },
      {
        ease: "power1.inOut",
        rotate: 45,
        yoyoEase: true,
      }
    );
  }, []);
  return (
    <div>
      <Image
        src="/icons/stethoscope.png"
        width={70}
        height={70}
        quality={100}
        alt="icon"
        className="medical-image-icon absolute top-20 left-32"
      />
      <Image
        src="/icons/notepad.png"
        width={70}
        height={70}
        quality={100}
        alt="icon"
        className="medical-image-icon absolute right-20 top-1/3"
      />
      <Image
        src="/icons/drug.png"
        width={70}
        height={70}
        quality={100}
        alt="icon"
        className="medical-image-icon absolute left-40 bottom-16"
      />
    </div>
  );
};

export default SmallImages;
