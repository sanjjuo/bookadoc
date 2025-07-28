"use client";
import React from "react";
import PersonalInfo from "./Personal/PersonalInfo";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import MedicalInfo from "./Medical/MedicalInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "@/schema/userInfoSchema";
import { toast } from "sonner";
import IdentificationInfo from "./Identification/IdentificationInfo";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useUserDetails } from "@/hooks/useUserDetails";
import { useRouter } from "next/navigation";
import CustomButton from "../common/CustomButton/CustomButton";

const UserInformationsForm = () => {
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

  const handleUserInfoFormSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const formData = {
        ...data,
        userId: userDetails?.userId,
        fullName: userDetails?.loggedInUsername,
        email: userDetails?.email,
        dateOfBirth: data.dateOfBirth.toISOString().split("T")[0],
      };
      console.log(formData);
      if (!userDetails?.userId) {
        toast.error("User not found");
        return;
      }
      await addDoc(
        collection(db, "users", userDetails?.userId, "user-information"),
        formData
      );
      console.log("form is submitted", data);
      toast.success("Form is submitted");
      form.reset();
      setIsLoading(false);
      router.push("/home");
    } catch (error) {
      toast.error("There is an error");
    }
  };

  return (
    <div className="space-y-10 appPadding">
      <div>
        <h1 className="text-4xl font-bold text-app-mainText">
          Welcome{" "}
          <span className="text-app-primary capitalize">
            {userDetails?.loggedInUsername},
          </span>
        </h1>
        <p className="text-sm text-app-subText">
          Let us know more about yourself
        </p>
      </div>
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(handleUserInfoFormSubmit)}
          className="space-y-8"
        >
          <PersonalInfo form={form} />
          <MedicalInfo form={form} />
          <IdentificationInfo form={form} />
          <CustomButton
            isLoading={isLoading}
            isDisabled={!form.formState.isValid || isLoading}
          />
        </form>
      </Form>
    </div>
  );
};

export default UserInformationsForm;
