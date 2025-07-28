import BookAppointment from "@/components/BookAppointment/BookAppointment";
import LargeImage from "@/components/common/LargeImage/LargeImage";
import React from "react";

const BookAppointmentPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-full gap-10 appWidth">
      <div className="col-span-3 overflow-y-auto h-[calc(100vh-5rem)] scrollbar-hide">
        <BookAppointment />
      </div>
      <div className="col-span-2 overflow-hidden">
        <LargeImage image="/images/appointment-img.jpg" />
      </div>
    </div>
  );
};

export default BookAppointmentPage;
