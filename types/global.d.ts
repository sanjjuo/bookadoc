interface userFormType {
  fullName: string;
  email: string;
  number: string;
}
interface IdentificationDataType {
  label: string;
}

interface DoctorDataType {
  id: number;
  imageUrl: string;
  name: string;
  specialization: string;
}

interface IdentificationDropdownProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
  data: IdentificationDataType[];
}

interface DoctorDropdownProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
  data: DoctorDataType[];
}

interface AppointmentFormInput {
  doctor: string;
  reason: string;
  appointmentDate: Date;
  status?: "pending" | "scheduled" | "cancelled";
  additionalComments?: string;
}
