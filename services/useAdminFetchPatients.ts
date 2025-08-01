import {
  fetchPatients,
  fetchPatientsChangedStatus,
} from "@/apis/patients";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAdminFetchPatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatients,
    refetchOnWindowFocus: true,
  });
};

export const useAdminUpdateStatus = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (variables: {
      userId: string;
      appointmentId: string;
      changedStatus: string;
    }) => fetchPatientsChangedStatus(variables),
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["patients"],
      });
    },
  });
};
