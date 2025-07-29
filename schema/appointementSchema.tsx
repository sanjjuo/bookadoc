import z from "zod";

export const appointmentSchema = z.object({
  doctor: z.string({
    message: "Doctor is required, select any doctor",
  }),
  reason: z
    .string({ message: "Reason for appointment is required" })
    .min(1, { message: "Reason atleast contain 1 character" }),
  additionalComments: z.string().optional(),
  appointmentDate: z.date({ message: "Appointemnt date is required" }),
  status: z.enum(["pending", "scheduled", "cancelled"]).default("pending"),
});
