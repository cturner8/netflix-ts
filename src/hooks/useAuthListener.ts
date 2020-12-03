import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { FirebaseUser } from "../lib/firebase";

export const useAuthListener = () => {
  const authUser = localStorage.getItem("authUser");
  const [user, setUser] = useState<FirebaseUser>(
    authUser ? JSON.parse(authUser) : null
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const userDetails = {
          displayName: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
          uid: authUser.uid,
        };

        localStorage.setItem("authUser", JSON.stringify(userDetails));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
};
