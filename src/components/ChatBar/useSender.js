import { useContext } from "react";
import { Context } from "../../App";

const endPoint = "http://206.189.91.54/api/v1/messages";

export default function useSender() {
  const value = useContext(Context);
  const myHeaders = value.userHeaders;

  async function sendHandler(data) {
    const message = data.message;
    console.log(data);

    const requestBody = {
      receiver_id: 291,
      receiver_class: "Channel",
      body: message,
    };

    const response = await fetch(endPoint, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody), //string
    });

    const jsonData = await response.json();
    if (response.status === 200) {
      alert("Sent");
    }

    console.log(response);
  }

  return sendHandler;
}
