"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/User/common/Logo/Logo";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const AppointmentSuccessfulPage = () => {
  const searchParams = useSearchParams();
  const doctorName = searchParams.get("doctorName");
  const doctorImage = searchParams.get("doctorImage");
  const appointmentDate = searchParams.get("appointmentDate");
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] appPadding space-y-5">
      <Logo placement='success'/>
      <Image
        src="/gifs/success.gif"
        width={400}
        height={400}
        alt="success-gif"
        priority
        quality={100}
      />
      <h1 className="text-6xl font-bold max-w-5xl text-center">
        Your <span className="text-app-primary">Appointment request</span> has
        been successfully submitted!
      </h1>
      <p className="text-xl text-app-mainText">
        We'll be in touch shortly to confirm
      </p>
      <div className="max-w-5xl w-full">
        <Separator
          orientation="horizontal"
          className="w-full bg-app-mainText"
        />
        <div className="flex items-center justify-between py-5">
          <span className="text-app-mainText">
            Requested appointment details :
          </span>
          <div className="flex items-center gap-2">
            <Image
              src={doctorImage ?? ""}
              width={40}
              height={40}
              alt="dr-img"
            />
            <span className="text-app-mainText">{doctorName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 stroke-app-mainText" />
            <span className="text-app-mainText">
              {appointmentDate
                ? new Date(appointmentDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "No date selected"}
            </span>
          </div>
        </div>
        <Separator
          orientation="horizontal"
          className="w-full bg-app-mainText"
        />
      </div>
      <div className="flex items-center gap-2">
        <Link href="/book-an-appointment">
          <Button className="bg-app-primary hover:bg-app-lightPrimary h-12 rounded-lg">
            New Appointment
          </Button>
        </Link>
        <Link href="/home">
          <Button className="bg-transparent border-2 text-app-primary hover:text-white border-app-primary hover:bg-app-primary h-12 rounded-lg">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentSuccessfulPage;
