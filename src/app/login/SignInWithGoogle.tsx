'use client';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebaseAuth";
import { useRouter } from 'next/navigation';

const SignInWithGoogle: React.FC = () => {
  const router = useRouter();
  

  async function googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        // User is signed in, redirect to dashboard
        router.push("/dashboard/profile");

        console.log("User signed in with Google:");
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
