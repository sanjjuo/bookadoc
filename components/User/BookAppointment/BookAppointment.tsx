"use client";
import { useUserDetails } from "@/hooks/useUserDetails";
import { db } from "@/lib/firebase";
import { appointmentSchema } from "@/schema/appointementSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import CustomButton from "../common/CustomButton/CustomButton";
import CustomTextarea from "../common/CustomTextarea/CustomTextarea";
import { DatePicker } from "../common/DatePicker/DatePicker";
import { doctorData } from "./data";
import DoctorDropdown from "./DoctorDropdown/DoctorDropdown";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";

const BookAppointment = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const userDetails = useUserDetails();
  const router = useRouter();
  const form = useForm<AppointmentFormInput>({
    resolver: zodResolver(appointmentSchema),
    mode: "onChange",
    defaultValues: {
      doctor: "",
      reason: "",
      additionalComments: "",
      appointmentDate: undefined,
      status: "pending",
    },
  });

  //   form submission
  const handleAppointmentFormSubmit = async (data: AppointmentFormInput) => {
    setIsLoading(true);
    try {
      const formData = {
        ...data,
        appointmentDate: Timestamp.fromDate(new Date(data.appointmentDate)),
        userId: userDetails?.userId,
        fullName: userDetails?.loggedInUsername ?? "",
        status: "pending",
        createdAt: new Date().toISOString(),
      };
      console.log(formData);
      console.log(data);
      if (!userDetails?.userId) {
        toast.error("User not found");
        return;
      }
      await addDoc(
        collection(db, "users", userDetails.userId, "appointment-of-user"),
        formData
      );
      console.log("Form is submitted", data);
      form.reset();
      setIsLoading(false);

      const selectedDoctor = doctorData.find((doc) => doc.name === data.doctor);
      const query = new URLSearchParams({
        doctorName: selectedDoctor?.name ?? "",
        doctorImage: selectedDoctor?.imageUrl ?? "",
        appointmentDate:
          data.appointmentDate instanceof Date
            ? data.appointmentDate.toISOString()
            : String(data.appointmentDate) || "",
      }).toString();

      router.push(`/appointment-successful?${query}`);
    } catch (error) {
      toast.error("Something wrong");
    }
  };
  return (
    <div className="space-y-10">
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
          <div className="flex flex-col lg:flex-row items-center gap-2">
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
          <div className="flex flex-col lg:flex-row items-center gap-2">
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
