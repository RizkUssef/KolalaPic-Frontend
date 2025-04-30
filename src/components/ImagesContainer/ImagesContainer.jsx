import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useInteractions from "../../Hooks/useInteractions";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { AuthContext } from "../../context/Auth";
import { SuccessMsgContext } from "../../context/SuccessMsg";
import { ErrorMsgContext } from "../../context/ErrorMsg";
import SearchResult from "../SearchResult/SearchResult";

export default function ImagesContainer({ catName, data }) {
  const { setInteractions } = useInteractions();
  const [hide, setHide] = useState(true);
  const { auth } = useContext(AuthContext);
  const [ allData, setAllData ] = useState();
  const [ searchName, setSearchName ] = useState();
  // const { setSuccessMsg } = useContext(SuccessMsgContext);
  // const { setErrorMsg } = useContext(ErrorMsgContext);
  const handleClick = async (count, func, id) => {
    await setInteractions(count, func, id);
  };

  const searchData = {
    search_input: "",
  };

  function searchHandle(values) {
    axios
      .post(
        `http://localhost/KolalaPic/public/apiSearch/SearchHandle`,
        values,
        {
          withCredentials: true,
          headers: {
            tkn: auth,
          },
        }
      )
      .then((res) => {
        setAllData(res.data);
        setSearchName(searchFormik.values.search_input)
      })
      .catch((res) => {
        console.log(res);
      });
  }
  const searchFormik = useFormik({
    initialValues: searchData,
    enableReinitialize: true,
    onSubmit: searchHandle,
    validationSchema: yup.object().shape({
      search_input: yup
        .string("search input must be string")
        .required("search input is required"),
    }),
  });
  return (
    <>
      {allData ? (
        <SearchResult catName={searchName} data={allData} />
      ) : (
        <section
          id="like_more"
          className="w-[80%] like mx-auto header-color secondary-font py-10  transition-all duration-500"
        >
          <div className="flex justify-between items-center ">
            <h1 className="base-font text-[50px]">{catName}</h1>
            <form
              action=""
              method="post"
              onSubmit={searchFormik.handleSubmit}
              className="font-secondary flex justify-center items-center"
            >
              <input
                id="search_input"
                type="text"
                onChange={searchFormik.handleChange}
                onBlur={searchFormik.handleBlur}
                value={searchFormik.values.search_input}
                className={`${
                  hide ? "hidden " : "inline-block "
                } text-headers font-secondary text-xl bg-white rounded-xl focus:outline-none focus:border-2 focus:border-headers p-3`}
              />
              <button
                id="search_btn"
                type="submit"
                className="text-lg lg:p-4 lg:text-xl slider_btn"
              >
                <i
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setHide(false);
                  }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </button>
            </form>
          </div>
          <div
            id="all"
            className="columns-2 text-[#B3C8CF] mt-5 lg:columns-3 xl:columns-4 text-bg font-secondary "
          >
            {data?.map((data) => (
              <Link
                key={data._id.$oid}
                className="mb-5"
                to={`/one photo/${data._id.$oid}`}
              >
                <div className="relative mb-5 image_container cursor-pointer img_to_go block">
                  <img
                    src={`http://localhost/KolalaPic/public/uploads/${data.file}`}
                    className="rounded-xl w-full"
                    alt="img"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                      <div className="w-[80%] flex justify-start gap-3 items-center">
                        <img
                          src={`http://localhost/KolalaPic/public/uploads/${data.file}`}
                          className="rounded-full object-cover max-h-[40px] w-[40px]"
                          alt="img"
                        />
                        <h3 className="capitalize">{data.auther}</h3>
                      </div>
                      <i
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleClick("apiSave", "save", data._id.$oid);
                        }}
                        className="fa-regular fa-bookmark save cursor-pointer"
                      ></i>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                      <div>
                        <h3 className="text-2xl capitalize">{data.title}</h3>
                      </div>
                      <div>
                        <i className="fa-solid fa-share share mr-3"></i>
                        <i
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleClick("apiLove", "love", data._id.$oid);
                          }}
                          className="fa-regular fa-heart heart cursor-pointer"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* <p>{data.title}</p> */}
        </section>
      )}
    </>
  );
}
