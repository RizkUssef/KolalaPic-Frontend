import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { AuthContext } from "../../context/Auth";
import { InfinitySpin } from "react-loader-spinner";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import { ErrorMsgContext } from "../../context/ErrorMsg";
import { SuccessMsgContext } from "../../context/SuccessMsg";

export default function Profile() {
  const { auth } = useContext(AuthContext);
  const [allData, setAllData] = useState();
  const [msg,setMsg] = useState();
  const { setErrorMsg } = useContext(ErrorMsgContext);

  // get the saved image 
  function getSaved() {
    return axios(
      `http://localhost/KolalaPic/public/apiProfile/showAllSaved?user_token=${auth}`,
      { withCredentials: true }
    );
  }
  const {
    data: savedData,
    isError: savedIsError,
    isLoading: savedIsLoading,
    error: savedError,
    isSuccess: savedIsSuccess,
    refetch: getSavedProfile,
  } = useQuery({
    queryKey: "savedphotos",
    queryFn: getSaved,
    enabled: !!auth,
  });

  // get the loved photos
  function getLoved() {
    return axios(
      `http://localhost/KolalaPic/public/apiProfile/showAllLoved?user_token=${auth}`,
      { withCredentials: true }
    );
  }
  const {
    data,
    isError,
    isLoading,
    error,
    isSuccess,
    refetch: getLovedProfile,
  } = useQuery({
    queryKey: "photos",
    queryFn: getLoved,
    enabled: !!auth,
  });

  useEffect(() => {
    if (isSuccess) {
      setMsg("Loved ");
      setAllData(data.data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (savedIsSuccess) {
      setMsg("Saved ");
      setAllData(savedData.data);
    }
  }, [savedIsSuccess, savedData]);

  if (isLoading || savedIsLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="#688990"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }
  if (isError || savedIsError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="rounded-3xl px-40 py-5 text-red-100 bg-red-800 capitalize text-2xl secondary-font ">
          {error && setErrorMsg(error)}
          {savedError && setErrorMsg(savedError)}
        </p>
      </div>
    );
  }

  return (
    <>
      <section
        id="profile"
        className="profile block py-10  pt-[100px] w-[90%] mx-auto secondary-font"
      >
        <div className="flex justify-between items-center header-color ">
          <h1 className="base-font text-[50px]">Profile</h1>
          <Link
            to="/edit profile"
            id="search_btn"
            type="submit"
            className="text-lg lg:p-4 lg:text-xl slider_btn"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
        </div>
        <div className="flex justify-start items-center gap-7 mt-10">
          <img
            className="w-32 h-32 rounded-full border-4 border-white"
            // src={img2}
            alt=""
          />
          <div className="">
            <h3 className="header-color text-2xl">Lorem ipsum</h3>
            <p className="light-text-color">email.pop@gamil.com</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-[70%] mx-auto mt-10 header-color text-xl">
          <div className="relative">
            <img
              src={`http://localhost/KolalaPic/public/uploads/${data?.data[0]?.file}`}
              className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
              alt=""
            />
            <i
              onClick={getLovedProfile}
              className="fa-solid profile_ico fa-heart absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-white cursor-pointer border-4 border-white  rounded-full"
            ></i>
          </div>
          <div className="relative">
            <img
              //   src={img2}
              className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
              alt=""
            />
            <i className="fa-solid profile_ico fa-upload absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer border-4 border-white  rounded-full"></i>
          </div>
          <div className="relative">
            <img
                src={`http://localhost/KolalaPic/public/uploads/${
                  savedData?.data[0]?.file
                }`}
                
              className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
              alt=""
            />
            <i
              onClick={getSavedProfile}
              className="fa-solid profile_ico fa-bookmark absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer  border-4 border-white  rounded-full"
            ></i>
          </div>
        </div>
        <ImagesContainer catName={`${msg }Photos`} data={allData} />
      </section>
    </>
  );
}
