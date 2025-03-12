import React from 'react'
import img6 from "../../assets/2.jpeg";

export default function EditProfile() {
  return <>
      <section id="profile" className="profile block h-[100vh] py-10  pt-[100px] w-[90%] mx-auto secondary-font header-color">
        <div className="flex justify-between items-center mb-20">
            <h1 className="base-font text-[50px]">Edit Profile</h1>
        </div>
        <div className="mt-10 w-1/2 mx-auto  bg-white p-10 rounded-2xl drop-shadow-main">
            <form action="" className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500">
                <div className="self-start relative w-24 h-24 mb-3">
                    <img src={img6}
                        className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-white" alt=""/>
                    <label for="file"
                        className="cursor-pointer absolute top-[88%] left-[88%] -translate-x-1/2 -translate-y-1/2">
                        <i className="fa-solid fa-camera-retro text-xl p-2 bg-bg border-4 border-white rounded-full hover:bg-white transition-all duration-500"></i>
                    </label>
                    <input className="hidden" type="file" name="file" id="file"/>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="name">Name</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="name" name="" id="name"/>
                </div>
                <a className="self-end" href="#">Change Password?</a>
                <div className="self-end mt-3">
                    <button className="cursor-pointer transition-all duration-500 base-bg px-3 py-2 rounded-2xl btn-submit" type="submit">Submit</button>
                </div>
                {/* <button className="py-2 px-10 bg-light-text rounded-xl" type="submit">Submit</button> */}
            </form>
        </div>
    </section>
  </>
}
