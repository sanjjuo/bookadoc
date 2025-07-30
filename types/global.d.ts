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

interface UserInformationFormType {
  userInfoDocumentId?: string;
  userId?: string;
  fullName?: string;
  email?: string;
  dateOfBirth: Date;
  createdAt?: string;
  phoneNumber: string;
  address: string;
  gender: "Male" | "Female";
  occupation: string;
  allergies?: string;
  medications?: string;
  pastMedicalHistory?: string;
  familyMedicalHistory?: string;
  idType: string;
  idNumber: string;
}

interface AppointmentFormInput {
  doctor: string;
  reason: string;
  appointmentDate: Date;
  additionalComments?: string;
  status?: "pending" | "scheduled" | "cancelled";
  fullName?: string;
  email?: string;
  userId?: string;
  appointmentId?: string;
  createdAt?: string;
}

interface AdminAppointmentType {
  adminDoctor: string;
  adminReasonAppointment: string;
  adminExpectedAppointmentDate: Date | string;
  fullName?: string;
  email?: string;
  userId?: string;
  appointmentId?: string;
  createdAt?: string;
}
