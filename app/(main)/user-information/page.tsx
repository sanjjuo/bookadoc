import LargeImage from "@/components/common/LargeImage/LargeImage";
import UserInformationsForm from "@/components/UserInformations/UserInformationsForm";

const UserInformationPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-full gap-10 appWidth">
      <div className="col-span-3 overflow-y-auto h-[calc(100vh-5rem)] scrollbar-hide">
        <UserInformationsForm />
      </div>
      <div className="col-span-2 overflow-hidden">
        <LargeImage image="/images/user-info-img.jpg" />
      </div>
    </div>
  );
};

export default UserInformationPage;
