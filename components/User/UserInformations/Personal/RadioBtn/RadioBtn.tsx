import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Controller, UseFormReturn } from "react-hook-form";

const RadioBtn = ({ form }: { form: UseFormReturn<any> }) => {
  const { control } = form;

  return (
    <div>
      <Label className="input-label">Gender</Label>
      <Controller
        control={control}
        name="gender"
        render={({ field, fieldState }) => (
          <>
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2 border input-field p-3 w-full">
                <RadioGroupItem value="Male" id="Male" className="w-5 h-5" />
                <Label htmlFor="Male" className="text-app-mainText">
                  Male
                </Label>
              </div>
              <div className="flex items-center space-x-2 border input-field p-3 w-full">
                <RadioGroupItem
                  value="Female"
                  id="Female"
                  className="w-5 h-5"
                />
                <Label htmlFor="Female" className="text-app-mainText">
                  Female
                </Label>
              </div>
              <div className="flex items-center space-x-2 border input-field p-3 w-full">
                <RadioGroupItem value="Other" id="Other" className="w-5 h-5" />
                <Label htmlFor="Other" className="text-app-mainText">
                  Other
                </Label>
              </div>
            </RadioGroup>
            {fieldState.error && (
              <p className="text-xs font-medium text-red-500 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default RadioBtn;
