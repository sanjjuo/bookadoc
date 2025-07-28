import { Clock, NotebookPen } from "lucide-react";
import React from "react";

interface CardsData {
  id: number;
  number?: string | number;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  button: string;
  workingHrs?: {
    data: string[];
  };
  href: string;
}

export const cardsData: CardsData[] = [
  {
    id: 1,
    number: "1-800-600-380",
    title: "Emergency Service",
    description:
      "Call us immediately in case of any medical emergency. Our dedicated team is ready to assist 24/7.",
    button: "See More",
    href: "/",
  },
  {
    id: 2,
    icon: (
      <NotebookPen strokeWidth={1.5} className="w-12 h-12 stroke-app-primary" />
    ),
    title: "Book an Appointment",
    description:
      "Schedule your visit easily through our online booking system. We value your time and convenience.",
    button: "Book Now",
    href: "/book-an-appointment",
  },
  {
    id: 3,
    icon: <Clock strokeWidth={1.5} className="w-12 h-12 stroke-app-primary" />,
    title: "Opening Hours",
    workingHrs: {
      data: [
        "Monday – Friday: 8:00 AM – 8:00 PM",
        "Saturday – Sunday: 9:00 AM – 5:00 PM",
      ],
    },
    button: "Contact Us",
    href: "/",
  },
];
