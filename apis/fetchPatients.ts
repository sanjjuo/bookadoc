import { db } from "@/lib/firebase";
import { collectionGroup, getDocs } from "firebase/firestore";

export const fetchPatients = async () => {
  const response = await getDocs(collectionGroup(db, "appointment-of-user"));
  return response.docs.map((doc) => doc.data());
};
