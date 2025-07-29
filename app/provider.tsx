"use client";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </div>
  );
};

export default Provider;
