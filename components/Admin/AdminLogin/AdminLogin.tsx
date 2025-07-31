"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Logo from "@/components/User/common/Logo/Logo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAdminLoginSchema } from "@/schema/adminLoginSchema";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";

const AdminLogin = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const form = useForm<AdminLoginType>({
    resolver: zodResolver(useAdminLoginSchema),
    defaultValues: {
      adminEmail: "",
      adminPassword: "",
    },
  });

  const handleAdminLoginForm = async (data: AdminLoginType) => {
    setIsLoading(true);
    try {
      const adminCredential = await signInWithEmailAndPassword(
        data.adminEmail,
        data.adminPassword
      );

      if (adminCredential) {
        setIsLoading(false);
        toast.success("Admin logged in successfully");
        router.push("/admin-dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Failed to login. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
      <Card className="w-[500px]">
        <CardHeader className="flex flex-col items-center justify-center space-y-5">
          <Logo placement="navbar" />
          <div className="text-center">
            <CardTitle className="text-app-mainText text-xl font-bold">
              Admin Login
            </CardTitle>
            <CardDescription className="text-sm text-app-subText">
              Welcome back! Log in to manage the platform.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="space-y-5"
              onSubmit={form.handleSubmit(handleAdminLoginForm)}
            >
              <FormField
                control={form.control}
                name="adminEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="input-label">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className="input-field"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="adminPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="input-label">Password</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2 border px-3 rounded-lg !shadow-none focus:!ring-0 !mt-0 ">
                        <Input
                          type={isVisible ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                          className="border-none shadow-none p-0 h-12 focus:!ring-0 placeholder:!text-xs"
                        />
                        <span
                          onClick={() => setIsVisible(!isVisible)}
                          className="cursor-pointer"
                        >
                          {isVisible ? (
                            <Eye className="w-5 h-5 stroke-app-mainText" />
                          ) : (
                            <EyeClosed className="w-5 h-5 stroke-app-mainText" />
                          )}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="app-btn" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Continue to Dashboard"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
