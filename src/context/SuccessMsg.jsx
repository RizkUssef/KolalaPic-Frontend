import React, { createContext } from 'react'
import { useState } from 'react';

export const SuccessMsgContext = createContext()
export default function SuccessMsg({children}) {
    const [successMsg,setSuccessMsg] = useState(null)
  return (
    <SuccessMsgContext.Provider value={{successMsg,setSuccessMsg}}>
        {children}
    </SuccessMsgContext.Provider>
  )
}
