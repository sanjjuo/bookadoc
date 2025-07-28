"use client";
import { useUserDetails } from "@/hooks/useUserDetails";
import { appointmentSchema } from "@/schema/appointementSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../common/CustomButton/CustomButton";
import CustomTextarea from "../common/CustomTextarea/CustomTextarea";
import { DatePicker } from "../common/DatePicker/DatePicker";
import { Form, FormControl, FormItem, FormLabel } from "../ui/form";
import { doctorData } from "./data";
import DoctorDropdown from "./DoctorDropdown/DoctorDropdown";
import { toast } from "sonner";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import React from "react";

const BookAppointment = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const userDetails = useUserDetails();
  const form = useForm({
    resolver: zodResolver(appointmentSchema),
    mode: "onChange",
    defaultValues: {
      doctor: "",
      reason: "",
      additionalComments: "",
      appointmentDate: undefined,
    },
  });

  //   form submission
  const handleAppointmentFormSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const formData = {
        ...data,
        userId: userDetails?.userId,
        fullName: userDetails?.loggedInUsername,
      };
      console.log(formData);
      if (!userDetails?.userId) {
        toast.error("User not found");
        return;
      }
      await addDoc(
        collection(db, "users", userDetails.userId, "appointment-of-user"),
        formData
      );
      console.log("Form is submitted", data);
      toast.success("Form is submitted");
      form.reset();
      setIsLoading(false);
    } catch (error) {
      toast.error("Something wrong");
    }
  };
  return (
    <div className="space-y-10 appWidth appPadding">
      <div>
        <h1 className="text-4xl font-bold text-app-mainText">
          Hello{" "}
          <span className="text-app-primary capitalize">
            {userDetails?.loggedInUsername},
          </span>
        </h1>
        <p className="text-sm text-app-subText">Request a new appointment</p>
      </div>
      <Form {...form}>
        <form
          action=""
          className="space-y-5"
          onSubmit={form.handleSubmit(handleAppointmentFormSubmit)}
        >
          <div className="flex items-center gap-2">
            <div className="w-full">
              <Controller
                control={form.control}
                name="doctor"
                render={({ field, fieldState }) => (
                  <FormItem className="flex flex-col !space-y-1">
                    <FormLabel className="input-label">Doctor</FormLabel>
                    <FormControl>
                      <DoctorDropdown
                        label="Select a Doctor"
                        value={field.value}
                        onChange={field.onChange}
                        data={doctorData}
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
              <DatePicker
                form={form}
                label="Expected Appointment date"
                placeholder="Select your appointment date"
                name="appointmentDate"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full">
              <CustomTextarea
                form={form}
                name="reason"
                label="Reason for appointment"
                placeholder="ex: Annual monthly check-up"
              />
            </div>
            <div className="w-full">
              <CustomTextarea
                form={form}
                name="additionalComments"
                label="Additional comments/notes"
                placeholder="ex: Prefer afternoon appointments, if possible"
              />
            </div>
          </div>
          <CustomButton
            isLoading={isLoading}
            isDisabled={!form.formState.isValid || isLoading}
          />
        </form>
      </Form>
    </div>
  );
};

export default BookAppointment;
