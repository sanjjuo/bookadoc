import z from "zod";

export const adminAppointmentSchema = z.object({
  adminDoctor: z.string({
    message: "Doctor is required, select any doctor",
  }),
  adminReasonAppointment: z
    .string({ message: "Reason is required" })
    .min(3, { message: "Atleast 3 characters is required" }),
  adminExpectedAppointmentDate: z.date({
    message: "Appointemnt date is required",
  }),
});
