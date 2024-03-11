import { ReactNode, useContext } from "react";
import { Navigate, ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Loader } from ".";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const { user, isLoading } = useContext(AuthContext);

  if (!isLoading && !user) {
    return <Navigate to="/" replace />;
  }

  return isLoading ? (
    <Loader type="screen" />
  ) : (
    <>
      {children}
      <ScrollRestoration />
    </>
  );
};

export default PrivateRoute;
