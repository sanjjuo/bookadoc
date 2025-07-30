"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useAdminFetchPatients } from "@/services/useAdminFetchPatients";
import React from "react";
import StatusBadge from "../common/StatusBadge";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
import { tableHead } from "./data";
import TablePagination from "./TablePagination";
import { useHandleFunctions } from "./Functions/handleFunctions";

const AdminTable = () => {
  const { data } = useAdminFetchPatients();
  const {
    handleCancel,
    open,
    setOpen,
    selectAppointmentId,
    selectUserId,
    handleOpen,
  } = useHandleFunctions();

  return (
    <div className="bg-gray-50 p-5 rounded-2xl overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {tableHead.map((item) => (
              <TableHead
                key={item.id}
                className={cn(
                  item.id === 7 && "text-right",
                  "capitalize text-sm text-app-lightPrimary font-medium px-4 py-3"
                )}
              >
                {item.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index} className="h-20">
              <TableCell className="text-sm text-app-mainText px-4 py-2">
                {index + 1}
              </TableCell>
              <TableCell className="text-sm text-app-mainText capitalize px-4 py-2">
                {item?.fullName}
              </TableCell>
              <TableCell className="text-sm text-blue-600 underline cursor-pointer hover:text-blue-800 px-4 py-2 truncate">
                {item?.email}
              </TableCell>
              <TableCell className="text-sm text-app-mainText px-4 py-2 w-[15%]">
                {new Date(
                  item.appointmentDate.seconds * 1000
                ).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-sm text-app-mainText px-4 py-2 w-[10%]">
                <StatusBadge status={item?.status} />
              </TableCell>
              <TableCell className="text-sm text-app-mainText px-4 py-2 w-[15%]">
                {item.doctor}
              </TableCell>
              <TableCell className="px-4 py-2 w-[15%]">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    onClick={() => handleOpen(item.appointmentId, item.userId)}
                    className="bg-green-300 hover:bg-green-300/40 text-green-900 rounded-full text-xs font-medium"
                  >
                    Schedule
                  </Button>
                  <Button
                    onClick={() =>
                      handleCancel(item.appointmentId, item.userId)
                    }
                    className="bg-red-300 hover:bg-red-300/40 text-red-900 rounded-full text-xs font-medium"
                  >
                    Cancel
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-10">
        <TablePagination />
      </div>

      <ScheduleModal
        open={open}
        setOpen={setOpen}
        selectAppointmentId={selectAppointmentId}
        selectUserId={selectUserId}
      />
    </div>
  );
};

export default AdminTable;
