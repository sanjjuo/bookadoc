import z from "zod";

export const useAdminAddDoctorSchema = z.object({
  // image: z.file({ message: "Image is required" }),
  doctor: z
    .string({ message: "Doctor name is required" })
    .min(1, { message: "Atleast one character is required" }),
  email: z
    .string({ message: "Email is required" })
    .min(1, { message: "Atleast one character is required" }),
  age: z
    .string({ message: "Age is required" })
    .min(2, { message: "Atleast two digits is required" }),
  gender: z
    .enum(["Male", "Female", "Others"] as const, {
      message: "Gender is required",
    })
    .refine((val) => !!val, {
      message: "Gender is required",
    }),
  specialization: z
    .string({ message: "Specialization is required" })
    .min(1, { message: "Atleast one character is required" }),
  experience: z
    .string({ message: "Experience is required" })
    .min(1, { message: "Atleast one character is required" }),
  higherEducation: z
    .string({ message: "Higher education is required" })
    .min(3, { message: "Atleast three characters required" }),
  about: z
    .string({ message: "About is required" })
    .min(5, { message: "Atleast five characters required" }),
});
