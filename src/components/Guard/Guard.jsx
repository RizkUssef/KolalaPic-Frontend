import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate } from "react-router-dom";

export default function Guard({ children }) {
  const { auth } = useContext(AuthContext);
  if (auth == null || localStorage.getItem("user_token") == null) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}
