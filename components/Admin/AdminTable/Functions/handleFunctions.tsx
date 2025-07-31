import React from "react";

export const useHandleFunctions = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedPatient, setSelectedPatient] =
    React.useState<Appointment | null>(null);

  const handleOpen = (patientData: Appointment) => {
    setOpen(true);
    setSelectedPatient(patientData);
  };

  return {
    open,
    setOpen,
    selectedPatient,
    handleOpen,
  };
};
