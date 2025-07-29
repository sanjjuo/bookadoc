import React from "react";
import Logo from "../../User/common/Logo/Logo";

const AdminNavbar = () => {
  return (
    <div className="sticky top-3 w-full z-50 flex items-center justify-between px-10 h-20 bg-gray-200 rounded-xl">
      <Logo placement="admin" />
      <p className="text-app-mainText">Admin</p>
    </div>
  );
};

export default AdminNavbar;
