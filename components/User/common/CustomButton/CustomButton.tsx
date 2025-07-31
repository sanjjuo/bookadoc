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
    <Button type="submit" disabled={isDisabled} className="app-btn">
      {isLoading ? "Submitting..." : "Submit and continue"}
    </Button>
  );
};

export default CustomButton;
