import React, { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();
export default function Auth({ children }) {
  const [auth, setAuth] = useState();
  const tkn = localStorage.getItem("user_token");
  useEffect(() => {
    if (tkn) {
      setAuth(tkn);
    }
  }, []);
  // if (tkn) {

  // } else {
  //   return <Navigate to="/login" />;
  // }
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
