import React from "react";
import img6 from "../../assets/Kolala images/Calm/1.jpeg";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Footer from "../Footer/Footer";

export default function Onephoto() {
  const { id } = useParams();
  function getOne() {
    return axios(
      `http://localhost/KolalaPic/public/apiShowOne/showOne?id=${id}`
    );
  }
  const { data, isError, isLoading , error } = useQuery({
    queryKey: ["photo", id],
    queryFn: getOne,
  });
  if (isLoading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#688990"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      </>
    );
  }
  if (isError) {
    return (
        <div className="h-screen flex justify-center items-center">
          <p className="rounded-3xl px-40 py-5 text-red-100 bg-red-800 capitalize text-2xl secondary-font ">
            {error.response.data.error}
          </p>
        </div>
      );
  }
  return (
    <>
      <section className="w-[90%] pt-[100px] mx-auto flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="relative h-[70vh] header-color text-xl">
            <img
              id="one_img"
              className="w-fit rounded-2xl border-4 h-[70vh] border-white"
              src={`http://localhost/KolalaPic/public/uploads/${data.data.file}`}
              alt="img"
            />
            <div className="actions flex flex-col gap-5 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
              <Link to="">
                <i className="fa-regular fa-bookmark p-5 base-bg border-4 border-white rounded-full"></i>
              </Link>
              <Link to="">
                <i className="fa-solid fa-share p-5 base-bg border-4 border-white rounded-full"></i>
              </Link>
              <Link to="">
                <i className="fa-regular fa-heart p-5 base-bg border-4 border-white rounded-full"></i>
              </Link>
            </div>
            <div className="download absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link to="">
                <i className="fa-solid fa-download p-5 base-bg border-4 border-white rounded-full"></i>
              </Link>
            </div>
          </div>
          <div className="secondary-font my-10">
            <h1 id="one_title" className="text-3xl header-color mb-5">
              {data.data.title}
            </h1>
            <p id="one_auther" className="light-text-color mb-5">
              {data.data.auther}
            </p>
            <p id="one_desc" className="light-text-color">
              {data.data.description}
            </p>
          </div>
          <div className="total flex justify-center text-xl items-center gap-10 header-color secondary-font self-end pb-[50px]">
            <div className="flex justify-center items-center gap-3">
              <i className="fa-solid fa-heart"></i>
              <p className="light-text-color">3k</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <i className="fa-solid fa-bookmark"></i>
              <p className="light-text-color">4.5k</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <i className="fa-solid fa-share"></i>
              <p className="light-text-color">697</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
