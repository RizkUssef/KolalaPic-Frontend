import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/Kolala images/Animals/bg.jpg"
import img2 from "../../assets/Kolala images/Calm/bg.jpg"
import img3 from "../../assets/Kolala images/Couples/bg.jpg"
import img4 from "../../assets/Kolala images/Dark/bg.jpg"
import img5 from "../../assets/Kolala images/Football/bg.jpg"
import { Link } from "react-router-dom";


export default function CategorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    // focus:false
  };
  return (
    <>
      <Slider {...settings}>
        <div className="h-screen">
          <section style={{backgroundImage:`url(${img1})`}} className='h-screen secondary-font relative light-text-color item bg-cover bg-center'>
            <div className="bg-[rgba(0,0,0,0.4)] top-0 left-0 absolute z-[999999] right-0 bottom-0"></div>
            <div className="relative h-[100%]">
              <div className="absolute z-[999999] top-[33%] left-[10%]">
                <h1 className="font-primary text-[70px] mb-5">Animals</h1>
                <Link
                  to="/animals"
                  className="float-end transition-all duration-500 hover:text-headers hover:border-headers"
                >
                  Show All<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <div className="h-screen">
          <section style={{backgroundImage:`url(${img2})`}} className="h-screen secondary-font relative light-text-color item bg-cover bg-center ">
            <div className="bg-[rgba(0,0,0,0.4)] top-0 left-0 absolute z-[999999] right-0 bottom-0"></div>
            <div className="relative h-[100%]">
              <div className="absolute z-[999999] top-[33%] left-[10%]">
                <h1 className="font-primary text-[70px] mb-5">Calm</h1>
                <Link
                  to="/calm"
                  className="float-end transition-all duration-500 hover:text-headers hover:border-headers"
                >
                  Show All<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <div className="h-screen">
          <section style={{backgroundImage:`url(${img3})`}} className="h-screen secondary-font relative light-text-color item bg-football bg-cover bg-center ">
            <div className="bg-[rgba(0,0,0,0.4)] top-0 left-0 absolute z-[999999] right-0 bottom-0"></div>
            <div className="relative h-[100%]">
              <div className="absolute z-[999999] top-[33%] left-[10%]">
                <h1 className="font-primary text-[70px] mb-5">Couples</h1>
                <Link
                  to="/couple"
                  className="float-end transition-all duration-500 hover:text-headers hover:border-headers"
                >
                  Show All<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <div className="h-screen">
          <section style={{backgroundImage:`url(${img4})`}} className="h-screen secondary-font relative light-text-color item bg-football bg-cover bg-center ">
            <div className="bg-[rgba(0,0,0,0.4)] top-0 left-0 absolute z-[999999] right-0 bottom-0"></div>
            <div className="relative h-[100%]">
              <div className="absolute z-[999999] top-[33%] left-[10%]">
                <h1 className="font-primary text-[70px] mb-5">Dark</h1>
                <Link
                  to="/dark"
                  className="float-end transition-all duration-500 hover:text-headers hover:border-headers"
                >
                  Show All<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <div className="h-screen">
          <section style={{backgroundImage:`url(${img5})`}} className="h-screen secondary-font relative light-text-color item bg-football bg-cover bg-center ">
            <div className="bg-[rgba(0,0,0,0.4)] top-0 left-0 absolute z-[999999] right-0 bottom-0"></div>
            <div className="relative h-[100%]">
              <div className="absolute z-[999999] top-[33%] left-[10%]">
                <h1 className="font-primary text-[70px] mb-5">Football</h1>
                <Link
                  to="/football"
                  className="float-end transition-all duration-500 hover:text-headers hover:border-headers"
                >
                  Show All<i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Slider>
    </>
  );
}
