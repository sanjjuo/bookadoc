import AdminTable from "@/components/Admin/AdminTable/AdminTable";
import HeaderTitle from "@/components/Admin/HeaderTitle/HeaderTitle";
import OverviewCards from "@/components/Admin/OverviewCards/OverviewCards";

const AdminPage = () => {
  return (
    <div className="appPadding space-y-10">
      <HeaderTitle />
      <OverviewCards />
      <AdminTable />
    </div>
  );
};

export default AdminPage;
