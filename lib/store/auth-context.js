"use client";

import { createContext, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const authContext = createContext({
  user: null,
  loading: false,
  googleLoginHandler: async () => {},
  logout: async () => {},
});

export default function AuthContextProvider({ children }) {
  useEffect(() => {
    const height = window.innerHeight;
  }, []);
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider(auth);

  const googleLoginHandler = async () => {
    try {
      signInWithPopup(auth, googleProvider);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const values = {
    user,
    loading,
    googleLoginHandler,
    logout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
