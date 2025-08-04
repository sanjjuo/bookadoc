interface userFormType {
  fullName: string;
  email: string;
  number: string;
}
interface IdentificationDataType {
  label: string;
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
  gender: "Male" | "Female" | "Others";
  occupation: string;
  allergies?: string;
  medications?: string;
  pastMedicalHistory?: string;
  familyMedicalHistory?: string;
  idType: string;
  idNumber: string;
}

interface Appointment {
  doctor?: string;
  reason?: string;
  appointmentDate?: Date | { seconds: number; nanoseconds: number };
  additionalComments?: string;
  status?: "pending" | "scheduled" | "cancelled";
  fullName?: string;
  email?: string;
  userId?: string;
  appointmentId?: string;
  createdAt?: string;
}

interface AdminLoginType {
  adminEmail: string;
  adminPassword: string;
}

interface DepartmentType {
  id?: string;
  departmentName: string;
  departmentImage: string;
  departmentDescription: string;
}

interface DoctorType {
  image?: any;
  doctor: string;
  email: string;
  age: string;
  gender: "Male" | "Female" | "Others";
  specialization: DepartmentType;
  experience: string;
  higherEducation: string;
  about: string;
}
