import React from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import Login from "@/components/auth/login/Login";

const LoginPage = () => {
  return (
    <div className="h-screen">
      <Login />
      <SignInWithGoogle />
    </div>
  );
};

export default LoginPage;
