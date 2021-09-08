import Swal from "sweetalert2";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUpForm = ({showModal, setShowModal}) => {

const { register, handleSubmit } = useForm();
const [ newAccount, setNewAccount ] = useState({});
const [ errorHandlers, setErrorHandlers ] = useState([]);

const closeSignUpForm = (e) =>{
  e.preventDefault();
  setShowModal(view => !view);
}

const baseURL = 'http://206.189.91.54/api/v1/auth';

const signUpFormSubmit = (data) => {
    let userData = {
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    }
    let errorLogs = [];
    axios({
      method: "POST",
      url: `${baseURL}`,
      data: userData,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      errorLogs.push(...error.response.data.errors.full_messages);
      console.error(error.response.data.errors)
      Swal.fire('Invalid password/does not match, or Email already exists.', 'Please check your Email or use another one, and check your password if it is a match (Minimum 6 characters).', 'error')
      setErrorHandlers(errorLogs);
    }).then(() => {
      if (errorLogs.length === 0) {
        Swal.fire('Congratulations, your account has been created!', 'You may now log in using your new account.', 'success')
        setNewAccount(userData);
      }
    })
  }

    return ( <> {showModal ? (
      <form>
      <div class="modal-container z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div class="modal-overlay absolute w-full h-full bg-black opacity-80"> </div>
  
      <div class="modal-container px-2 mb-60 mt-40 bg-white w-auto h-auto md:max-w-md mx-auto shadow-lg z-50 ">
      <div class="modal-close absolute opacity-1 top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-lg z-50">
      </div>
      <div class="modal-content py-4 text-left px-6 z-50 text-black">
          <div class="flex justify-end items-center pb-3">
              <div class="modal-close cursor-pointer z-50">
                  <button className = "text-2xl" onClick = {closeSignUpForm}>X</button>
              </div>
              </div>
              <div>
  
              <h1 class = "text-2xl text-center ">Sign up, it's free!</h1>
              <div class = "flex flex-col justify-center items-center">
                      <input {...register("email", { required: "Email is required" })}
                      class =  "w-full mt-4 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                      type = "email"
                      placeholder = "Set E-mail"
                      required
                      />
                      <input {...register("password", { required: "Password is required" })}
                      class =  "w-full mt-4 content-center  text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                      type = "password"
                      placeholder = "Set Password (minimum 6 characters)"
                      required
                      />
                      <input {...register("password_confirmation", { required: "This is required" })}
                      class =  "w-full mt-4 content-center  text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                      type = "password"
                      placeholder = "Confirm Password" 
                      required
                      />
  
              <div class = "flex flex-row justify-end items-end mt-12 ml-48 mr-4 space-x-3.5 z-50 ">
                      <button 
                      class = "text-sm w-full h-auto border-2 border-black px-8 py-2 bg-pink-600"
                      onClick = {handleSubmit(signUpFormSubmit)}>
                          Confirm
                      </button>
                      <button 
                      class = "text-sm w-full border-2 border-black px-4 py-2"
                      onClick = {closeSignUpForm}>
                          Cancel
                      </button>
                      </div>
              </div>
              </div>
          </div>
      </div>
      </div>
      </form>
  

    ): null} </>
    )
    }

export default SignUpForm