import z from "zod";

export const UserFormValidation = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  number: z.string().refine((phone) => /^[0-9+]+$/.test(phone), {
    message: "Invalid phone number",
  }),
});
