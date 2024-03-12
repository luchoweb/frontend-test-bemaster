const commonErrors = [
  {
    code: "auth/invalid-credential",
    message: "Incorrect email or password.",
  },
  {
    code: "general",
    message: "An unexpected error has ocurred, please try again.",
  },
  {
    code: "invalid-email",
    message: "Please check your email.",
  },
  {
    code: "invalid-password",
    message: "Please enter your password.",
  },
];

export const errorTranslate = (error: string) => {
  const getError = commonErrors.find((err) => err.code === error);
  return getError?.message ?? "Error unknown!";
};
