"use client";
import { Form } from "@/components/ui/form";
import CustomButton from "../common/CustomButton/CustomButton";
import { useHandleUserInfoFunction } from "./Functions/handleUserInfoFunctions";
import IdentificationInfo from "./Identification/IdentificationInfo";
import MedicalInfo from "./Medical/MedicalInfo";
import PersonalInfo from "./Personal/PersonalInfo";

const UserInformationsForm = () => {
  const { handleUserInfoFormSubmit, userDetails, form, isLoading } =
    useHandleUserInfoFunction();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-app-mainText">
          Welcome{" "}
          <span className="text-app-primary capitalize">
            {userDetails?.loggedInUsername},
          </span>
        </h1>
        <p className="text-sm text-app-subText">
          Let us know more about yourself
        </p>
      </div>
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(handleUserInfoFormSubmit)}
          className="space-y-8"
        >
          <PersonalInfo form={form} />
          <MedicalInfo form={form} />
          <IdentificationInfo form={form} />
          <CustomButton
            isLoading={isLoading}
            isDisabled={!form.formState.isValid || isLoading}
          />
        </form>
      </Form>
    </div>
  );
};

export default UserInformationsForm;
