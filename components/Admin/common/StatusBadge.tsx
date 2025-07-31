import { cn } from "@/lib/utils";
import { CalendarCheck2, Hourglass, ShieldAlert } from "lucide-react";

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-[95px]">
        <h1
          className={cn(
            status === "pending"
              ? "text-blue-500"
              : status === "scheduled"
              ? "text-emerald-500"
              : status === "cancelled" && "text-red-500",
            "flex items-center gap-[3px] font-medium text-sm capitalize"
          )}
        >
          <span>
            {status === "pending" ? (
              <Hourglass className="w-3 h-3" />
            ) : status === "scheduled" ? (
              <CalendarCheck2 className="w-4 h-4" />
            ) : (
              status === "cancelled" && (
                <ShieldAlert className="w-[17px] h-[17px]" />
              )
            )}
          </span>
          {status}
        </h1>
      </div>
      <div
        className={cn(
          status === "pending"
            ? "pending-btn"
            : status === "scheduled"
            ? "schedule-btn animate-pulse"
            : status === "cancelled" && "cancel-btn",
          "rounded-full w-3 h-3"
        )}
      ></div>
    </div>
  );
};

export default StatusBadge;
