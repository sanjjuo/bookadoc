import { useAdminUpdateStatus } from "@/services/useAdminFetchPatients";
import emailjs from "@emailjs/browser";
import React from "react";
import { toast } from "sonner";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../exportEnv";

export const usehandleFunctionsModal = (
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [isScheduling, setIsScheduling] = React.useState(false);
  const [isCancelling, setIsCancelling] = React.useState(false);
  const { mutate } = useAdminUpdateStatus();

  const handleSchedule = async (data: Appointment | null) => {
    setIsScheduling(true);
    try {
      const emailData = {
        patientName: data?.fullName || "Unknown",
        doctor: data?.doctor || "Not provided",
        reason: data?.reason || "Not provided",
        expectedDate: data?.appointmentDate
          ? new Date(
              typeof data.appointmentDate === "object" &&
              "seconds" in data.appointmentDate
                ? data.appointmentDate.seconds * 1000
                : data.appointmentDate
            ).toLocaleDateString()
          : "Not selected",
        email: data?.email || "noemail@example.com",
      };

      console.log(emailData);
      await emailjs.send(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        emailData,
        `${PUBLIC_KEY}`
      );
      mutate(
        {
          userId: data?.userId ?? "",
          appointmentId: data?.appointmentId ?? "",
          changedStatus: "scheduled",
        },
        {
          onSuccess: () => {
            toast.success(
              `The data is scheduled for this patient ${emailData.patientName}`
            );
            setIsScheduling(false);
            setOpen(false);
          },
          onError: (error) => {
            toast.error("Failed to update status");
            setIsScheduling(false);
            console.error(error);
          },
        }
      );
    } catch (error) {
      console.log("There is an error", error);
    }
  };

  const handleCancel = (patientData: Appointment | null) => {
    setIsCancelling(true);
    try {
      mutate(
        {
          userId: patientData?.userId ?? "",
          appointmentId: patientData?.appointmentId ?? "",
          changedStatus: "cancelled",
        },
        {
          onSuccess: () => {
            toast.success("This schedule of this patient is cancelled");
            setIsCancelling(false);
            setOpen(false);
          },
          onError: (error) => {
            toast.error("Failed to cancel appointment");
            setIsCancelling(false);
            console.error(error);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return {
    isScheduling,
    isCancelling,
    handleCancel,
    handleSchedule,
  };
};
