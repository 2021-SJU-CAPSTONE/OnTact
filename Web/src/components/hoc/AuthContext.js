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
  async function signup(email, password, isProfessor, name) {
    const idRes = await auth.createUserWithEmailAndPassword(email, password);

    const Ref = store.collection("User").doc(idRes.user.uid);
    Ref.set({
      Dept: "Software",
      Name: name,
      isProfessor: isProfessor,
      email: email,
      password: password,
    });

    return;
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const ussubscribe = auth.onAuthStateChanged((user) => {
      const ref = store.collection("User").doc(user.uid);
      ref.get().then((item) => {
        setCurrentUser(item.data());
      });
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
