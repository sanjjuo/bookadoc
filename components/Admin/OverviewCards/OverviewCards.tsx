"use client";
import React from "react";
import AdminCard from "./AdminCard";
import { useAdminFetchPatients } from "@/services/useAdminFetchPatients";

const OverviewCards = () => {
  const { data } = useAdminFetchPatients();

  const scheduledCount =
    data?.filter((item) => item.status === "scheduled").length ?? 0;
  const pendingCount =
    data?.filter((item) => item.status === "pending").length ?? 0;
  const cancelledCount =
    data?.filter((item) => item.status === "cancelled").length ?? 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <AdminCard
        icon="scheduled"
        description="Total number of scheduled appointments"
        data={scheduledCount}
      />
      <AdminCard
        icon="pending"
        description="Total number of pending appointments"
        data={pendingCount}
      />
      <AdminCard
        icon="cancelled"
        description="Total number of cancelled appointments"
        data={cancelledCount}
      />
    </div>
  );
};

export default OverviewCards;
