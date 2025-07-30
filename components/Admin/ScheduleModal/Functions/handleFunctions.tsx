import { useAdminUpdateStatus } from "@/services/useAdminFetchPatients";
import React from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../exportEnv";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminAppointmentSchema } from "@/schema/adminAppointmentSchema";
import emailjs from "@emailjs/browser";

export const usehandleFunctionsModal = (
  selectUserId: string,
  selectAppointmentId: string,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { mutate } = useAdminUpdateStatus();

  const form = useForm({
    resolver: zodResolver(adminAppointmentSchema),
    defaultValues: {
      adminDoctor: "",
      adminExpectedAppointmentDate: undefined,
      adminReasonAppointment: "",
    },
  });

  // form submission
  const handleScheduleAppointmentByAdmin = async (
    data: AdminAppointmentType
  ) => {
    setIsLoading(true);
    try {
      const emailData = {
        patientName: data.fullName || "Unknown",
        doctor: data.adminDoctor || "Not provided",
        reason: data.adminReasonAppointment || "Not provided",
        expectedDate: data.adminExpectedAppointmentDate
          ? typeof data.adminExpectedAppointmentDate === "string"
            ? data.adminExpectedAppointmentDate
            : data.adminExpectedAppointmentDate.toLocaleDateString()
          : "Not selected",
        email: data?.email || "noemail@example.com",
      };
      await emailjs.send(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        emailData,
        `${PUBLIC_KEY}`
      );
      mutate(
        {
          userId: selectUserId,
          appointmentId: selectAppointmentId,
          changedStatus: "scheduled",
        },
        {
          onSuccess: () => {
            console.log("form is submitted", data);
            toast.success(
              `The data is scheduled for this patient ${emailData.patientName}`
            );
            form.reset();
            setIsLoading(false);
            setOpen(false);
          },
          onError: (error) => {
            toast.error("Failed to update status");
            setIsLoading(false);
            console.error(error);
          },
        }
      );
    } catch (error) {
      console.log("There is an error", error);
    }
  };
  return { handleScheduleAppointmentByAdmin, isLoading, form };
};
