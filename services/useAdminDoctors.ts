import { addAdminDoctors, fetchDoctors } from "@/apis/doctors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAdminAddDoctors = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (doctorData: DoctorType) => addAdminDoctors(doctorData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["doctors"],
      
      });
    },
  });
};

export const useFetchDoctors = () => {
  return useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
  });
};
