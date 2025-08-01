import React from "react";
import Logo from "../../User/common/Logo/Logo";
import AdminProfile from "./AdminProfile";

const AdminNavbar = () => {
  return (
    <div className="adminAppWidth flex items-center justify-end">
      <AdminProfile />
    </div>
  );
};

export default AdminNavbar;
