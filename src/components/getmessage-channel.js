import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";

const useGetChannelMessage = () => {
  const { userHeaders, channelMessages, setChannelMessages } =
    useContext(Context);

  console.log(userHeaders);

  const rehydrate = () => {
    axios({
      method: "GET",
      url: "http://206.189.91.54/api/v1/messages?receiver_id=291&receiver_class=Channel",
      headers: userHeaders,
    })
      .then((response) => {
        console.log(response.headers);
        setChannelMessages(response.data.data);
      })
      .catch((error) => {
        console.error(error.response?.data.errors);
      });
  };

  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <Fragment>
      <div>
        {channelMessages.map((message) => (
          <div key={message.id}>{message.body}</div>
        ))}
      </div>
    </Fragment>
  );
};

export default useGetChannelMessage;
