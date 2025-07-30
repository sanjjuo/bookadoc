import { useUserDetails } from "@/hooks/useUserDetails";
import { db } from "@/lib/firebase";
import { appointmentSchema } from "@/schema/appointementSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, Timestamp, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { doctorData } from "../data";

export const useHandleAppointmentFunction = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const userDetails = useUserDetails();
  const router = useRouter();
  const form = useForm<AppointmentFormInput>({
    resolver: zodResolver(appointmentSchema),
    mode: "onChange",
    defaultValues: {
      doctor: "",
      reason: "",
      additionalComments: "",
      appointmentDate: undefined,
      status: "pending",
    },
  });

  //   form submission
  const handleAppointmentFormSubmit = async (data: AppointmentFormInput) => {
    setIsLoading(true);
    try {
      if (!userDetails?.userId) {
        toast.error("User not found");
        return;
      }

      // Step 1: create empty document
      const docRef = await addDoc(
        collection(db, "users", userDetails.userId, "appointment-of-user"),
        {} // create empty doc first
      );

      // Step 2: build form data with ID
      const formData = {
        ...data,
        appointmentId: docRef.id,
        appointmentDate: Timestamp.fromDate(new Date(data.appointmentDate)),
        userId: userDetails?.userId,
        fullName: userDetails?.loggedInUsername ?? "",
        email: userDetails?.email ?? "",
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      // Step 3: update the created doc with all data
      await updateDoc(docRef, formData);

      console.log("Form is submitted", data);
      form.reset();
      setIsLoading(false);

      const selectedDoctor = doctorData.find((doc) => doc.name === data.doctor);
      const query = new URLSearchParams({
        doctorName: selectedDoctor?.name ?? "",
        doctorImage: selectedDoctor?.imageUrl ?? "",
        appointmentDate:
          data.appointmentDate instanceof Date
            ? data.appointmentDate.toISOString()
            : String(data.appointmentDate) || "",
      }).toString();

      router.push(`/appointment-successful?${query}`);
    } catch (error) {
      toast.error("Something wrong");
      setIsLoading(false);
    }
  };
  return { handleAppointmentFormSubmit, userDetails, form, isLoading };
};
