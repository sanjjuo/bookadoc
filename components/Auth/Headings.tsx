import React from "react";

const Headings = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">Hi there 👋</h1>
      <div className="flex items-end gap-2">
        <span className="text-app-mainText flex items-end gap-1">
          Welcome to <span className="font-bold">bookadoc</span>— your personal
          healthcare assistant.
        </span>
      </div>
    </div>
  );
};

export default Headings;
