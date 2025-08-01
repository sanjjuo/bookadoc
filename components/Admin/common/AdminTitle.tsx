import React from "react";

const AdminTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-3xl font-bold capitalize text-app-mainText">{title}</h1>
  );
};

export default AdminTitle;
