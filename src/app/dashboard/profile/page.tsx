'use client'
import React, { useState } from "react";
import { auth, db } from "@/app/login/firebaseAuth";
import { doc, getDoc } from "firebase/firestore";

interface UserDetails {
  firstName: string;
  email: string;
  photo?: string;
}

function Profile() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

const fetchUserData = async () => {
  auth.onAuthStateChanged(async (user: any | null) => {
    if (user) {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data() as UserDetails);
      } else {
        console.log("User document does not exist");
      }
    } else {
      console.log("User is not logged in");
    }
  });
};

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {userDetails.photo && (
              <img
                src={userDetails.photo}
                alt="User Photo"
                width={"40%"}
                style={{ borderRadius: "50%" }}
              />
            )}
          </div>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;
