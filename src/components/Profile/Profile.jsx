import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "react-query";
import axios from "axios";
import { AuthContext } from "../../context/Auth";
import { InfinitySpin } from "react-loader-spinner";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import { ErrorMsgContext } from "../../context/ErrorMsg";
import { SuccessMsgContext } from "../../context/SuccessMsg";
import useUserData from "../../Hooks/useUserData";

export default function Profile() {
  const { auth } = useContext(AuthContext);
  const [allData, setAllData] = useState();
  const [imgs, setImgs] = useState();
  const [loveBg, setLoveBg] = useState();
  const [saveBg, setSaveBg] = useState();
  const [uploadBg, setUploadBg] = useState();
  const [uploadBtn, setUploadBtn] = useState(false);
  const [loveBtn, setLoveBtn] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);
  const [msg, setMsg] = useState();
  const { setErrorMsg } = useContext(ErrorMsgContext);
  const UserData = useUserData();

  async function getAllData(func, msg) {
    await axios(`http://localhost/KolalaPic/public/apiProfile/${func}`, {
      withCredentials: true,
      headers: {
        tkn: auth,
      },
    })
      .then((res) => {
        setMsg(msg);
        setAllData(res.data);
      })
      .catch((res) => {
        setErrorMsg(res.response.data.error);
      });
  }

  async function getAllBg() {
    await axios(
      `http://localhost/KolalaPic/public/apiProfile/getInteractionsFiles`,
      {
        withCredentials: true,
        headers: {
          tkn: auth,
        },
      }
    )
      .then((res) => {
        setImgs(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    if (auth) {
      getAllData("showAllLoved", "Loved ");
      getAllBg();
    }
  }, [auth]);

  useEffect(() => {
    if (imgs) {
      imgs[0] ? setLoveBg(imgs[0].file):"";
      imgs[1] ? setSaveBg(imgs[1].file):"";
      imgs[2] ? setUploadBg(imgs[2].file):"";
    }
  }, [imgs]);

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
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
            src={`http://localhost/KolalaPic/public/uploads/Users/${UserData?.image}`}
            alt=""
          />
          <div className="">
            <h3 className="header-color text-2xl capitalize">
              {UserData?.name}
            </h3>
            <p className="light-text-color">{UserData?.email}</p>
          </div>
        </div>
        {allData ? (
          <div className="flex justify-between items-center w-[70%] mx-auto mt-10 header-color text-xl">
            
            <div className="relative">
              <img
                src={`http://localhost/KolalaPic/public/uploads/${loveBg}`}
                className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
                alt=""
              />
              <i
                onClick={() => {
                  getAllData("showAllLoved", "Loved ");
                  setLoveBtn(true);
                  setUploadBtn(false);
                  setSaveBtn(false);
                }}
                className={`${
                  loveBtn ? "bg-white" : ""
                } fa-solid profile_ico fa-heart absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5  cursor-pointer border-4 border-white  rounded-full`}
              ></i>
            </div>

            <div className="relative">
              <img
                src={`http://localhost/KolalaPic/public/uploads/${uploadBg}`}
                className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
                alt=""
              />
              <i
                onClick={() => {
                  getAllData("showAllUploaded", "Uploaded ");
                  setLoveBtn(false);
                  setUploadBtn(true);
                  setSaveBtn(false);
                }}
                className={`${
                  uploadBtn ? "bg-white" : ""
                } fa-solid profile_ico fa-upload absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer border-4 border-white  rounded-full`}
              ></i>
            </div>

            <div className="relative">
              <img
                src={`http://localhost/KolalaPic/public/uploads/${saveBg}`}
                className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
                alt=""
              />
              <i
                onClick={() => {
                  getAllData("showAllSaved", "Saved ");
                  setLoveBtn(false);
                  setUploadBtn(false);
                  setSaveBtn(true);
                }}
                className={`${
                  saveBtn ? "bg-white" : ""
                } fa-solid profile_ico fa-bookmark absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer  border-4 border-white  rounded-full`}
              ></i>
            </div>

          </div>
        ) : (
          <div className="flex justify-between items-center w-[70%] mx-auto mt-10 header-color text-xl">
            <div className="absolute inset-0 flex justify-center items-center z-[99999]">
              <div className="error-container secondary-font text-2xl px-10 py-3 rounded-2xl mx-auto">
                <p className="capitalize">
                  you don't interacte with any image yet
                </p>
              </div>
            </div>
          </div>
        )}

        {allData ? (
          <ImagesContainer catName={`${msg}Photos`} data={allData} />
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
