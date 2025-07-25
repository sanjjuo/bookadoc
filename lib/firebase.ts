import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);


// /users/1k3FvVQQUgl8suiNCYjL (document)
// {
//   userInfo: {
//     name: "Alice Smith",
//     email: "alice@example.com",
//     phoneNumber: "055-1234567",
//     gender: "female",
//     dateOfBirth: "1998-04-25",
//     address: "Dubai, UAE",
//     profileImageURL: "https://..."
//   },
//   medicalInfo: {
//     allergies: ["pollen", "nuts"],
//     bloodType: "O+",
//     medications: ["aspirin"]
//   },
//   identificationInfo: {
//     idType: "passport",
//     idNumber: "A12345678",
//     expiryDate: "2025-12-31"
//   },
//   userType: "patient"
// }

