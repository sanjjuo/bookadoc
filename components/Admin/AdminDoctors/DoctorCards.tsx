"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useFetchDoctors } from "@/services/useAdminDoctors";

const DoctorCards = () => {
  const { data } = useFetchDoctors();
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {data?.map((doctor, index: number) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-2xl text-app-primary font-bold tracking-wide capitalize">
                Dr. {doctor.doctor}
              </CardTitle>
              <CardDescription className="uppercase font-bold !mt-0">
                {doctor.higherEducation}
              </CardDescription>
              <Separator
                orientation="horizontal"
                className="w-full h-[2px] bg-app-primary"
              />
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm text-app-mainText">
                  Gender :
                </span>
                <span className="text-app-subText text-sm">
                  {doctor.gender}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm text-app-mainText">
                    Email :
                  </span>
                  <span className="text-app-subText text-sm">
                    {doctor.email}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm text-app-mainText">
                    Age :
                  </span>
                  <span className="text-app-subText text-sm">{doctor.age}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm text-app-mainText">
                  Specialization :
                </span>
                <span className="text-app-subText text-sm">
                  {doctor.specialization.departmentName}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm text-app-mainText">
                  Experience :
                </span>
                <span className="text-app-subText text-sm">
                  {doctor.experience}
                </span>
              </div>
              <p className="text-sm text-app-subText">{doctor.about}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DoctorCards;
