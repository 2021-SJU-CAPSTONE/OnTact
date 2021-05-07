import React, { Children, useContext, useEffect, useState } from "react";
import { auth, store } from "../firebase";
import firebaseApps from "../firebase";
import firebase from "firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  async function signup(email, password, isProfessor) {
    const idRes = await auth.createUserWithEmailAndPassword(email, password);

    if (isProfessor === "on") {
      const Ref = store.collection("Educator").doc(idRes.user.uid);
      Ref.set({
        Dept: "Software",
        Name: "이주혁",
        isProfessor: isProfessor,
      });
    } else {
      const Ref = store.collection("Educatee").doc(idRes.user.uid);
      Ref.set({
        Dept: "Software",
        Name: "장재호",
        isProfessor: isProfessor,
      });
    }

    return;
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const ussubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return ussubscribe;
  });
  const value = {
    currentUser,
    signup,
    login,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
