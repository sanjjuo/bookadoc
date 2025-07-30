import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CalendarCheck2, Hourglass, ShieldAlert } from "lucide-react";
import React from "react";

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <Badge
      className={cn(
        status === "pending"
          ? "bg-blue-300 text-blue-900"
          : status === "scheduled"
          ? "bg-green-300 text-green-900"
          : status === "cancelled" && "bg-red-300 text-red-900",
        "rounded-md h-9 w-28 flex items-center hover:bg-black/20 cursor-default justify-center gap-1 px-1 capitalize text-xs"
      )}
    >
      <span>
        {status === "pending" ? (
          <Hourglass className="w-3 h-3" />
        ) : status === "scheduled" ? (
          <CalendarCheck2 className="w-4 h-4" />
        ) : (
          status === "cancelled" && <ShieldAlert className="w-4 h-4" />
        )}
      </span>
      {status}
    </Badge>
  );
};

export default StatusBadge;
