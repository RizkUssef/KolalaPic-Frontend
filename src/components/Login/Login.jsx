import React from 'react'

export default function Login() {
  return <>
      <section className="base-font text-5xl header-color w-[85%] mx-auto mt-20">
        <h1>Login</h1>
        <div className="mt-10 w-1/2 mx-auto  bg-white p-10 rounded-2xl">
            <form className="text-2xl secondary-font flex flex-col justify-center items-start gap-5 transition-all duration-500" method="post" id="login_form">
                <input type="hidden" name="csrf_login" id="csrf_login" defaultValue=""/>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="email">Email</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="email" name="email" id="email"/>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label className="w-full" for="password">Password</label>
                    <input className="base-bg w-full rounded-lg pl-3 outline-none py-2 text-xl focus:border-solid focus:border-2 focus:border-headers" type="password" name="password" id="password"/>
                </div>
                <div className="self-end mt-3">
                    <button className="cursor-pointer transition-all duration-500 base-bg px-3 py-2 rounded-2xl btn-submit" type="submit" name="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
  </>
}
