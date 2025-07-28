import Image from "next/image";
import React from "react";

const LargeImage = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full h-[calc(100vh-5rem)]">
      <Image
        src={image}
        fill
        quality={100}
        alt="user-info-img"
        className="object-cover"
        priority
      />
    </div>
  );
};

export default LargeImage;
