import { fetchPatients } from "@/apis/fetchPatients";
import { useQuery } from "@tanstack/react-query";

export const useAdminFetchPatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatients,
    refetchOnWindowFocus: true,
  });
};
