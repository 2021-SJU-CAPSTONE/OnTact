import { auth, store } from "../firebase";

export const getUserInfo = async (uid: string) => {
  const user = await store.collection("User").doc(uid).get();
  return user.data();
};

export const getCurrentUserUid = () => {
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    return user;
  }
  return "not login";
};
