import AdminNavbar from "@/components/Admin/AdminNavbar/AdminNavbar";
import { AdminSideBar } from "@/components/Admin/AdminSideBar/AdminSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AdminSideBar />
      </div>
      <main className="flex-1">
        <div className="sticky top-0 w-full z-50 p-3 bg-gray-100">
          <AdminNavbar />
        </div>
        <div className="adminAppWidth appPadding">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Adminlayout;
