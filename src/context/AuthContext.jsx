import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Determine role
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const companyDoc = await getDoc(doc(db, "companies", user.uid));
        if (userDoc.exists()) setCurrentUser({ uid: user.uid, ...userDoc.data() });
        else if (companyDoc.exists()) setCurrentUser({ uid: user.uid, ...companyDoc.data() });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{!loading && children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
