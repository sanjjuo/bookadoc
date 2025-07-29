import React from "react";
import Cards from "./Cards";

const Cards_Section = () => {
  return (
    <div
      id="cards-section"
      className="grid grid-cols-1 lg:grid-cols-3 gap-5 appWidth"
    >
      <Cards />
    </div>
  );
};

export default Cards_Section;
