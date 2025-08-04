import { db } from "@/lib/firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

export const addAdminDoctors = async (doctorData: DoctorType) => {
  const doctorCollection = await addDoc(collection(db, "doctors"), doctorData);
  return doctorCollection;
};

export const fetchDoctors = async () => {
  const response = await getDocs(collection(db, "doctors"));
  return response.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as DoctorType),
  }));
};
