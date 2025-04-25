import React, { useContext } from "react";
import { SuccessMsgContext } from "../../context/SuccessMsg";
import { TypeAnimation } from "react-type-animation";
import { ErrorMsgContext } from "../../context/ErrorMsg";

export default function Alert() {
  const { successMsg, setSuccessMsg } = useContext(SuccessMsgContext);
  const { errorMsg, setErrorMsg } = useContext(ErrorMsgContext);
  if (successMsg) {
    setTimeout(() => {
      setSuccessMsg(null);
    }, 3000);
    return (
      <div className="fixed w-full h-screen bg-[rgba(0,0,0,0.9)] z-[9999999]">
        <div className="absolute inset-0 flex justify-center items-center z-[99999]">
          <div className="success-container secondary-font text-2xl px-10 py-3 rounded-2xl mx-auto">
            <p className="capitalize">{successMsg}</p>
          </div>
        </div>
      </div>
    );
  }

  if (errorMsg) {
    setTimeout(() => {
      setErrorMsg(null);
    }, 3000);
    return (
      <div className="fixed w-full h-screen bg-[rgba(0,0,0,0.9)] z-[999999]">
        <div className="absolute inset-0 flex justify-center items-center z-[99999]">
          <div className="error-container secondary-font text-2xl px-10 py-3 rounded-2xl mx-auto">
            <p className="capitalize">{errorMsg}</p>
          </div>
        </div>
      </div>
    );
  }
}
