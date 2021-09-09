import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../App";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function Channel({showModal, setShowModal}) {
    const { register, handleSubmit} = useForm();
    const { userHeaders } = useContext(Context);
    const [ newChannel, setNewChannel ] = useState({});
    const [ errorHandlers, setErrorHandlers ] = useState([]);

    const addNewChannelSubmit = (data) => {
        let channelData = {
            name: data.Channel,
            user_ids: [],
        }
        let errorLogs = [];
        axios({
          method: "POST",
          url: `http://206.189.91.54/api/v1/channels`,
          headers: {
            "access-token": userHeaders.get("access-token"),
            client: userHeaders.get("client"),
            expiry: userHeaders.get("expiry"),
            uid: userHeaders.get("uid"),
        },
          data: channelData,
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          errorLogs.push(...error.response.data.errors.full_messages);
          console.error(error.response.data.errors)
          Swal.fire('error')
          setErrorHandlers(errorLogs);
        }).then(() => {
          if (errorLogs.length === 0) {
            Swal.fire('success')
            setNewChannel(channelData);
          }
        })
        console.log(errorLogs)
      }
   

    const closeChannelForm = (e) =>{
        e.preventDefault();
        setShowModal(view => !view);
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
                    <button className = "text-2xl" onClick = {closeChannelForm}>X</button>
                </div>
                </div>
                <div>
    
                <h1 class = "text-2xl text-center ">Add Channel</h1>
                <div class = "flex flex-col justify-center items-center">
                        <input {...register("Channel Name", { required: "Channel Name is required" })}
                        class =  "w-full mt-4 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                        type = "text"
                        placeholder = "Set Channel Name"
                        required
                        />
    
                <div class = "flex flex-row justify-end items-end mt-12 ml-48 mr-4 space-x-3.5 z-50 ">
                        <button 
                        class = "text-sm w-full h-auto border-2 border-black px-8 py-2 bg-pink-600"
                        onClick = {handleSubmit(addNewChannelSubmit)}>
                            Confirm
                        </button>
                        <button 
                        class = "text-sm w-full border-2 border-black px-4 py-2"
                        onClick = {closeChannelForm}>
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
};

export default Channel;
