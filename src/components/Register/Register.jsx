import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { FidgetSpinner, InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
// import { SuccessMsgContext } from "../../context/SuccessMsg";
import { SuccessMsgContext } from "./../../context/SuccessMsg";
import { ErrorMsgContext } from "../../context/ErrorMsg";
import useCsrf from "../../Hooks/useCsrf";

export default function Register() {
  const { setSuccessMsg } = useContext(SuccessMsgContext);
  // const { errorMsg, setErrorMsg } = useContext(ErrorMsgContext);
  const nav = useNavigate();
  const [isCliked, setIsCliked] = useState(false);
  //   7. create state to store errors
  const [error, setError] = useState(null);
  // ---  get the csrf hidden input {create custom hook to get the csrf}
  const csrf_reg = useCsrf(
    "http://localhost/KolalaPic/public/apiRegister/registerCsrf"
  );
  //   1. create initail values object
  const regData = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    csrf_register: csrf_reg,
  };
  // 2. create the handle reg fun that call the api
  function regHandle(data) {
    setIsCliked(true);
    axios
      .post(
        "http://localhost/KolalaPic/public/apiRegister/registerHandle",
        data,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setIsCliked(false);
        setSuccessMsg(res.data.success);
        nav("/login");
      })
      .catch((res) => {
        setError(res.response.data);
        setIsCliked(false);
      });
  }
  // 3. create the useformik with yup vaildation
  const RegForm = useFormik({
    initialValues: regData,
    onSubmit: regHandle,
    enableReinitialize: true, // this is sooooooooooooooooooooooooo importent when need to send hidden csrf
    validationSchema: yup.object().shape({
      name: yup.string().required("name field is required"),
      email: yup
        .string()
        .required("email field is required")
        .email("enter vaild email"),
      password: yup.string().required("password field is required"),
      password_confirmation: yup
        .string()
        .required("password_confirmation field is required")
        .oneOf([yup.ref("password")], "password must be confirmed"),
    }),
  });

  return (
    <>
      <section className="base-font text-5xl header-color w-1/2 mx-auto flex justify-center items-center flex-col h-screen">
        <h1 className="self-start mb-8">Register</h1>
        {error ? (
          <div className="w-full mx-auto secondary-font capitalize text-red-100 bg-red-800 p-2 text-2xl rounded-2xl">
            <p>{error}</p>
          </div>
        ) : (
          ""
        )}
        <div className="w-full mx-auto  bg-white p-8 rounded-2xl">
          {/* 4. connect the form with the useformik using the const that returned from the useformik */}
          <form
            onSubmit={RegForm.handleSubmit}
            className=" text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500"
            method="POST"
            id="reg_form"
          >
            <input
              id="csrf_register"
              type="hidden"
              name="csrf_register"
              onChange={RegForm.handleChange}
              onBlur={RegForm.handleBlur}
              value={RegForm.values.csrf_register}
            />
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="">
                Name
              </label>
              <input
                //   5. connect each input with the values in formik
                onChange={RegForm.handleChange}
                onBlur={RegForm.handleBlur}
                value={RegForm.values.name}
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="text"
                name="name"
                id="name"
              />
              {/* 6. handle the vaildation error on each input */}
              {RegForm.errors.name && RegForm.touched.name ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {RegForm.errors.name}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="">
                Email
              </label>
              <input
                onChange={RegForm.handleChange}
                onBlur={RegForm.handleBlur}
                value={RegForm.values.email}
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="email"
                name="email"
                id="email"
              />
              {RegForm.errors.email && RegForm.touched.email ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {RegForm.errors.email}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="">
                Password
              </label>
              <input
                onChange={RegForm.handleChange}
                onBlur={RegForm.handleBlur}
                value={RegForm.values.password}
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="password"
                id="password"
              />
              {RegForm.errors.password && RegForm.touched.password ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {RegForm.errors.password}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="">
                Password Confirmation
              </label>
              <input
                onChange={RegForm.handleChange}
                onBlur={RegForm.handleBlur}
                value={RegForm.values.password_confirmation}
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="password_confirmation"
                id="password_confirmation"
              />
              {RegForm.errors.password_confirmation &&
              RegForm.touched.password_confirmation ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {RegForm.errors.password_confirmation}
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
