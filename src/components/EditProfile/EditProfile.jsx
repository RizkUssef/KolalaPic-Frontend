import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCsrf from "../../Hooks/useCsrf";
import axios from "axios";
import * as yup from "yup";
import { AuthContext } from "../../context/Auth";
import { useFormik } from "formik";
import { InfinitySpin } from "react-loader-spinner";
import useUserData from "../../Hooks/useUserData";
import { SuccessMsgContext } from "../../context/SuccessMsg";

export default function EditProfile() {
  const { auth } = useContext(AuthContext);
  const [isCliked, setIsCliked] = useState(false);
  const UserData = useUserData();
  const { setSuccessMsg } = useContext(SuccessMsgContext);
  const nav = useNavigate();

  // console.log();
  
  const edit_csrf = useCsrf(
    "http://localhost/KolalaPic/public/apiEditProfile/editProfileCsrf"
  );

  // 1. create initail values object
  const editData = {
    name: "",
    user_image: UserData?.name,
    csrf_editProfile: edit_csrf,
  };
  // 2. create the handle upload fun that call the api
  function handleEdit(values) {
    setIsCliked(true);
    axios
      .post(
        `http://localhost/KolalaPic/public/apiEditProfile/editProfile`,
        values,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
            tkn: auth,
          },
        }
      )
      .then((res) => {
        setIsCliked(false);
        setSuccessMsg(res.data.success)
        nav("/profile")
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }
  // 3. create the useformik with yup vaildation
  const image_size = 1024 * 1024 * 5;
  const image_types = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];
  const EditForm = useFormik({
    initialValues: editData,
    onSubmit: handleEdit,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      name: yup.string("Name must be string").required("Name is Required"),
      user_image: yup
        .mixed()
        .test("fileSize", "too large file", (value) => {
          return value && value.size <= image_size;
        })
        .test("fileType", "unkown file format", (value) => {
          return value && image_types.includes(value.type);
        }),
    }),
  });

  return (
    <>
      <section
        id="profile"
        className="profile block h-[100vh] py-10  pt-[100px] w-[90%] mx-auto secondary-font header-color"
      >
        <div className="flex justify-between items-center mb-20">
          <h1 className="base-font text-[50px]">Edit Profile</h1>
        </div>
        <div className="mt-10 w-1/2 mx-auto  bg-white p-10 rounded-2xl drop-shadow-main">
          {/* 4. connect the from with the useformik using the const that returned from the useformik */}
          <form
            onSubmit={EditForm.handleSubmit}
            method="POST"
            className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500"
          >
            <div className="self-start relative w-24 h-24 mb-3">
              <img
                src={`http://localhost/KolalaPic/public/uploads/Users/${UserData?.image}`}
                className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-white"
                alt="user image"
              />
              <label
                htmlFor="file"
                className="cursor-pointer absolute top-[88%] left-[88%] -translate-x-1/2 -translate-y-1/2"
              >
                <i className="fa-solid fa-camera-retro text-xl p-2 bg-bg border-4 border-white rounded-full hover:bg-white transition-all duration-500"></i>
              </label>
              <input
                className="hidden"
                type="file"
                name="user_image"
                id="file"
                // to handle the upload the file
                onChange={(event) => {
                  EditForm.setFieldValue(
                    "user_image",
                    event.currentTarget.files[0]
                  );
                }}
                onBlur={EditForm.handleBlur}
                // value={EditForm.values.image}
              />
              {EditForm.errors.user_image && EditForm.touched.user_image ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {EditForm.errors.user_image}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" for="name">
                Name
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="name"
                name="name"
                id="name"
                onChange={EditForm.handleChange}
                onBlur={EditForm.handleBlur}
                value={EditForm.values.name}
              />
              {EditForm.errors.name && EditForm.touched.name ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {EditForm.errors.name}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <input
              type="hidden"
              name="csrf_editProfile"
              onChange={EditForm.handleChange}
              onBlur={EditForm.handleBlur}
              value={EditForm.values.csrf_editProfile}
            />
            <Link className="self-end" to="/change password">
              Change Password?
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
