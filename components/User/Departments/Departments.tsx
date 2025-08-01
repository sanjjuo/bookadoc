"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useFetchDepartments } from "@/services/useAdminDepartments";
import Image from "next/image";
import Link from "next/link";

const Departments = () => {
  const { data } = useFetchDepartments();
  return (
    <div className="appWidth space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold text-app-mainText">
          🏥 Our Departments
        </h2>
        <p className="text-app-subText max-w-2xl mx-auto">
          Explore our wide range of medical departments, each staffed with
          experienced professionals dedicated to your well-being.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data?.map((dept, index) => (
          <Card
            key={index}
            className="rounded-2xl p-5 shadow-none border-none hover:shadow-app-lightPrimary hover:shadow-lg transition bg-white border border-app-border space-y-3 cursor-default"
          >
            <CardContent className="p-0 flex flex-col h-full space-y-4">
              <div className="space-y-2 flex-1">
                {dept?.departmentImage ? (
                  <Image
                    src={dept?.departmentImage}
                    width={50}
                    height={50}
                    alt="department-image"
                  />
                ) : (
                  "undefined"
                )}
                <h1 className="text-xl font-semibold text-app-mainText">
                  {dept.departmentName}
                </h1>
                <p className="text-app-subText text-sm line-clamp-6">
                  {dept.departmentDescription}
                </p>
              </div>
              <Link href="" className="flex items-center gap-2">
                <span className="text-sm font-bold text-app-mainText">
                  Doctor :
                </span>
                <span className="text-sm font-semibold text-app-primary">
                  {dept.departmentDoctor}
                </span>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Departments;
