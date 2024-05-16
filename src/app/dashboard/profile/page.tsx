// profile.tsx
'use client';

import React, { useEffect, useState } from "react";
import { auth, db } from "@/app/login/firebaseAuth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation';

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Check if user is authenticated
        const user = auth.currentUser;
        if (!user) {
          // Redirect to login if not authenticated
          router.push("/login");
          return;
        }

        // Fetch user profile from Firestore
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
        } else {
          console.log("User profile not found.");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Handle error
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">User Profile</h1>
      {userProfile && (
        <div className="mt-4">
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Photo:</strong> <img src={userProfile.photoURL} alt="User" style={{ maxWidth: "200px" }} /></p>
        </div>
      )}
    </div>
  );
};

export default Profile;
