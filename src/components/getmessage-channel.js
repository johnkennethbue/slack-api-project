import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";

const getMessageChannel = () => {
    const { 
       userHeaders,
       messages,
       setMessages,
      } = useContext(Context);

      console.log(userHeaders)
   
useEffect(() => {
    axios({
      method: "GET",
      url: 'http://206.189.91.54/api/v1/messages?receiver_id=291&receiver_class=Channel',
      headers: {
        headers: {
            "access-token": userHeaders['access-token'],
            client: userHeaders.client,
            expiry: userHeaders.expiry,
            uid: userHeaders.uid,
          },
      },
    }).then((response) => {
      console.log(response.headers);
      setMessages(response.data.data);
    }).catch((error) => {
      console.error(error.response.data.errors)
    })
  }, [])
  
    return (
        <Fragment>
      <div>
          {messages.map(message => {
              <div key={message.messages}>
                {message.messages}
              </div>
          })}
      </div>
      </Fragment>
    )
}

export default getMessageChannel;