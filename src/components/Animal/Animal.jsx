import React from "react";
import img1 from "../../assets/Kolala images/Animals/bg.jpg";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import Footer from "../Footer/Footer";
import { useQuery } from "react-query";
import axios from "./../../../node_modules/axios/lib/axios";
import { InfinitySpin, TailSpin } from "react-loader-spinner";
import useCategoriesData from "../../Hooks/useCategoriesData";

export default function Animal() {
  const { data, isLoading, isError,error } = useCategoriesData("animals");
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
      <section
        style={{ backgroundImage: `url(${img1})` }}
        className="h-screen secondary-font relative light-text-color item bg-cover bg-center"
      >
        <div className="bg-[rgba(0,0,0,0.4)] top-0 left-0 absolute z-[999] right-0 bottom-0"></div>
        <div className="relative h-[100%]"></div>
      </section>
      <ImagesContainer catName="Animals" data={data.data} />
      <Footer />
    </>
  );
}
