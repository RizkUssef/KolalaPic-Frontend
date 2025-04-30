import React, { useContext, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { AuthContext } from "../../context/Auth";
import { useFormik } from "formik";
import { InfinitySpin } from "react-loader-spinner";
import { ErrorMsgContext } from "../../context/ErrorMsg";
import { SuccessMsgContext } from "../../context/SuccessMsg";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const { auth } = useContext(AuthContext);
  const [isCliked, setIsCliked] = useState(false);
  const { setSuccessMsg } = useContext(SuccessMsgContext);
  const { setErrorMsg } = useContext(ErrorMsgContext);
  const { reset } = useParams();
  const nav = useNavigate();

  const ForgetData = {
    password: "",
    confirm_password: "",
    csrf_reset: reset,
  };
  function resetHandle(values) {
    setIsCliked(true);
    axios
      .post(
        `http://localhost/KolalaPic/public/apiForgetPassword/resetPasswordHandle`,
        values,
        {
          withCredentials: true,
          headers: {
            tkn: auth,
          },
        }
      )
      .then((res) => {
        setIsCliked(false);
        setSuccessMsg(res.data.success);
        nav("/profile");
      })
      .catch((res) => {
        setErrorMsg(res.response.data.error);
      });
  }
  const resetFormik = useFormik({
    initialValues: ForgetData,
    onSubmit: resetHandle,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      password: yup.string().required("email is required"),
      confirm_password: yup.string().required("email is required"),
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
            onSubmit={resetFormik.handleSubmit}
          >
            <input
              type="hidden"
              name="csrf_reset"
              onChange={resetFormik.handleChange}
              onBlur={resetFormik.handleBlur}
              value={resetFormik.values.csrf_reset}
            />
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" for="password">
                Password
              </label>

              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="password"
                id="password"
                onChange={resetFormik.handleChange}
                onBlur={resetFormik.handleBlur}
                value={resetFormik.values.password}
              />
              {resetFormik.errors.password && resetFormik.touched.password ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {resetFormik.errors.password}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" for="password">
                Confirm Password
              </label>

              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="confirm_password"
                id="confirm_password"
                onChange={resetFormik.handleChange}
                onBlur={resetFormik.handleBlur}
                value={resetFormik.values.confirm_password}
              />
              {resetFormik.errors.confirm_password &&
              resetFormik.touched.confirm_password ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {resetFormik.errors.confirm_password}
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
