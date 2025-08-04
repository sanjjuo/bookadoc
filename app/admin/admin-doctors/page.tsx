import AddDoctors from "@/components/Admin/AdminDoctors/AddDoctors";
import DoctorCards from "@/components/Admin/AdminDoctors/DoctorCards";
import AdminTitle from "@/components/Admin/common/AdminTitle";

const AdminDoctorsPage = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center">
        <AdminTitle title="Doctors" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <AddDoctors />
        </div>
        <div className="col-span-3">
          <div className="h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
            <DoctorCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDoctorsPage;
