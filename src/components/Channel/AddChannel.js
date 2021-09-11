import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../App";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddChannel({showModal, setShowModal}) {
    const { register, handleSubmit} = useForm();
    const { userHeaders } = useContext(Context);
    

    const addNewChannelSubmit = (data) => {
        let channelData = {
            name: data.name,
            user_ids: [],
        }
        
        axios({
            method: "POST",
            url: `http://206.189.91.54/api/v1/channels`,
            headers: userHeaders,
            data: channelData,
        })
        .then((response) => {  
            Swal.fire('Channel created!', 'Refresh the page to see the new channel.', 'success')
            setShowModal(view => !view);
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.error(error)
        })
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
                        <button className = "text-2xl" 
                        onClick = {closeChannelForm}
                        > 
                        X 
                        </button>
                    </div>
                </div>
                <div>
                    <h1 class = "text-2xl text-center ">Add Channel</h1>
                    <div class = "flex flex-col justify-center items-center">
                            <input {...register("name", { required: "Channel Name is required" })}
                                name = "name"
                                class =  "w-full mt-4 content-center text-base px-4 py-2 border-b-2 rounded-xl border-gray-500 focus:outline-none focus:border-pink-600"                        
                                type = "text"
                                placeholder = "Set Channel Name"
                                minLength="3"
                                maxLength="15"
                                required
                            />
                        <div class = "flex flex-row justify-end items-end mt-12 ml-48 mr-4 space-x-3.5 z-50 ">
                            <button 
                                class = "text-sm w-full h-auto border-2 border-black px-8 py-2 bg-pink-600"
                                onClick = {handleSubmit(addNewChannelSubmit)}
                                >
                                Confirm
                            </button>
                            <button 
                                class = "text-sm w-full border-2 border-black px-4 py-2"
                                onClick = {closeChannelForm}
                                >
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

export default AddChannel;
