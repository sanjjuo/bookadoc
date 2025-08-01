import { db } from "@/lib/firebase";
import { collectionGroup, doc, getDocs, updateDoc } from "firebase/firestore";

export const fetchPatients = async () => {
  const response = await getDocs(collectionGroup(db, "appointment-of-user"));
  return response.docs.map((doc) => doc.data());
};

export const fetchPatientsChangedStatus = async ({
  changedStatus,
  userId,
  appointmentId,
}: {
  changedStatus: string;
  userId: string;
  appointmentId: string;
}) => {
  const response = await doc(
    db,
    "users",
    userId,
    "appointment-of-user",
    appointmentId
  );
  return updateDoc(response, { status: `${changedStatus}` });
};
