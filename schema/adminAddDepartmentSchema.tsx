import z from "zod";

export const useAdminAddDepartmentSchema = z.object({
  departmentName: z
    .string({ message: "Name of department is required" })
    .min(1, { message: "Please enter atleast one character" }),
  departmentDescription: z
    .string({ message: "Description of department is required" })
    .min(5, { message: "Please enter atleast five characters" }),
  departmentImage: z.string({ message: "Department image url is required" }),
});
