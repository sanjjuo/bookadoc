import { useAdminAddDepartmentSchema } from "@/schema/adminAddDepartmentSchema";
import { useAdminAddDepartments } from "@/services/useAdminDepartments";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useHandleAdminAddDepartment = () => {
  const { mutate } = useAdminAddDepartments();
  const form = useForm({
    resolver: zodResolver(useAdminAddDepartmentSchema),
    defaultValues: {
      departmentName: "",
      departmentDescription: "",
      departmentDoctor: "",
    },
  });
  const handleAddDepartment = async (data: DepartmentType) => {
    mutate(data, {
      onSuccess: () => {
        console.log(data);
        form.reset();
        toast.success("Department added successfully");
      },
      onError: (error) => {
        toast.error(`Something went wrong, ${error}`);
        console.log(error);
      },
    });
  };
  return { form, handleAddDepartment };
};
