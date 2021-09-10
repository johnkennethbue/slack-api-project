import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { Context } from "../../App";
import { useHistory } from "react-router-dom";

const endPoint = "http://206.189.91.54/api/v1/auth/sign_in";

export default function useSignin() {
  const history = useHistory();

  const { setUserHeaders, userHeaders } = useContext(Context);
  console.log(userHeaders);

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

        const user = {
          "access-token": accessToken,
          uid,
          client,
          expiry,
        };
        setUserHeaders(user);

        Swal.fire({
          icon: "success",
          title: "Sign in Success",
        });

        history.push("/home");
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
