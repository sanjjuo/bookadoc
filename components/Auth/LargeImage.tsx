import Image from "next/image";
import React from "react";

const LargeImage = () => {
  return (
    <div className="relative md:w-full md:h-screen">
      <Image
        src="/images/welcome-img.png"
        fill
        quality={100}
        alt="welcome-img"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LargeImage;
