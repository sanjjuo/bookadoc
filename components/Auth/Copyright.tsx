import React from "react";

const Copyright = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <span className="flex items-center gap-1 text-app-mainText">
        &copy; {new Date().getFullYear()} <p className="font-bold ">bookadoc</p>
      </span>
    </div>
  );
};

export default Copyright;
