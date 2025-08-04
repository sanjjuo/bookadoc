"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "@/components/User/common/CustomInput/CustomInput";
import CustomTextarea from "@/components/User/common/CustomTextarea/CustomTextarea";
import RadioBtn from "@/components/User/UserInformations/Personal/RadioBtn/RadioBtn";
import { useAdminAddDoctorSchema } from "@/schema/adminAddDoctorSchema";
import { useFetchDepartments } from "@/services/useAdminDepartments";
import { useAdminAddDoctors } from "@/services/useAdminDoctors";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddDoctors = () => {
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);

  const { mutate } = useAdminAddDoctors();
  const { data } = useFetchDepartments();

  // const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const image = e.target?.files?.[0];
  //   if (image) {
  //     setPreviewImage(URL.createObjectURL(image));
  //     form.setValue("image", image);
  //   }
  // };
  const form = useForm({
    resolver: zodResolver(useAdminAddDoctorSchema),
    defaultValues: {
      doctor: "",
      about: "",
      age: "",
      experience: "",
      gender: undefined,
      higherEducation: "",
      specialization: "",
      email: "",
    },
  });

  const handleAddDoctor = async (data: DoctorType) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("New Doctor is added");
        form.reset();
        setPreviewImage(null);
      },
      onError: (error) => {
        toast.error(`"something went wrong", ${error}`);
      },
    });
  };

  return (
    <Card className="space-y-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-app-mainText">
          Add Doctor
        </CardTitle>
        <CardDescription>
          Add a new doctor by providing their name and related details. This
          will be available across the platform.
        </CardDescription>
      </CardHeader>
      <CardContent className="!mt-0">
        <Form {...form}>
          <form
            action=""
            onSubmit={form.handleSubmit(handleAddDoctor)}
            className="space-y-4"
          >
            {/* <div className="flex items-end gap-2">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onBlur, name, ref } }) => (
                    <FormItem>
                      <FormLabel className="input-label">
                        Doctor Image
                      </FormLabel>
                      <FormControl>
                        <Input
                          name={name}
                          onBlur={onBlur}
                          ref={ref}
                          type="file"
                          onChange={handleImage}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="h-24 border w-1/3 rounded-lg p-1">
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div> */}
            <CustomInput
              form={form}
              name="doctor"
              type="text"
              label="Doctor Name"
              placeholder="Enter doctor name"
            />
            <CustomInput
              form={form}
              name="email"
              type="email"
              label="Doctor Email"
              placeholder="Enter doctor email"
            />
            <CustomInput
              form={form}
              name="age"
              type="text"
              label="Doctor age"
              placeholder="Enter doctor age"
            />
            <RadioBtn form={form} />
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="input-label">Specialization</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full focus:!ring-0 shadow-none">
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.isArray(data) &&
                          data?.map((item: DepartmentType, index) => (
                            <SelectItem
                              key={index}
                              value={item?.id ?? ""}
                              className="text-app-mainText text-xs"
                            >
                              {item?.departmentName}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomInput
              form={form}
              name="experience"
              type="text"
              placeholder="Enter experience"
              label="Enter experience"
            />
            <CustomInput
              form={form}
              name="higherEducation"
              type="text"
              placeholder="Enter higher education"
              label="Enter higher education"
            />
            <CustomTextarea
              form={form}
              name="about"
              placeholder="About yourself"
              label="Enter Doctor description"
            />
            <Button type="submit" className="app-btn">
              Add Department
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddDoctors;
