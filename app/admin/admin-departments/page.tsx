import AddDepartment from "@/components/Admin/AdminDepartments/AddDepartment";
import DepartmentsCard from "@/components/Admin/AdminDepartments/DepartmentsCards";
import React from "react";

const AdminDepartmentsPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="col-span-2">
        <AddDepartment />
      </div>
      <div className="col-span-3">
        <div className="h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
          <DepartmentsCard />
        </div>
      </div>
    </div>
  );
};

export default AdminDepartmentsPage;
