import React from "react";
import Logo from "../../User/common/Logo/Logo";

const AdminNavbar = () => {
  return (
    <div className="adminAppWidth flex items-center justify-between">
      <Logo placement="admin" />
      <p className="text-app-mainText">Admin</p>
    </div>
  );
};

export default AdminNavbar;
