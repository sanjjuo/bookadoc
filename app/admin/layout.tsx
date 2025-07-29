import AdminNavbar from "@/components/Admin/AdminNavbar/AdminNavbar";
import React from "react";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-3 adminAppWidth">
      <AdminNavbar />
      <div>{children}</div>
    </div>
  );
};

export default Adminlayout;
