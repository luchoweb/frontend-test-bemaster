import { ReactNode, useContext } from "react";
import { Navigate, ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Loader } from ".";

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const { user, isLoading } = useContext(AuthContext);

  if (!isLoading && !user) {
    return <Navigate to="/" replace />;
  }

  return isLoading ? (
    <Loader fullscreen={true} />
  ) : (
    <>
      {children}
      <ScrollRestoration />
    </>
  );
};

export default PrivateRoute;
