import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";

const GetAllUsers = () => {
  const { userHeaders, allUsers, setAllUsers } = useContext(Context);

  const rehydrate = () => {
    axios({
        method: "GET",
        url: "http://206.189.91.54/api/v1/users",
        headers: {
            "access-token": userHeaders.get("access-token"),
            client: userHeaders.get("client"),
            expiry: userHeaders.get("expiry"),
            uid: userHeaders.get("uid"),
          }
        })
        .then((response) => {
          setAllUsers(response.data.data);
        })
        .catch((error) => {
            console.error(error.response?.data.errors)
        });
  }
   useEffect(() => {
    rehydrate();
   }, []);

  return (
    <Fragment>
     <div>

    {
     allUsers.map(users => (
    <ul key={users.id}> {users.uid} </ul>
    ))}

    </div>
    </Fragment>
  );
};

export default GetAllUsers;
