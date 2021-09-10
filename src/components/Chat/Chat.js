import ChatBar from "../ChatBar/ChatBar";
import Messages from "../Messages";

const Chat = (props) => {
  //catched value of :id and :type will be avaiable in props.match.params

  const { id, type } = props.match.params;

  return (
    <div className="grid grid-rows-messages">
      <div className=" row-span-6 p-4 overflow-y-auto">
        <Messages id={id} type={type} />
      </div>
      <ChatBar id={id} type={type} />
    </div>
  );
};

export default Chat;
