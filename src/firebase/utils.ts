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

export const errorTranslate = (error: string) => {
  const commonErrors = [
    {
      code: "auth/invalid-credential",
      message: "Please check your credentials and try again.",
    },
    {
      code: "general",
      message: "An unexpected error has ocurred, please try again.",
    },
  ];

  const getError = commonErrors.find((err) => err.code === error);

  return getError?.message ?? "Error unknown!";
};
