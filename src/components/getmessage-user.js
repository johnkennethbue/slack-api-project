import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";

const useGetUserMessage = () => {
  const { userHeaders, userMessages, setUserMessages } = useContext(Context);

  console.log(userHeaders);

  const rehydrate = () => {
    axios({
        method: "GET",
        url: "http://206.189.91.54/api/v1/messages?receiver_id=224&receiver_class=User",
        headers: {
            "access-token": userHeaders.get("access-token"),
            client: userHeaders.get("client"),
            expiry: userHeaders.get("expiry"),
            uid: userHeaders.get("uid"),
          }
        })
        .then((response) => {
          console.log(response.headers);
          setUserMessages(response.data.data);
        })
        .catch((error) => {
            console.error(error.response?.data.errors)
        });
  }

   useEffect(() => {
    rehydrate();
   }, []);

  return (
    <Fragment>
      <div>
        {userMessages.map((message) => {
          <div key={message.messages}>{message.messages}</div>;
        })}
      </div>
    </Fragment>
  );
};

export default useGetUserMessage;
