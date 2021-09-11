import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";

const Messages = (props, flag) => {
  const { userHeaders, channelMessages, setChannelMessages } =
    useContext(Context);

  const receiver_id = props.id;
  const type = props.type;

  const rehydrate = () => {
    axios({
      method: "GET",
      url: `http://206.189.91.54/api/v1/messages?receiver_id=${receiver_id}&receiver_class=${type}`,
      headers: userHeaders,
    })
      .then((response) => {
        setChannelMessages(response.data.data);
      })
      .catch((error) => {
        console.error(error.response?.data.errors);
      });
  };

  useEffect(() => {
    rehydrate();
  }, [flag]);

  return (
    <Fragment>
      <div className="">
        {channelMessages?.map((message) => (
          <div key={message.id}>{message.body}</div>
        ))}
      </div>
    </Fragment>
  );
};

export default Messages;
