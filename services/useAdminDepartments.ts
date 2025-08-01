import { addAdminDepartment, fetchDepartments } from "@/apis/departments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAdminAddDepartments = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DepartmentType) => addAdminDepartment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["departments"],
      });
    },
  });
};

export const useFetchDepartments = () => {
  return useQuery<DepartmentType[]>({
    queryKey: ["departments"],
    queryFn: fetchDepartments,
  });
};
