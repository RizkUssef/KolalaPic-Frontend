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
  const [imgs, setImgs] = useState();
  const [loveBg, setLoveBg] = useState();
  const [saveBg, setSaveBg] = useState();
  const [uploadBtn, setUploadBtn] = useState(false);
  const [loveBtn, setLoveBtn] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);
  const [msg, setMsg] = useState();
  const { setErrorMsg } = useContext(ErrorMsgContext);

  async function getAllData(func, msg) {
    await axios(`http://localhost/KolalaPic/public/apiProfile/${func}`, {
      withCredentials: true,
      headers: {
        tkn: auth,
      },
    })
      .then((res) => {
        console.log(res);
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
      setLoveBg(imgs[0].file);
      setSaveBg(imgs[1].file);
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
              className={`${loveBtn?"bg-white":""} fa-solid profile_ico fa-heart absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5  cursor-pointer border-4 border-white  rounded-full`}
            ></i>
          </div>
          <div className="relative">
            <img
              //   src={img2}
              className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
              alt=""
            />
            <i
              onClick={() => {
                setLoveBtn(false);
                setUploadBtn(true);
                setSaveBtn(false);
              }}
              className={`${uploadBtn?"bg-white":""} fa-solid profile_ico fa-upload absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer border-4 border-white  rounded-full`}
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
              className={`${saveBtn?"bg-white":""} fa-solid profile_ico fa-bookmark absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer  border-4 border-white  rounded-full`}
            ></i>
          </div>
        </div>
        <ImagesContainer catName={`${msg}Photos`} data={allData} />
      </section>
    </>
  );
}
