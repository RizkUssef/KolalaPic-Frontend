import React from "react";
import img4 from "../../assets/Kolala images/Dark/bg.jpg";
import ImagesContainer from "./../ImagesContainer/ImagesContainer";
import Footer from "./../Footer/Footer";
import useCategoriesData from "../../Hooks/useCategoriesData";
import { InfinitySpin } from "react-loader-spinner";

export default function Dark() {
  const { data, isError, isLoading, error } = useCategoriesData("dark");
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
        style={{ backgroundImage: `url(${img4})` }}
        className="h-screen secondary-font relative light-text-color item bg-cover bg-center"
      >
        <div className="bg-[rgba(0,0,0,0.4)] top-0 left-0 absolute z-[999] right-0 bottom-0"></div>
        <div className="relative h-[100%]"></div>
      </section>
      <ImagesContainer catName="Dark" data={data.data} />
      <Footer />
    </>
  );
}
