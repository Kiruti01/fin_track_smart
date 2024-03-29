"use client";
import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "@/lib/store/auth-context";

function SignIn() {
  useEffect(() => {
    const height = window.innerHeight;
  }, []);
  const { googleLoginHandler } = useContext(authContext);
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className="mb-6 text-6xl font-bold text-center">Welcome👋</h1>
      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
        <div className="h-52">
          <img
            className="object-cover w-full h-full"
            src="https://t3.ftcdn.net/jpg/03/32/31/86/360_F_332318630_LFIgWmdcW6VrfCn1F3Ir4x3Banbxyg59.jpg"
          />
        </div>
        <div className="px-4 py-4">
          <h3 className="text-2xl text-center">Please sign in to continue</h3>
          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg"
          >
            <FcGoogle className="text-2xl" />
            Google
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
