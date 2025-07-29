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
import { useAdminFetchPatients } from "@/services/useAdminFetchPatients";
import StatusBadge from "../common/StatusBadge";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
import { tableHead } from "./data";
import TablePagination from "./TablePagination";

const AdminTable = () => {
  const { data } = useAdminFetchPatients();
  console.log(data);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHead.map((item) => (
              <TableHead
                key={item.id}
                className="capitalize text-sm text-app-lightPrimary font-medium"
              >
                {item.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index} className="h-20">
              <TableCell className="font-medium text-sm text-app-mainText capitalize">
                {item?.fullName}
              </TableCell>
              <TableCell className="font-medium text-sm text-app-mainText">
                {new Date(
                  item.appointmentDate.seconds * 1000
                ).toLocaleDateString()}
              </TableCell>
              <TableCell className="font-medium text-sm text-app-mainText">
                <StatusBadge status={item?.status} />
              </TableCell>
              <TableCell className="font-medium text-sm text-app-mainText">
                {item.doctor}
              </TableCell>
              <TableCell className="flex items-center gap-2 h-20">
                <ScheduleModal />
                <Button className="bg-red-300 hover:bg-red-300/40 text-red-900 rounded-full text-xs font-medium">
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-10">
        <TablePagination />
      </div>
    </div>
  );
};

export default AdminTable;
