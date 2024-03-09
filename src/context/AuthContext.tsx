import { createContext } from "react";
import { User } from "firebase/auth";

interface ContextProps {
  user: User | null | undefined;
  isLoading: boolean;
}

export const AuthContext = createContext<ContextProps>({ user: null, isLoading: true });
