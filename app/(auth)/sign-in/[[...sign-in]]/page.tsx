import { SignIn } from "@clerk/nextjs";
import React from "react";

const LoginPage = () => {
  return (
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      fallbackRedirectUrl="/home"
    />
  );
};

export default LoginPage;
