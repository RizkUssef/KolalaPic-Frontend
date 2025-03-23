import React, { useContext, useState } from "react";
import Alert from "../Alert/Alert";
import { useNavigate, useOutletContext } from "react-router-dom";
import useCsrf from "../../Hooks/useCsrf";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { InfinitySpin } from "react-loader-spinner";
import ErrorMsg, { ErrorMsgContext } from "../../context/ErrorMsg";
import { SuccessMsgContext } from "../../context/SuccessMsg";

export default function Login() {
  // const { Alert } = useOutletContext();
  //   const {loginCsrf,setLoginCsrf} = useState(null)
  const nav = useNavigate();
    const {successMsg,setSuccessMsg} = useContext(SuccessMsgContext);  
  const { errorMsg, setErrorMsg } = useContext(ErrorMsgContext);
  const [isCliked, setIsCliked] = useState(false);
  const csrf_login = useCsrf(
    "http://localhost/KolalaPic/public/apiLogin/loginCsrf"
  );
  //   console.log(csrf_login);
  const loginData = {
    email: "",
    password: "",
    csrf_login: csrf_login,
  };
  function loginHandle(data) {
    setIsCliked(true);
    axios
      .post("http://localhost/KolalaPic/public/apiLogin/loginHandle", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setIsCliked(false);
        setSuccessMsg("Welcome Back")
        localStorage.setItem("user_token", res.data.user_token);
        // setTimeout(()=> {
            nav("/")
        // },500)
      })
      .catch((res) => {
        setErrorMsg(res.response.data.error);
        setIsCliked(false);
      });
  }
  const LoginForm = useFormik({
    initialValues: loginData,
    onSubmit: loginHandle,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("enter vaild email")
        .required("email field is required"),
      password: yup.string().required("password field is required"),
    }),
  });
  return (
    <>
      <section className="base-font text-5xl header-color w-1/2 mx-auto flex justify-center items-center flex-col h-screen">
        <h1 className="self-start mb-5">Login</h1>
        <Alert />
        <div className="mt-5 w-full  bg-white p-10 rounded-2xl">
          <form
            onSubmit={LoginForm.handleSubmit}
            className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500"
            method="post"
            id="login_form"
          >
            <input
              type="hidden"
              name="csrf_login"
              id="csrf_login"
              onChange={LoginForm.handleChange}
              onBlur={LoginForm.handleBlur}
              value={LoginForm.values.csrf_login}
            />
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="email">
                Email
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="email"
                name="email"
                id="email"
                onChange={LoginForm.handleChange}
                onBlur={LoginForm.handleBlur}
                value={LoginForm.values.email}
              />
              {LoginForm.errors.email && LoginForm.touched.email ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {LoginForm.errors.email}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="password">
                Password
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="password"
                id="password"
                onChange={LoginForm.handleChange}
                onBlur={LoginForm.handleBlur}
                value={LoginForm.values.password}
              />
              {LoginForm.errors.password && LoginForm.touched.password ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {LoginForm.errors.password}
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
