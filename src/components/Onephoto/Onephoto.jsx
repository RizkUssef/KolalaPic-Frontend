import React from 'react'
import img6 from "../../assets/Kolala images/Calm/1.jpeg";


export default function Onephoto() {
  return <>
        <section className="w-[90%] pt-[100px] mx-auto flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center ">
            <div className="relative h-[70vh] header-color text-xl">
                <img id="one_img" className="w-fit rounded-2xl border-4 h-[70vh] border-white" src={img6} alt="img"/>
                <div className="actions flex flex-col gap-5 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
                    <a href=""><i className="fa-regular fa-bookmark p-5 base-bg border-4 border-white rounded-full"></i></a>
                    <a href=""><i className="fa-solid fa-share p-5 base-bg border-4 border-white rounded-full"></i></a>
                    <a href=""><i className="fa-regular fa-heart p-5 base-bg border-4 border-white rounded-full"></i></a>
                </div>
                <div className="download absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <a href=""><i className="fa-solid fa-download p-5 base-bg border-4 border-white rounded-full"></i></a>
                </div>
            </div>
            <div className="secondary-font my-10">
                <h1 id="one_title" className="text-3xl header-color mb-5">Lorem ipsum dolor</h1>
                <p id="one_auther" className="light-text-color mb-5">Lorem ipsum</p>
                <p id="one_desc" className="light-text-color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, a temporibus. Temporibus id,
                    vero dolorum, ipsa, sit autem alias deserunt quod voluptas eaque voluptate vel consectetur nostrum
                    corporis assumenda omnis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, facere magnam ut vel quasi
                    minima rerum, aliquid illum soluta labore optio quod dicta asperiores architecto, blanditiis
                    delectus laudantium ducimus nostrum.
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
  </>
}
