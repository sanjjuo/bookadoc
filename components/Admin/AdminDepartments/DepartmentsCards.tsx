"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useFetchDepartments } from "@/services/useAdminDepartments";
import { useFetchDoctors } from "@/services/useAdminDoctors";
import Image from "next/image";
import Link from "next/link";

const DepartmentsCard = () => {
  const { data } = useFetchDepartments();
  const { data: doctors } = useFetchDoctors();
  console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {Array.isArray(data) &&
        data?.map((item: DepartmentType, index) => {
          const doctorName = doctors?.find(
            (doc) => doc.specialization.id === item.id
          );
          return (
            <Card key={index} className="p-5">
              <CardContent className="p-0 flex flex-col h-full space-y-4">
                <div className="flex-1 space-y-2">
                  {item?.departmentImage ? (
                    <Image
                      src={item?.departmentImage}
                      width={50}
                      height={50}
                      alt="department-image"
                    />
                  ) : (
                    "undefined"
                  )}
                  <h1 className="text-2xl font-bold text-app-mainText">
                    {item.departmentName}
                  </h1>
                  <p className="text-sm text-app-subText line-clamp-5">
                    {item.departmentDescription}
                  </p>
                </div>
                <Link
                  href=""
                  className="text-app-primary font-bold text-sm capitalize"
                >
                  Dr. {doctorName?.doctor || "No doctor"}
                </Link>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

export default DepartmentsCard;
