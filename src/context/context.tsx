import { createContext, useState, useEffect, useContext } from "react";
import firebase from "firebase/app";
import { auth } from "../database";

type User = firebase.User | null;
type ContextState = {
  user: User;
  logout: () => void;
};

export const AuthContext = createContext<ContextState | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(() =>
    JSON.parse(localStorage.getItem("authUser") || "{}")
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    auth.signOut();
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useFirebaseAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  const { user, logout } = context;
  return { user, logout };
}

export { useFirebaseAuth };
