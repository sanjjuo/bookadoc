"use client";
import Cards from "@/components/Cards_Section/Cards_Section";
import Hero from "@/components/Hero/Hero";
import { useUserDetails } from "@/hooks/useUserDetails";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import React from "react";

const HomePage = () => {
  const user = useUserDetails();
  React.useEffect(() => {
    const createUserInFirestore = async () => {
      if (user) {
        const userRef = doc(db, "users", user.userId);
        await setDoc(userRef, {
          id: user.userId,
          email: user.email,
          fullName: user.loggedInUsername,
          createdAt: new Date().toISOString(),
        });
      }
    };
    createUserInFirestore();
  }, [user]);
  return (
    <div>
      <Hero />
      <Cards />
    </div>
  );
};

export default HomePage;
