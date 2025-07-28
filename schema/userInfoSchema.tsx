import { z } from "zod";

export const userInfoSchema = z.object({
  phoneNumber: z
    .string({ message: "Phone number is required" })
    .min(7, { message: "Phone number must be at least 7 digits" })
    .max(10, { message: "Phone number can't exceed 10 digits" }),
  address: z
    .string({ message: "Address is required" })
    .min(5, { message: "Address must be at least 5 characters" }),
  dateOfBirth: z.date({ message: "DOB is required" }),
  gender: z
    .enum(["Male", "Female"] as const, { message: "Gender is required" })
    .refine((val) => !!val, {
      message: "Gender is required",
    }),
  occupation: z
    .string({ message: "Occupation is required" })
    .min(1, { message: "Occupation is required" }),
  allergies: z.string().optional(),
  medications: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  idType: z.string({
    message: "Identification is required, select any of the Identification",
  }),
  idNumber: z
    .string({ message: "Identification Number is required" })
    .min(10, { message: "Identification number must be atleast 10 digits" }),
});
