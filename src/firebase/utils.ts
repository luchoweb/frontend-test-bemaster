import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./setup";

interface Props {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: Props) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    if(credentials?.user) {
      // Sign in!
      location.assign("/home");
    }
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  await auth.signOut();
};
