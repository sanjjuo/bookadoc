import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export const addAdminDoctors = async (doctorData: DoctorType) => {
  const doctorCollection = await addDoc(collection(db, "doctors"), doctorData);
  return doctorCollection;
};
