import React from 'react'

export default function ChangePassword() {
  return <>
        <section id="profile" className="profile block h-[100vh] py-10 mb-10  pt-[100px] w-[90%] mx-auto secondary-font header-color">
        <div className="flex justify-between items-center mb-10">
            <h1 className="base-font text-[50px]">Change Password</h1>
        </div>
        <div className=" w-1/2 mx-auto  bg-white p-10 rounded-2xl drop-shadow-main">
            <form className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500" action="" method="post">
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="password">Old Password</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="password" name="" id="password"/>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="password">New Password</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="password" name="" id="password"/>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="password">New Password Confirmation</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="password" name="" id="password"/>
                </div>
                <Link to='/forget password' className="self-end" >Forget Password?</Link>

                <div className="self-end mt-3">
                    <button className="cursor-pointer transition-all duration-500 base-bg px-3 py-2 rounded-2xl btn-submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
  </>
}
