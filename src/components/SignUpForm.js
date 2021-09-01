import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";

const SignUpForm = () => {

    return(
    <form>
    <div class="modal-container z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-black opacity-80"> </div>

    <div class="modal-container px-2 mb-60 mt-40 bg-white w-auto h-auto md:max-w-md mx-auto shadow-lg z-50 ">
    <div class="modal-close absolute opacity-1 top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-lg z-50">
    </div>
    <div class="modal-content py-4 text-left px-6 z-50 text-black">
        <div class="flex justify-end items-center pb-3 ">
            <div class="modal-close cursor-pointer z-50">
                <button className = "text-2xl">X</button>
            </div>
            </div>
            <div>

            <h1 class = "text-2xl text-center ">Sign up, it's free!</h1>

          
            <div class = "flex flex-col justify-center items-center">
                    <input 
                    class =  "w-full mt-4 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                    type = "email"
                    placeholder = "Set E-mail" 
                    required
                    />
                    <input 
                    class =  "w-full mt-4 content-center  text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                    type = "text"
                    placeholder = "Set Password" 
                    required
                    />
                    <input 
                    class =  "w-full mt-4 content-center  text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                    type = "text"
                    placeholder = "Confirm Password" 
                    required
                    />

            <div class = "flex flex-row justify-end items-end mt-12 ml-48 mr-4 space-x-3.5 ">
                    <button 
                    class = "text-sm w-full h-auto border-2 border-black px-8 py-2 bg-pink-600">
                        Confirm
                    </button>
                    <button 
                    class = "text-sm w-full border-2 border-black px-4 py-2">
                        Cancel
                    </button>
                    </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    </form>
    )
} 

export default SignUpForm