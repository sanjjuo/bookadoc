import AdminTable from "@/components/Admin/AdminTable/AdminTable";
import AdminTitle from "@/components/Admin/common/AdminTitle";
import HeaderTitle from "@/components/Admin/HeaderTitle/HeaderTitle";
import OverviewCards from "@/components/Admin/OverviewCards/OverviewCards";
import React from "react";

const AdminDashboardPage = () => {
  return (
    <div className="space-y-10">
      <HeaderTitle />
      <OverviewCards />
      <div className="space-y-5">
        <AdminTitle title="recent appointments" />
        <AdminTable placement="dashboard" />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
