import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const {
  VITE_FIREBASE_API_KEY: apiKey,
  VITE_FIREBASE_AUTH_DOMAIN: authDomain,
  VITE_FIREBASE_PROJECT_ID: projectId,
  VITE_FIREBASE_BUCKET: storageBucket,
  VITE_FIREBASE_SENDER_ID: messagingSenderId,
  VITE_FIREBASE_APP_ID: appId,
} = import.meta.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
