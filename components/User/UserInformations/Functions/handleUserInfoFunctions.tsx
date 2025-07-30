import { useUserDetails } from "@/hooks/useUserDetails";
import { db } from "@/lib/firebase";
import { userInfoSchema } from "@/schema/userInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useHandleUserInfoFunction = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const userDetails = useUserDetails();
  const form = useForm({
    resolver: zodResolver(userInfoSchema),
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
      dateOfBirth: undefined,
      address: "",
      allergies: "",
      familyMedicalHistory: "",
      gender: undefined,
      idNumber: "",
      idType: "",
      medications: "",
      occupation: "",
      pastMedicalHistory: "",
    },
  });

  const handleUserInfoFormSubmit = async (data: UserInformationFormType) => {
    setIsLoading(true);
    try {
      if (!userDetails?.userId) {
        toast.error("User not found");
        return;
      }
      const docRef = await addDoc(
        collection(db, "users", userDetails?.userId, "user-information"),
        {}
      );
      const formData = {
        ...data,
        userInfoDocumentId: docRef.id,
        userId: userDetails?.userId,
        fullName: userDetails?.loggedInUsername,
        email: userDetails?.email,
        dateOfBirth: data.dateOfBirth.toISOString().split("T")[0],
        createdAt: new Date().toISOString(),
      };

      await updateDoc(docRef, formData);
      toast.success("Form is submitted");
      form.reset();
      setIsLoading(false);
      router.push("/home");
    } catch (error) {
      toast.error("There is an error");
    }
  };

  return { handleUserInfoFormSubmit, userDetails, form, isLoading };
};
