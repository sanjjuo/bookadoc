import { Button } from "@/components/ui/button";
import React from "react";

const CustomButton = ({
  isLoading,
  isDisabled,
}: {
  isLoading: boolean;
  isDisabled: boolean;
}) => {
  return (
    <Button
      type="submit"
      disabled={isDisabled}
      className="bg-app-primary w-full text-xs tracking-wide hover:bg-app-lightPrimary"
    >
      {isLoading ? "Submitting..." : "Submit and continue"}
    </Button>
  );
};

export default CustomButton;
