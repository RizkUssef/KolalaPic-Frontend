import React, { useContext, useState } from "react";
import useCsrf from "../../Hooks/useCsrf";
import axios from "axios";
import * as yup from "yup";
import { AuthContext } from "../../context/Auth";
import { useFormik } from "formik";
import { InfinitySpin } from "react-loader-spinner";
import { SuccessMsgContext } from "../../context/SuccessMsg";
import { ErrorMsgContext } from "../../context/ErrorMsg";

export default function ForgotPassword() {
  const { auth } = useContext(AuthContext);
  const [isCliked, setIsCliked] = useState(false);
    const { setSuccessMsg } = useContext(SuccessMsgContext);
    const { setErrorMsg } = useContext(ErrorMsgContext);

  const csrf_forget_pass = useCsrf(
    "http://localhost/KolalaPic/public/apiForgetPassword/csrfForget"
  );

  const ForgetData = {
    email: "",
    csrf_forget: csrf_forget_pass,
  };
  function forgetHandle(values) {
    setIsCliked(true);
    axios
      .post(
        `http://localhost/KolalaPic/public/apiForgetPassword/forgetPasswordHandle`,
        values,
        {
          withCredentials: true,
          headers: {
            tkn: auth,
          },
        }
      )
      .then((res) => {
        setIsCliked(false)
        setSuccessMsg(res.data.success)
      })
      .catch((res) => {
        setErrorMsg(res.response.data.error)
      });
  }
  const forgetFormik = useFormik({
    initialValues: ForgetData,
    onSubmit: forgetHandle,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("enter vaild email")
        .required("email is required"),
    }),
  });
  return (
    <>
      <section
        id="profile"
        className="profile block h-[100vh] py-10  pt-[100px] w-[90%] mx-auto secondary-font header-color"
      >
        <div className="flex justify-between items-center mb-20">
          <h1 className="base-font text-[50px]">Forget Password</h1>
        </div>
        <div className="mt-10 w-1/2 mx-auto  bg-white p-10 rounded-2xl ">
          <form
            className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500"
            method="post"
            onSubmit={forgetFormik.handleSubmit}
          >
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" for="email">
                Email
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="email"
                name="email"
                id="email"
                onChange={forgetFormik.handleChange}
                onBlur={forgetFormik.handleBlur}
                value={forgetFormik.values.email}
              />
              <input
                type="hidden"
                name="csrf_forget"
                onChange={forgetFormik.handleChange}
                onBlur={forgetFormik.handleBlur}
                value={forgetFormik.values.csrf_forget}
              />
              {forgetFormik.errors.email && forgetFormik.touched.email ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {forgetFormik.errors.email}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="self-end mt-3">
              <button
                className="transition-all duration-500 base-bg px-3 py-2 cursor-pointer rounded-2xl btn-submit"
                type="submit"
                name="submit"
              >
                {isCliked ? (
                  <div className="flex justify-center items-center">
                    <InfinitySpin
                      visible={true}
                      width="80"
                      color="#F1F0E8"
                      ariaLabel="infinity-spin-loading"
                    />
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
