import { useState } from "react";
import { set } from "react-hook-form";
import Swal from "sweetalert2";

const endPoint = "http://206.189.91.54/api/v1/auth/sign_in";
const credentials = {
  email: "akosipc@gmail.com",
  password: "password",
};

export default function useSignin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function signinHandler(data) {
    try {
      setError(null);
      setLoading(true);

      //begin log in
      const fetchPromise = fetch(endPoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await fetchPromise;
      setLoading(false);

      if (response.status === 401) {
        setError("Email or password is incorrect ");
      } else if (response.status === 200) {
        const accessToken = response.headers.get("access-token");
        const uid = response.headers.get("uid");
        const client = response.headers.get("client");
        const expiry = response.headers.get("expiry");

        Swal.fire({
          icon: "success",
          title: "Sign in Success",
        });

        console.log(response, accessToken, uid, client, expiry);
      } else {
        setError("Unknown error occured");
      }
    } catch (error) {
      console.log(error);
      setError("Fatal Error");
    }
  }

  return { signinHandler, loading, error };
}
