"use client";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import CustomButton from "../common/CustomButton/CustomButton";
import CustomTextarea from "../common/CustomTextarea/CustomTextarea";
import { DatePicker } from "../common/DatePicker/DatePicker";
import { doctorData } from "./data";
import DoctorDropdown from "./DoctorDropdown/DoctorDropdown";
import { useHandleAppointmentFunction } from "./Functions/handleAppointmentFunction";

const BookAppointment = () => {
  const { handleAppointmentFormSubmit, userDetails, form, isLoading } =
    useHandleAppointmentFunction();

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
