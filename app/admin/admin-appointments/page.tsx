import AdminTable from "@/components/Admin/AdminTable/AdminTable";
import AdminTitle from "@/components/Admin/common/AdminTitle";
import React from "react";

const AppointmentPage = () => {
  return (
    <div className="space-y-5">
      <AdminTitle title="patients appointments" />
      <AdminTable placement="appointments" />
    </div>
  );
};

export default AppointmentPage;
