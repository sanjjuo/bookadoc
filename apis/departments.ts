import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore";

export const addAdminDepartment = async (data: DepartmentType) => {
  const addDepartmentCollection = await addDoc(
    collection(db, "departments"),
    {}
  );
  const formData = {
    ...data,
    documentId: addDepartmentCollection.id,
  };
  await updateDoc(addDepartmentCollection, formData);
  return addDepartmentCollection;
};

export const fetchDepartments = async () : Promise<DepartmentType[]> => {
  const response = await getDocs(collection(db, "departments"));
  return response.docs.map((doc) => ({ id: doc.id, ...doc.data() as DepartmentType }));
};
