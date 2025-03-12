import React from 'react'

export default function Register() {
    return  <>
        <section className="base-font text-5xl header-color w-[85%] mx-auto mt-20">
            <h1>Register</h1>
            <div className="w-1/2 mx-auto  bg-white p-10 rounded-2xl">
                <form
                    className=" text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500"
                     method="POST" id="reg_form">
                    <input id="csrf_register" type="hidden" name="csrf_register" value=""/>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <label className="w-full" for="">Name</label>
                        <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="text" name="name" id="name"/>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <label className="w-full" for="">Email</label>
                        <input
                            className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                            type="email" name="email" id="email"/>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <label className="w-full" for="">Password</label>
                        <input
                            className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                            type="password" name="password" id="password"/>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <label className="w-full" for="">Password Confirmation</label>
                        <input
                            className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers"
                            type="password" name="password_confirmation" id="password_confirmation"/>
                    </div>
                    <div className="self-end mt-3">
                        <button
                            className="transition-all duration-500 base-bg px-3 py-2 cursor-pointer rounded-2xl btn-submit"
                            type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
      </>
}
