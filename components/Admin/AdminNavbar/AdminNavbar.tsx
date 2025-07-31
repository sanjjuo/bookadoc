import React from "react";
import Logo from "../../User/common/Logo/Logo";
import AdminProfile from "./AdminProfile";

const AdminNavbar = () => {
  return (
    <div className="adminAppWidth flex items-center justify-between">
      <Logo placement="admin" />
      <AdminProfile />
    </div>
  );
};

export default AdminNavbar;
