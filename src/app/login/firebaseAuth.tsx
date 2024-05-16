// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBSu5YrUoOzNhP2FNLwae6hDrHSOGSOMT4",

  authDomain: "kazibyteauth.firebaseapp.com",

  projectId: "kazibyteauth",

  storageBucket: "kazibyteauth.appspot.com",

  messagingSenderId: "833651538536",

  appId: "1:833651538536:web:07c1f6f96b5deafc7799dd",

  measurementId: "G-S1JNTD2QHC"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;



onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("No user is signed in.");
  }
});