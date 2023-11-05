/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation();

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace />;
    
};

export default PrivateRoute;