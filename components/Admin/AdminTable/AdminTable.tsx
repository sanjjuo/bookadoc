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
import StatusBadge from "../common/StatusBadge";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
import { tableHead } from "./data";
import { useHandleFunctions } from "./Functions/handleFunctions";
import TablePagination from "./TablePagination";

const AdminTable = ({ placement }: { placement: string }) => {
  const { data } = useAdminFetchPatients();
  const { open, setOpen, selectedPatient, handleOpen } = useHandleFunctions();

  const appointmentsData = placement === "dashboard" ? data?.slice(0, 5) : data;

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
          {appointmentsData?.map((item, index) => (
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
                <Button
                  onClick={() => handleOpen(item)}
                  className="app-border-btn"
                >
                  Manage Appointment
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {placement === "appointments" && (
        <div className="mt-10">
          <TablePagination />
        </div>
      )}

      <ScheduleModal
        open={open}
        setOpen={setOpen}
        selectedPatient={selectedPatient}
      />
    </div>
  );
};

export default AdminTable;
