import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, isOtpVerified } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!isOtpVerified) {
    return <Navigate to="/otp" replace />;
  }
  return children;
};

export default ProtectedRoute;










