import React, { useContext } from "react";
import { SuccessMsgContext } from "../../context/SuccessMsg";
import { TypeAnimation } from "react-type-animation";
import { ErrorMsgContext } from "../../context/ErrorMsg";

export default function Alert() {
  const { successMsg, setSuccessMsg } = useContext(SuccessMsgContext);
    const {errorMsg, setErrorMsg} = useContext(ErrorMsgContext);
  if (successMsg) {
    setTimeout(() => {
        setSuccessMsg(null);
    },3000)
    return (
        <div className="success-container secondary-font text-2xl px-10 py-3 rounded-2xl w-full mx-auto">
            <p className="capitalize">{successMsg}</p>
        </div>
    );
  }

  if (errorMsg) {
    setTimeout(() => {
        setErrorMsg(null);
    },3000)
    return (
        <div className="error-container secondary-font text-2xl px-10 py-3 rounded-2xl w-full mx-auto">
            <p className="capitalize">{errorMsg}</p>
        </div>
    );
  }


}
