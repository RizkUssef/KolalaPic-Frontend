  import axios from "axios";
  import React, { createContext, useEffect, useState } from "react";
  import { Navigate } from "react-router-dom";
  import { ErrorMsgContext } from "./ErrorMsg";

  export const AuthContext = createContext();
  export default function Auth({ children }) {
    const [auth, setAuth] = useState(() => localStorage.getItem("user_token"));
    const [authCheck, setAuthCheck] = useState(null);
    
    const tkn = localStorage.getItem("user_token");
    async function checkAuth() {
      await axios
        .get(`http://localhost/KolalaPic/public/apiLogout/checkAuth`, {
          withCredentials: true,
          headers: {
            tkn: auth,
          },
        })
        .then((res) => {
          setAuthCheck(res.data.Auth);
        })
        .catch((res) => {
          console.log(res.response.data.error);
        });
    }
    useEffect(() => {
      if (tkn) {
        checkAuth();
      } else {
        setAuthCheck(false); // explicitly set false
      }
    }, []);
    useEffect(() => {
          if (authCheck === true) {
            // console.log(`${authCheck} if scop`);
            setAuth(tkn);
          }else if(authCheck === false) {
            setAuth(null);
            // console.log(`${authCheck} else scop`);
            localStorage.removeItem("user_token");
          }
    }, [authCheck]);

    return (
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
  }
