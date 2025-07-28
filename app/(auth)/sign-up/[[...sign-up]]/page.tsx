import { SignUp } from "@clerk/nextjs";
import React from "react";

const RegisterPage = () => {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      fallbackRedirectUrl="/home"
    />
  );
};

export default RegisterPage;
