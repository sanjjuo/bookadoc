import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";

const CustomInput = ({
  form,
  name,
  type,
  label,
  placeholder,
}: {
  form: UseFormReturn<any>;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="input-label">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="input-field"
              type={type}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
