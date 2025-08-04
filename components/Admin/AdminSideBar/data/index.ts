import { Calendar, Home, Inbox, Settings, Stethoscope } from "lucide-react";
export const sideBarItems = [
  {
    title: "Dashboard",
    url: "/admin/admin-dashboard",
    icon: Home,
  },
  {
    title: "Appointments",
    url: "/admin/admin-appointments",
    icon: Inbox,
  },
  {
    title: "Departments",
    url: "/admin/admin-departments",
    icon: Calendar,
  },
  {
    title: "Doctors",
    url: "/admin/admin-doctors",
    icon: Stethoscope,
  },
  {
    title: "Settings",
    url: "/admin",
    icon: Settings,
  },
];
