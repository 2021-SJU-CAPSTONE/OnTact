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
  const [isLogin, setIsLogin] = useState(false);
  const [rerender, setrerender] = useState(false);
  async function signup(email, password, isProfessor, name, id) {
    const idRes = await auth.createUserWithEmailAndPassword(email, password);

    const Ref = store.collection("User").doc(idRes.user.uid);
    Ref.set({
      Dept: "Software",
      Name: name,
      isProfessor: isProfessor,
      email: email,
      password: password,
      id: id,
      lectureList: [],
    });
    setIsLogin(true);
    setrerender(o => !o);
    return;
  }
  function login(email, password) {
    setIsLogin(true);
    setrerender(o => !o);
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (isLogin) {
      const ussubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          const ref = store.collection("User").doc(user.uid);
          ref.get().then(item => {
            setCurrentUser(item.data());
          });
        }
      });
      return ussubscribe;
    }
    setLoading(false);
  });
  const value = {
    currentUser,
    signup,
    login,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
