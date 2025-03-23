import React, { createContext, useState } from "react";

export const ErrorMsgContext = createContext();
export default function ErrorMsg({ children }) {
  const [errorMsg, setErrorMsg] = useState();
  return (
    <>
      <ErrorMsgContext.Provider value={{ errorMsg, setErrorMsg }}>
        {children}
      </ErrorMsgContext.Provider>
    </>
  );
}
