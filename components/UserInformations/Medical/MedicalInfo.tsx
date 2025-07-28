import { UseFormReturn } from "react-hook-form";
import CustomTextarea from "../../common/CustomTextarea/CustomTextarea";
import UserInfoTitle from "../../common/UserInfoTitle/UserInfoTitle";

const MedicalInfo = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <div className="space-y-5">
      <UserInfoTitle title="Medical information" />
      <div className="flex items-center gap-2">
        <div className="w-full">
          <CustomTextarea
            form={form}
            name="allergies"
            label="Allergies (if any)"
            placeholder="ex: Peanuts, Penicillin, Pollen"
          />
        </div>
        <div className="w-full">
          <CustomTextarea
            form={form}
            name="medications"
            label="Current medications"
            placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-full">
          <CustomTextarea
            form={form}
            name="familyMedicalHistory"
            label="Family medical history (if relevant)"
            placeholder="ex: GrandFather had heart attack"
          />
        </div>
        <div className="w-full">
          <CustomTextarea
            form={form}
            name="pastMedicalHistory"
            label="Past medical history"
            placeholder="ex: Asthma diagnosis in childhood"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalInfo;
