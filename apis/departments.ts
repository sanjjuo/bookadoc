import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const addAdminDepartment = async (data: DepartmentType) => {
  const addDepartmentCollection = await addDoc(
    collection(db, "departments"),
    data
  );
  return addDepartmentCollection;
};

export const fetchDepartments = async (): Promise<DepartmentType[]> => {
  const response = await getDocs(collection(db, "departments"));
  return response.docs.map((doc) => ({
    id: doc.id, // <-- Firestore document ID here (not in doc.data())
    ...(doc.data() as DepartmentType),
  }));
};
