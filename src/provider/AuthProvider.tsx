import { useEffect, useState, ReactNode } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebase/setup";
import { AuthContext } from "../context/AuthContext";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [setUser]);

  const value = {user, isLoading};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
