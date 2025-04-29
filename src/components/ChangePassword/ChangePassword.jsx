import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import useCsrf from "../../Hooks/useCsrf";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { InfinitySpin } from "react-loader-spinner";
import { ErrorMsgContext } from "../../context/ErrorMsg";
import { SuccessMsgContext } from "../../context/SuccessMsg";

export default function ChangePassword() {
  const { auth } = useContext(AuthContext);
  const [isCliked, setIsCliked] = useState(false);
  const { setSuccessMsg } = useContext(SuccessMsgContext);
  const { setErrorMsg } = useContext(ErrorMsgContext);
  const nav = useNavigate();
  const csrf_change_password = useCsrf(
    "http://localhost/KolalaPic/public/apiChangePassword/changePasswordCsrf"
  );

  const changePass = {
    old_password: "",
    new_password: "",
    confirm_password: "",
    csrf_change_password: csrf_change_password,
  };

  function changePasswordHandle(values) {
    setIsCliked(true)
    return axios
      .post(`http://localhost/KolalaPic/public/apiChangePassword/changePassword`,values , {
        withCredentials: true,
        headers: {
          tkn: auth,
        },
      })
      .then((res) => {
        setIsCliked(false)
        setSuccessMsg(res.data.success)
        nav("/profile")
      })
      .catch((res) => {
        setErrorMsg(res.response.data.error);
      });
  }

  const changePasswordForm = useFormik({
    initialValues: changePass,
    onSubmit: changePasswordHandle,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      old_password: yup.string().required("you must enter your old password"),
      new_password: yup.string().required("enter your new password"),
      confirm_password: yup
        .string()
        .required("you must confirm your new password"),
    }),
  });

  return (
    <>
      <section
        id="profile"
        className="profile block h-[100vh] py-10 mb-10  pt-[100px] w-[90%] mx-auto secondary-font header-color"
      >
        <div className="flex justify-between items-center mb-10">
          <h1 className="base-font text-[50px]">Change Password</h1>
        </div>
        <div className=" w-1/2 mx-auto  bg-white p-10 rounded-2xl drop-shadow-main">
          <form
            className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500"
            onSubmit={changePasswordForm.handleSubmit}
            method="post"
          >
            <input
              type="hidden"
              name="csrf_change_password"
              onChange={changePasswordForm.handleChange}
              onBlur={changePasswordForm.handleBlur}
              value={changePasswordForm.values.csrf_change_password}
            />
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" for="password">
                Old Password
              </label>

              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="old_password"
                id="old_password"
                onChange={changePasswordForm.handleChange}
                onBlur={changePasswordForm.handleBlur}
                value={changePasswordForm.values.old_password}
              />
              {changePasswordForm.errors.old_password &&
              changePasswordForm.touched.old_password ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {changePasswordForm.errors.old_password}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" for="password">
                New Password
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="new_password"
                id="new_password"
                onChange={changePasswordForm.handleChange}
                onBlur={changePasswordForm.handleBlur}
                value={changePasswordForm.values.new_password}
              />
              {changePasswordForm.errors.new_password &&
              changePasswordForm.touched.new_password ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {changePasswordForm.errors.new_password}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" for="password">
                New Password Confirmation
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="password"
                name="confirm_password"
                id="confirm_password"
                onChange={changePasswordForm.handleChange}
                onBlur={changePasswordForm.handleBlur}
                value={changePasswordForm.values.confirm_password}
              />
              {changePasswordForm.errors.confirm_password &&
              changePasswordForm.touched.confirm_password ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {changePasswordForm.errors.confirm_password}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <Link to="/forget password" className="self-end">
              Forget Password?
            </Link>

            <div className="self-end mt-3">
              <button
                className="cursor-pointer transition-all duration-500 base-bg px-3 py-2 rounded-2xl btn-submit"
                type="submit"
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
