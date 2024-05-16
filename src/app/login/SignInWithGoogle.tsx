'use client';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebaseAuth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

const SignInWithGoogle: React.FC = () => {
  const router = useRouter();
  

  async function googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // console.log("User:", user);

      // console.log("User ID:", user.uid);
      // console.log("User Name:", user.displayName);
      // console.log("User Email:", user.email);
      // console.log("User Photo URL:", user.photoURL);
      // console.log("User Email Verified:", user.emailVerified);
      // console.log('user mobile number', user.phoneNumber);

      if (user) { 
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        console.log(docSnap.exists())

        if (!docSnap.exists()) {
          await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber
          });
          console.log(docRef)

          console.log("User profile created successfully!");
          toast.success("User profile created successfully!");
        }

        if (docSnap.exists()) {
          console.log("User profile already exists!");
          toast.success("User profile already exists!");
        }

      }


     


    } catch (error) {
      console.error("Error signing in with Google: ", error);
      // Handle errors appropriately, display error message to user if necessary
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-cyan-600 text-center mt-16">Sign in with Google</h1>
      <button
        className="text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 p-4 rounded-lg mt-8 mb-8"
        onClick={googleLogin}
      >
        Sign in with Google
      </button>

      
    </div>
  );
};

export default SignInWithGoogle;
