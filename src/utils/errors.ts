const commonErrors = [
  {
    code: "auth/invalid-credential",
    message: "Please check your credentials.",
  },
  {
    code: "general",
    message: "An unexpected error has ocurred, please try again.",
  },
  {
    code: "invalid-email",
    message: "Please check your email.",
  },
];

export const errorTranslate = (error: string) => {
  const getError = commonErrors.find((err) => err.code === error);
  return getError?.message ?? "Error unknown!";
};
