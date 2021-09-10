const myHeaders = {
  "access-token": "TTLtXEQUjd1i0BlR6q8zVg",
  client: "TdmPB-prCbBtjStYuOeuCg",
  expiry: 1631322970,
  uid: "akosipc@gmail.com",
  "Content-type": "application/json",
};

const endPoint = "http://206.189.91.54/api/v1/messages";

export default function useSender() {
  async function sendHandler(data) {
    const message = data.message;

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

    console.log(response);
  }

  return sendHandler;
}
