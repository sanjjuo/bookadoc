import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAzPyQgRb350JFwiIy7VoERamta51p0o4",
  authDomain: "bookadoc-f7fe9.firebaseapp.com",
  projectId: "bookadoc-f7fe9",
  storageBucket: "bookadoc-f7fe9.firebasestorage.app",
  messagingSenderId: "304439248518",
  appId: "1:304439248518:web:115134c9659bff621e3307",
  measurementId: "G-E64DJH71EC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
