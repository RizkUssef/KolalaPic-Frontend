import React, { useEffect, useState } from "react";
import img1 from "../../assets/Kolala images/Animals/Bears/1.jpg";
import img2 from "../../assets/Kolala images/Animals/Bears/2.jpeg";
import img3 from "../../assets/Kolala images/Animals/Bears/3.jpeg";
import img4 from "../../assets/Kolala images/Animals/Bears/4.jpeg";
import img5 from "../../assets/Kolala images/Animals/Bears/5.jpeg";
import img6 from "../../assets/Kolala images/Calm/1.jpeg";
import img7 from "../../assets/Kolala images/Calm/2.jpeg";
import img8 from "../../assets/Kolala images/Calm/3.jpeg";
import img9 from "../../assets/Kolala images/Calm/4.jpeg";
import img10 from "../../assets/Kolala images/Calm/5.jpeg";

export default function ImagesContainer() {
  const [show,setShow] = useState("none");

  return (
    <>
      <section
        id="like_more"
        className="w-[80%] like mx-auto header-color secondary-font py-10  transition-all duration-500"
      >
        <div className="flex justify-between items-center ">
          <h1 className="base-font text-[50px]">More Like</h1>
          <form
            action=""
            method="post"
            className="font-secondary flex justify-center items-center"
          >
            <input
              id="search_input"
              type="text"
              value=""
              className="hidden text-headers font-secondary text-xl bg-white rounded-xl focus:outline-none focus:border-2 focus:border-headers p-3"
            />
            <button
              id="search_btn"
              type="submit"
              className="text-lg lg:p-4 lg:text-xl slider_btn"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div id="all" className="columns-2 mt-5 [&>div]:mb-5 lg:columns-3 xl:columns-4 text-bg font-secondary ">
          <div onMouseEnter={()=>setShow("")} onMouseLeave={()=>setShow("none")} className="relative image_container cursor-pointer img_to_go block">
            <img src={img1} className="rounded-xl" alt="img" srcset="" />
            <div style={{display : show}} className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl">
              <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                <div className="w-[80%] flex justify-start gap-3 items-center">
                  <img
                    src={img2}
                    className="rounded-full object-cover max-h-[40px] w-[40px]"
                    alt="img"
                  />
                  <h3>pop</h3>
                </div>
                <a href="">
                  <i className="fa-regular fa-bookmark save"></i>
                </a>
              </div>
              <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                <div>
                  <h3 className="text-2xl">lokoil</h3>
                </div>
                <div>
                  <i className="fa-solid fa-share share mr-3"></i>
                  <i className="fa-regular fa-heart heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
