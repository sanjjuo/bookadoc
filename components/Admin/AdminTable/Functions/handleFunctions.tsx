import { useAdminUpdateStatus } from "@/services/useAdminFetchPatients";
import React from "react";
import { toast } from "sonner";

export const useHandleFunctions = () => {
  const [open, setOpen] = React.useState(false);
  const [selectAppointmentId, setSelectAppointmentId] = React.useState("");
  const [selectUserId, setSelectUserId] = React.useState("");
  const { mutate } = useAdminUpdateStatus();

  const handleOpen = (appointmentId: string, userId: string) => {
    setOpen(true);
    setSelectAppointmentId(appointmentId);
    setSelectUserId(userId);
  };

  const handleCancel = (appointmentId: string, userId: string) => {
    mutate(
      {
        userId,
        appointmentId,
        changedStatus: "cancelled",
      },
      {
        onSuccess: () => {
          toast.success("This schedule of this patient is cancelled");
        },
        onError: () => {
          toast.error("Failed to cancel appointment");
        },
      }
    );
  };

  return { handleCancel, open, setOpen, selectAppointmentId, selectUserId, handleOpen };
};
