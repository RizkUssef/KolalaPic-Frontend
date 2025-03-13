import React from 'react'

export default function UploadImage() {
  return <>
        <section id="profile" className="profile block  py-10  pt-[100px] w-[90%] mx-auto secondary-font header-color">
        <div className="flex justify-between items-center mb-10">
            <h1 className="base-font text-[50px]">Uploade File</h1>
        </div>
        <div className="mt-10 w-1/2 mx-auto  bg-white p-10 rounded-2xl drop-shadow-main">
            <form action="" className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500">
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="filename">File Name</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="name" name="filename" id="filename"/>
                </div>
                <label className="text-2xl text-primary" for="">File</label>
                <input type="file" name="image" className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-white file:text-headers file:text-secondary cursor-pointer file:cursor-pointer hover:file:bg-violet-100 bg-[#fff]"/>
                <label className="text-2xl  text-primary" for="">Description</label>
                <textarea className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" name="description" id=""></textarea>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="auther">Auther</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="name" name="auther" id="auther"/>
                </div>
                <label className="text-2xl  text-primary" for="category">Category</label>
                <select className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers  selection:bg-secondary" name="category" id="category">
                    <option selected defaultValue="animals">animals</option>
                    <option defaultValue="calm">calm</option>
                    <option defaultValue="couples">couples</option>
                    <option defaultValue="dark">dark</option>
                    <option defaultValue="football">football</option>
                </select>
                <div className="self-end mt-3">
                    <button className="cursor-pointer transition-all duration-500 base-bg px-3 py-2 rounded-2xl btn-submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
  </>
}
