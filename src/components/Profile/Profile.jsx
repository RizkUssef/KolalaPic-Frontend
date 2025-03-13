import React from 'react'
import img6 from "../../assets/Kolala images/Calm/1.jpeg";
import img1 from "../../assets/Kolala images/Calm/2.jpeg";
import img2 from "../../assets/Kolala images/Animals/Lions/11.jpeg";
import img3 from "../../assets/Kolala images/Dark/5.jpeg";


export default function Profile() {
  return <>
      <section id="profile" className="profile block py-10  pt-[100px] w-[90%] mx-auto secondary-font">
        <div className="flex justify-between items-center header-color ">
            <h1 className="base-font text-[50px]">Profile</h1>
            <a href="" id="search_btn" type="submit" className="text-lg lg:p-4 lg:text-xl slider_btn">
                <i className="fa-regular fa-pen-to-square"></i></a>
        </div>
        <div className="flex justify-start items-center gap-7 mt-10">
            <img className="w-32 h-32 rounded-full border-4 border-white" src={img2} alt=""/>
            <div className="">
                <h3 className="header-color text-2xl">Lorem ipsum</h3>
                <p className="light-text-color">email.pop@gamil.com</p>
            </div>
        </div>
        <div className="flex justify-between items-center w-[70%] mx-auto mt-10 header-color text-xl">
            <div className="relative">
                <img src={img1} className="w-72 h-52 rounded-2xl border-4 border-white object-cover" alt=""/>
                <i
                    className="fa-solid profile_ico fa-heart absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-white cursor-pointer border-4 border-white  rounded-full"></i>
            </div>
            <div className="relative">
                <img src={img2} className="w-72 h-52 rounded-2xl border-4 border-white object-cover"
                    alt=""/>
                <i
                    className="fa-solid profile_ico fa-upload absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer border-4 border-white  rounded-full"></i>
            </div>
            <div className="relative">
                <img src={img3} className="w-72 h-52 rounded-2xl border-4 border-white object-cover" alt=""/>
                <i
                    className="fa-solid profile_ico fa-bookmark absolute top-full left-full -translate-x-1/2 -translate-y-1/2 p-5 bg-bg cursor-pointer  border-4 border-white  rounded-full"></i>
            </div>
        </div>
        <div className="mt-10">
            <h1 className="base-font text-[50px] header-color">Loved Photos</h1>
        </div>
        <div className="columns-2 mt-10 [&>div]:mb-5 lg:columns-3 xl:columns-4 text-bg secondary-font ">
            <div className="relative image_container cursor-pointer">
                <img src={img6} className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
                        </div>
                        <div>
                            <i className="fa-solid fa-share share mr-3"></i>
                            <i className="fa-regular fa-heart heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative image_container cursor-pointer">
                <img src="../img/2.jpeg" className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
                        </div>
                        <div>
                            <i className="fa-solid fa-share share mr-3"></i>
                            <i className="fa-regular fa-heart heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative image_container cursor-pointer">
                <img src="../img/Kolala images/Couples/1.jpeg" className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
                        </div>
                        <div>
                            <i className="fa-solid fa-share share mr-3"></i>
                            <i className="fa-regular fa-heart heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative image_container cursor-pointer">
                <img src="../img/Kolala images/Couples/2.jpeg" className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
                        </div>
                        <div>
                            <i className="fa-solid fa-share share mr-3"></i>
                            <i className="fa-regular fa-heart heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative image_container cursor-pointer">
                <img src="../img/Kolala images/Couples/3.jpeg" className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
                        </div>
                        <div>
                            <i className="fa-solid fa-share share mr-3"></i>
                            <i className="fa-regular fa-heart heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative image_container cursor-pointer">
                <img src="../img/Kolala images/Couples/4.jpeg" className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
                        </div>
                        <div>
                            <i className="fa-solid fa-share share mr-3"></i>
                            <i className="fa-regular fa-heart heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative image_container cursor-pointer">
                <img src="../img/Kolala images/Couples/5.jpeg" className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
                        </div>
                        <div>
                            <i className="fa-solid fa-share share mr-3"></i>
                            <i className="fa-regular fa-heart heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative image_container cursor-pointer">
                <img src="../img/Kolala images/Couples/6.jpeg" className="rounded-xl" alt="" srcSet=""/>
                <div className="image_overlay absolute top-0 bottom-0 right-0 left-0 bg-blur rounded-xl text-xl hidden">
                    <div className="flex justify-between items-center absolute top-3 right-3 w-[90%]">
                        <div className="w-[80%] flex justify-start gap-3 items-center">
                            <img src="../img/Kolala images/Calm/1.jpeg"
                                className="rounded-full object-cover max-h-[40px] w-[40px]" alt=""/>
                            <h3>Lorem ipsum</h3>
                        </div>
                        <a href=""><i className="fa-regular fa-bookmark save"></i></a>
                    </div>
                    <div className="flex justify-between items-center absolute w-[90%] bottom-3 right-3">
                        <div>
                            <h3 className="text-2xl">Lorem ipsum</h3>
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
}
