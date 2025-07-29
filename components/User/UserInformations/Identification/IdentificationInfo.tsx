import { Controller, UseFormReturn } from "react-hook-form";
import CustomInput from "../../common/CustomInput/CustomInput";
import UserInfoTitle from "../../common/UserInfoTitle/UserInfoTitle";
import { identificationData } from "./data";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import IdentificationDropdown from "./IdentificationDropdown/IdentificationDropdown";

const IdentificationInfo = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <div className="space-y-5">
      <UserInfoTitle title="Identification and verification" />
      <div className="flex items-end gap-2">
        <div className="w-full">
          <Controller
            control={form.control}
            name="idType"
            render={({ field, fieldState }) => (
              <FormItem className="flex flex-col !space-y-1">
                <FormLabel className="input-label">
                  Identification Type
                </FormLabel>
                <FormControl>
                  <IdentificationDropdown
                    label="Choose ID Type"
                    value={field.value}
                    onChange={field.onChange}
                    data={identificationData}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-xs text-red-500 font-medium">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <CustomInput
            form={form}
            name="idNumber"
            type="text"
            label="Identification Number"
            placeholder="Enter your Identification number"
          />
        </div>
      </div>
    </div>
  );
};

export default IdentificationInfo;
