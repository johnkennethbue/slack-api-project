import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import useSignin from "./useSignin";
import SignUpForm from "../SignUpForm";

export default function Signin() {
  const { register, handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const { errors } = useFormState({ control });

  const { signinHandler, loading, error: signinError } = useSignin();

  const [showModal, setShowModal] = useState(false);
  const openSignUpModal = (e) => {
    e.preventDefault();
    setShowModal((view) => !view);
  };

  // will get data from the register and needs to be passed on handle submit

  return (
    <div className = "bg-gradient-to-t from-pink-900 to-white-200 h-screen overflow-y-hidden text-black">
    <form className = "flex flex-col justify-center items-center font-bold  mt-10 ml-10 mr-10 l:flex l:justify-center l:items-center l:z-10 md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center sm:z-20 md:mr-8"
    onSubmit = {handleSubmit(signinHandler)}>
    <h1 class = "text-center pb-3 text-4xl font-thin">Welcome to Slack API App</h1>
    <h3 class = "text-center pb-10 font-light text-5xl">Sign in to your workspace</h3>
    <p className="text-center text-2xl text-pink-700">
    {errors?.email?.message || errors?.password?.message || signinError}
    </p>

    <div>
    <div id = "login-input-userName">
        <input class =  "w-full mt-8 content-center mr-40 text-xl px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-700" 
        type = "email"
        placeholder = 'Email' 
        autoComplete = 'off'
        {...register("email", { required: "Email is Required" })}
         />
    </div>

    <div className = "login-input-passWord">
        <input class = "w-full mt-5 content-center mr-40 text-xl px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-700" 
        type = "password" 
        placeholder = 'Password' 
        autoComplete = 'off'
        {...register("password", { required: "Password is Required" })}
        />
    </div>
    <button class= "w-full mt-20 text-xl flex justify-center bg-gradient-to-r from-pink-700 to-pink-800 hover:bg-gradient-to-r hover:from-pink-800 hover:to-pink-700 text-gray-100 p-4 tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
    type = "submit"
    >
    Log in
    </button>
 
    <h2 class = "text-center pt-10 pb-4 text-2xl">Don't have an account?</h2>
    <button class = "ml-40 text-gray-300 text-2xl hover:underline"
    onClick={openSignUpModal}>
        Sign up
        <SignUpForm showModal={showModal} setShowModal={setShowModal} />
    </button>
    </div>
</form>
</div>
  );
}