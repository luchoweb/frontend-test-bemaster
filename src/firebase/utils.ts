import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "./setup";

interface Props {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: Props) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return {
      error: false,
      email: credentials?.user?.email,
    };
  } catch (error) {
    return {
      error: true,
      code: (error as AuthError).code,
    };
  }
};

export const signOut = async () => {
  await auth.signOut();
};
