import React from "react";
import { useContext } from "react";
import UseGetChannelMessage from "./getmessage-channel";
import UseGetUserMessage from "./getmessage-user";
import RetrieveChannel from "./retrieve-channels";
import GetAllUsers from "./getall-users";
import { Context } from "../App";
import { Redirect } from "react-router";
import ChatBar from "./ChatBar/ChatBar";

function Homepage() {
  const { userHeaders } = useContext(Context);
  //if userHeader is null -> nothing retrieved from localStorage
  if (!userHeaders) {
    return <Redirect to="/signin" />;
  }
  const displayEmail = userHeaders?.uid;
  return (
    <div className = "flex w-auto h-screen overflow-y-auto">
    <section className="w-full grid grid-cols-chat grid-rows-chat h-min overflow-hidden">
      <div className="bg-pink-700 flex justify-around items-center border border-white">
        <div>
          <button className="m-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-pink-700 flex justify-between border border-white p-2">
        <div className="flex gap-4 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            {displayEmail}
            <br />
            <span className="text-gray-100">
              last login date, time/ last user session
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            ></svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-pink-700 grid grid-rows-2">
        <div className="h-min">
          <div className="font-bold text-xl text-white bg-pink-900">
            Channels
          </div>
          <div className="overflow-y-auto h-12">
            <RetrieveChannel />
          </div>
        </div>
        <div className="">
          <div className="font-bold text-xl text-white bg-pink-900">
            Direct Messages
          </div>
          <div className="overflow-y-auto h-72">
            <GetAllUsers />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-messages">
        <div className=" row-span-6 p-4">
          <UseGetChannelMessage />
          <UseGetUserMessage />
        </div>
        <ChatBar />
      </div>
    </section>
    </div>
  );
}

export default Homepage;
