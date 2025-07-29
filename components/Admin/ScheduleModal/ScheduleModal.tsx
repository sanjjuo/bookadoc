"use client";
import DoctorDropdown from "@/components/User/BookAppointment/DoctorDropdown/DoctorDropdown";
import { doctorData } from "@/components/User/BookAppointment/data";
import CustomTextarea from "@/components/User/common/CustomTextarea/CustomTextarea";
import { DatePicker } from "@/components/User/common/DatePicker/DatePicker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const ScheduleModal = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm();
  //   form submission
  const handleScheduleAppointmentByAdmin = (data: any) => {
    console.log("form is submitted", data);
  };
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button className="bg-green-300 hover:bg-green-300/40 text-green-900 rounded-full text-xs font-medium">
          Schedule
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Schedule Appointment
          </DialogTitle>
          <DialogDescription className="!mt-0">
            Please fill in the following details to schedule
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            action=""
            onSubmit={form.handleSubmit(handleScheduleAppointmentByAdmin)}
            className="space-y-5"
          >
            <Controller
              control={form.control}
              name="adminDoctor"
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
            <CustomTextarea
              form={form}
              name="adminReasonAppointment"
              label="Reason for appointment"
              placeholder="ex: Annual monthly check-up"
            />
            <DatePicker
              form={form}
              label="Expected appointment date"
              placeholder="Select your appointment date"
              name="adminExpectedAppointmentDate"
            />
            <Button
              disabled={isLoading}
              className="w-full bg-app-primary h-12 text-sm hover:bg-app-lightPrimary"
            >
              Schedule Appointment
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;
