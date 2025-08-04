import { addAdminDoctors } from "@/apis/doctors";
import { useMutation } from "@tanstack/react-query";

export const useAdminAddDoctors = () => {
  return useMutation({
    mutationFn: (doctorData: DoctorType) => addAdminDoctors(doctorData),
  });
};
