import { useContext } from "react";
import { Context } from "../../App";

const endPoint = "http://206.189.91.54/api/v1/messages";

export default function useSender(type, receiver_id) {
  const value = useContext(Context);
  const myHeaders = value.userHeaders;

  async function sendHandler(data) {
    const message = data.message;

    const requestBody = {
      receiver_id: Number(receiver_id),
      receiver_class: type,
      body: message,
    };

    console.log(requestBody);

    const response = await fetch(endPoint, {
      method: "POST",
      headers: { ...myHeaders, "Content-type": "application/json" },
      body: JSON.stringify(requestBody), //string
    });

    const xdata = await response.json();
    console.log(xdata);

    if (response.status === 200) {
      alert("Sent");
    }
  }

  return sendHandler;
}
