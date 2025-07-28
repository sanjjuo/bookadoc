import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { UseFormReturn } from "react-hook-form";

const CustomTextarea = ({
  form,
  name,
  label,
  placeholder,
}: {
  form: UseFormReturn<any>;
  name: string;
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
            <Textarea
              placeholder={placeholder}
              {...field}
              className="input-field !h-20"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
