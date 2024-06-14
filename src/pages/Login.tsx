import { signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { signInGoole } from "../config/firebase";
const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-mybackground">
      <div className="flex h-[500px] w-[60%] flex-col items-center justify-center gap-5 rounded-xl bg-pink-500 bg-opacity-60 shadow-2xl">
        {" "}
        <h1 className="p-2 text-center text-3xl text-white">ĐĂNG NHẬP</h1>
        <GoogleButton onClick={signInGoole} />
      </div>
    </div>
  );
};

export default Login;
