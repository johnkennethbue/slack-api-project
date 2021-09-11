import ChatBar from "../ChatBar/ChatBar";
import Messages from "../Messages";
import { useState } from "react";

const Chat = (props) => {
  //catched value of :id and :type will be avaiable in props.match.params
  const [flag, setFlag] = useState("initial");
  function generateString() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  function changeFlag() {
    setFlag(generateString());
  }

  const { id, type } = props.match.params;

  return (
    <div className="grid grid-rows-messages">
      <div className=" row-span-6 p-4 overflow-y-auto">
        <Messages id={id} type={type} flag={flag} />
      </div>
      <ChatBar id={id} type={type} changeFlag={changeFlag} />
    </div>
  );
};

export default Chat;
