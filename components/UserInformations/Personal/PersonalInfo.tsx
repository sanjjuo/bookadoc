"use client";
import { UseFormReturn } from "react-hook-form";
import CustomInput from "../../common/CustomInput/CustomInput";
import CustomTextarea from "../../common/CustomTextarea/CustomTextarea";
import { DatePicker } from "../../common/DatePicker/DatePicker";
import RadioBtn from "./RadioBtn/RadioBtn";
import UserInfoTitle from "../../common/UserInfoTitle/UserInfoTitle";

const PersonalInfo = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <div className="space-y-5">
      <UserInfoTitle title="Personal information" />
      <div className="flex items-center gap-2">
        <div className="w-full">
          <CustomInput
            form={form}
            name="phoneNumber"
            type="text"
            label="Phone Number"
            placeholder="Enter your number"
          />
        </div>
        <div className="w-full">
          <RadioBtn form={form} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-full">
          <DatePicker
            form={form}
            label="DOB"
            placeholder="DD/MM/YYYY"
            name="dateOfBirth"
          />
        </div>
        <div className="w-full">
          <CustomInput
            form={form}
            name="occupation"
            type="text"
            label="Occupation"
            placeholder="Enter your occupation"
          />
        </div>
      </div>
      <div>
        <CustomTextarea
          form={form}
          name="address"
          label="Address"
          placeholder="Enter your address"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
