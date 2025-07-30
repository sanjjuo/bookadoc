import AdminNavbar from "@/components/Admin/AdminNavbar/AdminNavbar";
import React from "react";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="sticky top-0 w-full z-50 p-5 bg-gray-100 shadow-md">
        <AdminNavbar />
      </div>
      <div className="adminAppWidth">{children}</div>
    </div>
  );
};

export default Adminlayout;
