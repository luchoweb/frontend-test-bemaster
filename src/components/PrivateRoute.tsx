import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
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

  return isLoading ? <Loader type="screen" /> : children;
};

export default PrivateRoute;
