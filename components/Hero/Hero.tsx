import React from "react";
import HeroLargeImage from "./HeroLargeImage/HeroLargeImage";
import HeroContents from "./HeroContents/HeroContents";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-2">
        <HeroContents />
      </div>
      <div className="col-span-3">
        <HeroLargeImage />
      </div>
    </div>
  );
};

export default Hero;
