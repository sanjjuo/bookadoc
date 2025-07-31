import z from "zod";

export const useAdminLoginSchema = z.object({
  adminEmail: z.email({ message: "Email is required" }),
  adminPassword: z
    .string()
    .min(8, { message: "Password atleast 8 characters" }),
});
