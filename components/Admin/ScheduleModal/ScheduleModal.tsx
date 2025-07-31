"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import React, { SetStateAction } from "react";
import { usehandleFunctionsModal } from "./Functions/handleFunctions";

const ScheduleModal = ({
  open,
  setOpen,
  selectedPatient,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  selectedPatient: Appointment | null;
}) => {
  // handle Functions
  const { isCancelling, isScheduling, handleCancel, handleSchedule } =
    usehandleFunctionsModal(setOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Appointment Details
          </DialogTitle>
          <DialogDescription className="text-xs">
            Review the patient’s appointment details below and choose to
            schedule or cancel the appointment.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10 mt-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium text-app-mainText">
                👤 Patient Name :
              </Label>
              <p className="text-app-subText font-semibold text-sm">
                {selectedPatient?.fullName}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium text-app-mainText">
                📧 Email :
              </Label>
              <p className="text-app-subText font-semibold text-sm">
                {selectedPatient?.email}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium text-app-mainText">
                🩺 Doctor :
              </Label>
              <p className="text-app-subText font-semibold text-sm">
                {selectedPatient?.doctor}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium text-app-mainText">
                📆 Appointment Date :
              </Label>
              <p className="text-app-subText font-semibold text-sm">
                {selectedPatient?.appointmentDate
                  ? typeof selectedPatient.appointmentDate === "object" &&
                    "seconds" in selectedPatient.appointmentDate
                    ? new Date(
                        selectedPatient.appointmentDate.seconds * 1000
                      ).toLocaleDateString()
                    : new Date(
                        selectedPatient.appointmentDate
                      ).toLocaleDateString()
                  : ""}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium text-app-mainText">
                📝 Reason for Visit :
              </Label>
              <p className="text-app-subText font-semibold text-sm first-letter:uppercase">
                {selectedPatient?.reason}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium text-app-mainText">
                💬 Additional Comments :
              </Label>
              <p className="text-app-subText font-semibold text-sm first-letter:uppercase">
                "{selectedPatient?.additionalComments}"
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium text-app-mainText">
                📌 Current Status :
              </Label>
              <p className="text-app-subText font-semibold text-sm first-letter:uppercase">
                {selectedPatient?.status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => handleSchedule(selectedPatient)}
              className="schedule-btn w-full"
            >
              {isScheduling ? "Scheduling..." : "Schedule Appointment"}
            </Button>
            <Button
              onClick={() => handleCancel(selectedPatient)}
              className="cancel-btn w-full"
            >
              {isCancelling ? "Cancelling..." : "Cancel Appointment"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;
