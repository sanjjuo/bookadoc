import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck2, Hourglass, ShieldAlert } from "lucide-react";

interface AdminCardProps {
  icon: string;
  description: string;
  data: number;
}

const AdminCard = ({ icon, description, data }: AdminCardProps) => {
  return (
    <Card className="p-10 bg-app-bgCards/80">
      <CardContent className="p-0 flex flex-col items-start space-y-5">
        <div className="flex items-center gap-2">
          <span>
            {icon === "scheduled" ? (
              <CalendarCheck2 className="w-10 h-10 stroke-yellow-600" />
            ) : icon === "pending" ? (
              <Hourglass className="w-10 h-10 stroke-blue-600" />
            ) : (
              icon === "cancelled" && (
                <ShieldAlert className="w-10 h-10 stroke-red-600" />
              )
            )}
          </span>
          <p className="text-4xl font-bold text-app-primary font-heading italic">
            {data || "0"}
          </p>
        </div>
        <p className="text-app-mainText font-medium text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AdminCard;
