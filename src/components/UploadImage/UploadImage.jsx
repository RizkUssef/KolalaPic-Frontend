import React, { useState } from "react";
import useCsrf from "../../Hooks/useCsrf";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { InfinitySpin } from "react-loader-spinner";

export default function UploadImage() {
  const [isCliked, setIsCliked] = useState(false);

  const upload_csrf = useCsrf(
    "http://localhost/KolalaPic/public/apiUploadImage/uploadCsrf"
  );
  // console.log(upload_csrf);
  //   1. create initail values object
  const uploadData = {
    file_name: "",
    file: null, // better to be null not ""
    upload_csrf: upload_csrf,
    description: "",
    auther: "",
    category: "",
    sub_category: "",
  };
  // 2. create the handle upload fun that call the api
  function handleUpload(values) {
    setIsCliked(true);
    axios
      .post(`http://localhost/KolalaPic/public/apiUploadImage/upload`, values, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      })
      .then((res) => {
        setIsCliked(true);
        console.log(UploadForm.values);
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  // 3. create the useformik with yup vaildation
  const file_size = 1024 * 1024 * 5;
  const file_types = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];
  const cates = ["animals", "football", "dark", "couples", "calm"];
  const UploadForm = useFormik({
    initialValues: uploadData,
    onSubmit: handleUpload,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      file_name: yup
        .string("File name must be String")
        .required("File Name is Required"),
      file: yup
        .mixed()
        .required("you must upload file")
        .test("fileSize", "too large file", (value) => {
          console.log(value);
          return value && value.size <= file_size;
        })
        .test("fileType", "unkown file format", (value) => {
          console.log(value);
          return value && file_types.includes(value.type);
        }),
      description: yup.string().required("description is required"),
      auther: yup
        .string("auther must be string")
        .required("auther is required"),
      category: yup
        .string("category must string")
        .required("category is required")
        .test("cates", "invaild category name", (value) => {
          return value && cates.includes(value);
        }),
      sub_category: yup
        .string("subcategory must be string")
        .required("subcategory is required"),
    }),
  });

  return (
    <>
      <section
        id="profile"
        className="profile block  py-10  pt-[100px] w-[90%] mx-auto secondary-font header-color"
      >
        <div className="flex justify-between items-center mb-10">
          <h1 className="base-font text-[50px]">Uploade File</h1>
        </div>
        <div className="mt-10 w-1/2 mx-auto  bg-white p-10 rounded-2xl drop-shadow-main">
          {/* 4. connect the form with the useformik using the const that returned from the useformik */}

          <form
            onSubmit={UploadForm.handleSubmit}
            method="POST"
            className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500"
          >
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="filename">
                File Name
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="name"
                name="file_name"
                id="filename"
                onChange={UploadForm.handleChange}
                onBlur={UploadForm.handleBlur}
                value={UploadForm.values.file_name}
              />
              {UploadForm.errors.file_name && UploadForm.touched.file_name ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {UploadForm.errors.file_name}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <input
              type="hidden"
              // value={upload_csrf}
              name="upload_csrf"
              onChange={UploadForm.handleChange}
              onBlur={UploadForm.handleBlur}
              value={UploadForm.values.upload_csrf}
            />
            <label className="text-2xl text-primary" htmlFor="">
              File
            </label>
            <input
              type="file"
              name="file"
              className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-white file:text-headers file:text-secondary cursor-pointer file:cursor-pointer hover:file:bg-violet-100 bg-[#fff]"
              // onChange={UploadForm.handleChange}
              onChange={(event) => {
                UploadForm.setFieldValue("file", event.currentTarget.files[0]);
              }}
              onBlur={UploadForm.handleBlur}
              // value={UploadForm.values.file}  this for make it able to upload image and not control the file input
            />

            {UploadForm.errors.file && UploadForm.touched.file ? (
              <div>
                <p className="text-red-900 text-lg capitalize">
                  {UploadForm.errors.file}
                </p>
              </div>
            ) : (
              ""
            )}
            <label className="text-2xl  text-primary" htmlFor="">
              Description
            </label>
            <textarea
              className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
              name="description"
              id=""
              onChange={UploadForm.handleChange}
              onBlur={UploadForm.handleBlur}
              value={UploadForm.values.description}
            ></textarea>
            {UploadForm.errors.description && UploadForm.touched.description ? (
              <div>
                <p className="text-red-900 text-lg capitalize">
                  {UploadForm.errors.description}
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="auther">
                Auther
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="name"
                name="auther"
                id="auther"
                onChange={UploadForm.handleChange}
                onBlur={UploadForm.handleBlur}
                value={UploadForm.values.auther}
              />
              {UploadForm.errors.auther && UploadForm.touched.auther ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {UploadForm.errors.auther}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <label className="w-full" htmlFor="subcat">
                Sub Category
              </label>
              <input
                className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                type="name"
                name="sub_category"
                id="subcat"
                onChange={UploadForm.handleChange}
                onBlur={UploadForm.handleBlur}
                value={UploadForm.values.sub_category}
              />
              {UploadForm.errors.sub_category &&
              UploadForm.touched.sub_category ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {UploadForm.errors.sub_category}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <label className="text-2xl  text-primary" htmlFor="category">
              Category
            </label>
            <select
              className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers  selection:bg-secondary"
              name="category"
              id="category"
              onChange={UploadForm.handleChange}
              onBlur={UploadForm.handleBlur}
              value={UploadForm.values.category}
            >
              {UploadForm.errors.category && UploadForm.touched.category ? (
                <div>
                  <p className="text-red-900 text-lg capitalize">
                    {UploadForm.errors.category}
                  </p>
                </div>
              ) : (
                ""
              )}
              <option defaultValue="animals">animals</option>
              <option defaultValue="calm">calm</option>
              <option defaultValue="couples">couples</option>
              <option defaultValue="dark">dark</option>
              <option defaultValue="football">football</option>
            </select>
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
